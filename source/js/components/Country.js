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
					{data && !data.fetching ?
						<div className='country'>
							<div className='pull-left'>
								<h4>{country}</h4>
								<p>Total Population {data.total.toLocaleString()}</p>
							</div>
							<div className='pull-left'>
								<p>Male Population {data.males.toLocaleString()}</p>
								<p>Female Population {data.females.toLocaleString()}</p>
							</div>
						</div> :
						<div className='country'>
							<h4>{country}</h4>
						</div>
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