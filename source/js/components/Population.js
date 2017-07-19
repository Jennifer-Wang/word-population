import React from 'react';
import PropTypes from 'prop-types';
import {Col} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {getPopulation} from '../actions/populationActions.js'


class Population extends React.Component{
	constructor(props){
		super(props);
	}

	componentDidMount(){
		const {country} = this.props;
		this.props.getPopulation(country);
	}

	render(){
		const {title, data} = this.props;
		return (
			<Col sm={6}>
				<h1>{title}</h1>
				<p>As of today</p>
				{data && !data.fetching ?
					<p>{data.population.toLocaleString()}</p>
					:
					<p>fetching...</p>
				}
			</Col>
		)
	}
}

const mapStateToProps = (state, props) => {
	return {
		data: state.population.data[props.country],
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		getPopulation : bindActionCreators(getPopulation, dispatch)
	}
};

Population.propTypes = {
	country: PropTypes.string,
	title: PropTypes.string,
	data: PropTypes.object,
	getPopulation: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Population)