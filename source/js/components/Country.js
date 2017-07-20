import React from 'react';
import PropTypes from 'prop-types';
import {Col} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {getPopulationForAge18} from '../actions/populationActions';



class Country extends React.Component{
	constructor(props){
		super(props);
	}

	componentWillReceiveProps(nextProps){
		const {data} = nextProps;
		if(data && data.total){
			this.props.incrementTotalPopulation(data.total);
		}
	}



	render(){
		const {country, getPopulationForAge18, data} = this.props;
		return (
			<Col onClick={getPopulationForAge18.bind(this, country)}>
				<h1>{country}</h1>
				{data && !data.fetching ?
					<div>
						<span>Total Population {data.total.toLocaleString()}</span>
						<span>Male Population {data.males.toLocaleString()}</span>
						<span>Female Population {data.females.toLocaleString()}</span>
					</div> : null
				}
			</Col>
		)
	}
}

const mapStateToProps = (state, props) => {
	const {country} = props;
	return {
		data: state.populationForAge18.data[country]
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		getPopulationForAge18: bindActionCreators(getPopulationForAge18, dispatch)
	}
};

Country.propTypes = {
	country: PropTypes.string,
	getPopulationForAge18: PropTypes.func,
	data: PropTypes.object,
	incrementTotalPopulation: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Country)