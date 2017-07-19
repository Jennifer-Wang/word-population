import React from 'react';
import PropTypes from 'prop-types';
import {Col} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';



class Country extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		const {country} = this.props;
		return (
			<h1>{country}</h1>
		)
	}
}

const mapStateToProps = (state, props) => {
	return {
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
	}
};

Country.propTypes = {
	country: PropTypes.string,

};

export default connect(mapStateToProps, mapDispatchToProps)(Country)