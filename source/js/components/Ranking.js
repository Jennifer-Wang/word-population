import React from 'react';
import {Col, FormControl, Button, FormGroup} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {getRanking} from '../actions/rankingActions'

class Ranking extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			gender: 'unisex',
			dob: '1989-06-03'
		};
		this.handleFetchClick = this.handleFetchClick.bind(this);
		this.clearOnClick = this.clearOnClick.bind(this);
	}

	handleChange(type, e){
		this.setState({
			[type] : e.target.value
		})
	}

	clearOnClick(){
		this.setState({
			gender: 'unisex',
			dob: ''
		})
	}

	handleFetchClick(){
		let {dob} = this.state;
		const {gender} = this.state;
		dob = dob.trim();
		this.props.getRanking(dob, gender, 'World');


	}

	render() {
		const {dob, gender} = this.state;
		const {data} = this.props;
		return (
			<Col>
				<FormControl
					type="type"
				  value={dob}
					placeholder="Date of Birth YYYY-MM-DD"
				  onChange={this.handleChange.bind(this, 'dob')}
				/>
					<select
						placeholder="Gender"
						value={gender}
						onChange={this.handleChange.bind(this, 'gender')}
					>
						<option value="unisex">Gender</option>
						<option value="male">Male</option>
						<option value="female">Female</option>
					</select>
				<Button onClick={this.handleFetchClick}>Fetch</Button>

				<Button onClick={this.clearOnClick}>Clear</Button>
				{data ?
					<div>
						<span>{`DOB: ${data.dob}`}</span>
						<span>{`Gender: ${data.sex}`}</span>
						<span>Your rank in the world</span>
						<span>{`You are ranked: ${data.rank.toLocaleString()}`}</span>
					</div> :
					null
				}
			</Col>
		)
	}
}

const mapStateToProps = (state, props) => {
	return {
		data : state.ranking.data
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		getRanking: bindActionCreators(getRanking, dispatch)
	}
};

Ranking.propTypes = {
	getRanking: PropTypes.func,
	data: PropTypes.object,
	fetching : PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(Ranking)