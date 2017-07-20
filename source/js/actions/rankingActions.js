import ajax from '../utils/apiHelpers';
import routes from '../config';

export const GET_RANKING_PENDING = 'GET_RANKING_PENDING';
export const GET_RANKING_SUCCESS = 'GET_RANKING_SUCCESS';
export const GET_RANKING_FAILURE = 'GET_RANKING_FAILURE';

export const getRanking = (dob, gender, country)=>{
	const route = `${routes.ranking}/${dob}/${gender}/${country}/today`;
	return (dispatch)=>{
		dispatch({type: GET_RANKING_PENDING});
		return ajax.get(route)
			.then(res => {
				dispatch({
					type: GET_RANKING_SUCCESS,
					data: res.data
				});
			})
			.catch(err => {
				dispatch({
					type: GET_RANKING_FAILURE,
					error: err
				})
			})
	}
};