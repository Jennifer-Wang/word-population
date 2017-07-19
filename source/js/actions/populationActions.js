import ajax from '../utils/apiHelpers';
import routes from '../config';
import {getToday} from '../utils/timeHelpers';

export const GET_POPULATION_PENDING = 'GET_POPULATION_PENDING';
export const GET_POPULATION_SUCCESS = 'GET_POPULATION_SUCCESS';
export const GET_POPULATION_FAILURE = 'GET_POPULATION_FAILURE';

export const getPopulation = (country) =>{
	if(!country){
		return;
	}
	return (dispatch)=>{
		dispatch({type: GET_POPULATION_PENDING});
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



