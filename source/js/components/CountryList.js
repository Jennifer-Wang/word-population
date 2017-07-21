import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Button, Clearfix} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {getCountryList} from '../actions/countryActions'
import Country from './country';


class Population extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			numberOfCountries: 0,
			totalPopulation: 0
		};
		this.displayCountries = this.displayCountries.bind(this);
		this.incrementTotalPopulation = this.incrementTotalPopulation.bind(this);
	}

	componentWillReceiveProps(nextProps){
		const {countries} = nextProps;
		if(countries){
			this.setState({numberOfCountries : countries.length})
		}
	}

	incrementTotalPopulation(population){
		this.setState({
			totalPopulation: this.state.totalPopulation + population
		})
	}

	displayCountries(){
		const {countries} = this.props;
		return countries.map((country, i)=>{
			return (
				<Country
					country={country}
					key={i}
					incrementTotalPopulation={this.incrementTotalPopulation}
				/>
			)
		})
	}


	render(){
		const {getCountryList, countries, fetching} = this.props;
		const {numberOfCountries, totalPopulation} = this.state;
		return (
			<Row className="country-list">
				<Col sm={8} smOffset={2}>
					<h1>Shortest Country Names</h1>
					<p>Populations of countries with shortest names</p>
					{countries && countries.length > 0 ?
						<div>
							<div className="stats">
								<span className="pull-left">Total Population of countries : {totalPopulation}</span>
								<span className="pull-right">Number of Countries: {numberOfCountries}</span>
							</div>
							<Clearfix></Clearfix>
							{this.displayCountries()}
						</div>
						:
						fetching ?
							<Button disabled>Fetching...</Button> :
							<Button onClick={getCountryList}>Fetch</Button>
					}
				</Col>
			</Row>
		)
	}
}

const mapStateToProps = (state, props) => {
	return {
		countries: state.countries.data,
		fetching : state.countries.fetching
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		getCountryList : bindActionCreators(getCountryList, dispatch)
	}
};

Population.propTypes = {
	countries: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(Population)