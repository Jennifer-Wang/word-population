import ajax from '../utils/apiHelpers';
import routes from '../config';
import {shortestCountryNames} from '../utils/countryHelpers';

export const GET_COUNTRY_LIST_PENDING = 'GET_COUNTRY_LIST_PENDING';
export const GET_COUNTRY_LIST_SUCCESS = 'GET_COUNTRY_LIST_SUCCESS';
export const GET_COUNTRY_LIST_FAILURE = 'GET_COUNTRY_LIST_FAILURE';

export const getCountryList = ()=>{
	return (dispatch)=>{
		dispatch({type: GET_COUNTRY_LIST_PENDING});
		return ajax.get(routes.countries)
			.then(res => {
				const data = shortestCountryNames(res.data.countries);
				dispatch({
					type: GET_COUNTRY_LIST_SUCCESS,
					data
				});
			})
			.catch(err => {
				dispatch({
					type: GET_COUNTRY_LIST_FAILURE,
					error: err
				})
			})
	}
};