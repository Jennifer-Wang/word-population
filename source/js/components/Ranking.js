import React from 'react';
import {Row, Col, FormControl, Button, Clearfix} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {getRanking, clearRanking} from '../actions/rankingActions'

class Ranking extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			gender: '',
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
		});
		this.props.clearRanking();
	}

	handleFetchClick(){
		let {dob} = this.state;
		const {gender} = this.state;
		dob = dob.trim();
		this.props.getRanking(dob, gender, 'World');


	}

	render() {
		const {dob, gender} = this.state;
		const {data, fetching} = this.props;
		return (
			<Row>
				<Col sm={8} smOffset={2}>
					<h1>Check Your Ranking</h1>
					<p>Enter your information to check where you rank</p>
					<Col sm={4}>
						<FormControl
							type="type"
							value={dob}
							placeholder="Date of Birth YYYY-MM-DD"
							onChange={this.handleChange.bind(this, 'dob')}
						/>
					</Col>
					<Col sm={4}>
						<FormControl
							componentClass="select"
							placeholder="gender"
							onChange={this.handleChange.bind(this, 'gender')}
						  value={gender}
						>
							<option value="">Gender</option>
							<option value="unisex">Unisex</option>
							<option value="male">Male</option>
							<option value="female">Female</option>
						</FormControl>
					</Col>

					{data ?
						<div>
							<Col sm={4}>
								<Button bsStyle='danger' onClick={this.clearOnClick}>Clear</Button>
							</Col>
							<Clearfix></Clearfix>
							<Col>
								<div className='country'>
									<div className='pull-left'>
										<p>{`DOB: ${data.dob}`}</p>
										<p>{`Gender: ${data.sex}`}</p>
									</div>
									<div className='pull-left'>
										<p className="bold">Your rank in the world</p>
										<p>{`You are ranked: ${data.rank.toLocaleString()}`}</p>
									</div>
								</div>
							</Col>
						</div> : fetching ?
						<Col sm={4}>
							<Button bsStyle='primary'>Fetching...</Button>
						</Col> :
						<Col sm={4}>
							<Button bsStyle='primary' onClick={this.handleFetchClick}>Fetch</Button>
						</Col>
					}
				</Col>
			</Row>

		)
	}
}

const mapStateToProps = (state, props) => {
	return {
		data : state.ranking.data,
		fetching: state.ranking.fetching
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		getRanking: bindActionCreators(getRanking, dispatch),
		clearRanking: bindActionCreators(clearRanking, dispatch)

	}
};

Ranking.propTypes = {
	getRanking: PropTypes.func,
	data: PropTypes.object,
	fetching : PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(Ranking)