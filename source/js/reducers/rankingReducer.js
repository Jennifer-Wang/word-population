import {
	GET_RANKING_PENDING,
	GET_RANKING_SUCCESS,
	GET_RANKING_FAILURE
} from '../actions/rankingActions'

const RANKING_INITIAL_STATE = {
	fetching: false,
	data: null,
	error: null
};


export const ranking = (state=RANKING_INITIAL_STATE, action)=>{
	switch (action.type){
		case GET_RANKING_PENDING:
			return {
				...state,
				fetching: true,
				data: null,
				error: null
			};
		case GET_RANKING_SUCCESS:
			return {
				...state,
				fetching: false,
				data: action.data,
				error: null
			};
		case GET_RANKING_FAILURE:
			return {
				...state,
				fetching: false,
				data: null,
				error: action.error
			};
		default:
			return state;
	}
};