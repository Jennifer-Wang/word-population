import ajax from '../utils/apiHelpers';
import routes from '../config';
import {getToday} from '../utils/timeHelpers';

export const GET_POPULATION_PENDING = 'GET_POPULATION_PENDING';
export const GET_POPULATION_SUCCESS = 'GET_POPULATION_SUCCESS';
export const GET_POPULATION_FAILURE = 'GET_POPULATION_FAILURE';

export const GET_POPULATION_FOR_18_PENDING = 'GET_POPULATION_FOR_18_PENDING';
export const GET_POPULATION_FOR_18_SUCCESS = 'GET_POPULATION_FOR_18_SUCCESS';
export const GET_POPULATION_FOR_18_FAILURE = 'GET_POPULATION_FOR_18_FAILURE';

export const getPopulation = (country) =>{
	if(!country){
		return;
	}
	return (dispatch)=>{
		dispatch({
			type: GET_POPULATION_PENDING,
			country
		});
		const today = getToday();
		const route = `${routes.population}/${country}/${today}`;
		return ajax.get(route)
			.then(res => {
				dispatch({
					type: GET_POPULATION_SUCCESS,
					country,
					data: res.data.total_population.population
				});
			})
			.catch(err => {
				dispatch({
					type: GET_POPULATION_FAILURE,
					country,
					error: err
				})
			})
	}
};

export const getPopulationForAge18 = (country) =>{
	if(!country){
		return;
	}
	return (dispatch)=>{
		dispatch({
			type: GET_POPULATION_FOR_18_PENDING,
			country
		});
		const route = `${routes.population}/2017/${country}/18`;
		return ajax.get(route)
			.then(res => {
				dispatch({
					type: GET_POPULATION_FOR_18_SUCCESS,
					country,
					data: res.data[0]
				});
			})
			.catch(err => {
				dispatch({
					type: GET_POPULATION_FOR_18_FAILURE,
					country,
					error: err
				})
			})
	}
};



