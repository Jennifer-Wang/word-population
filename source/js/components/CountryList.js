import React from 'react';
import PropTypes from 'prop-types';
import {Col, Button} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {getCountryList} from '../actions/countryActions'
import Country from './country';


class Population extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			numberOfCountries: null,
			totalPopulation: null
		};
		this.displayCountries = this.displayCountries.bind(this)
	}

	componentWillReceiveProps(nextProps){
		const {countries} = nextProps;
		if(countries){
			this.setState({numberOfCountries : countries.length})
		}
	}

	displayCountries(){
		const {countries} = this.props;
		return countries.map((country, i)=>{
			return (
				<Country country={country} key={i}/>
			)
		})
	}


	render(){
		const {getCountryList, countries, fetching} = this.props;
		const {numberOfCountries, totalPopulation} = this.state;
		return (
			<Col>
				<h1>Shortest Country Names</h1>
				<p>Populations of countries with shortest names</p>
				{countries && countries.length > 0 ?
					<div>
						<span>Total Population of countries : {totalPopulation}</span>
						<span>Number of Countries: {numberOfCountries}</span>
						{this.displayCountries()}
					</div>
					 :
					fetching ?
					<Button disabled>Fetching...</Button> :
					<Button onClick={getCountryList}>Fetch</Button>
				}
			</Col>
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