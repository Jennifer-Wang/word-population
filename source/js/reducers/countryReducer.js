import {
	GET_COUNTRY_LIST_PENDING,
  GET_COUNTRY_LIST_SUCCESS,
  GET_COUNTRY_LIST_FAILURE
} from '../actions/countryActions'


const COUNTRIES_INITIAL_STATE = {
	fetching: false,
	data: null,
	error: null
};


export const countries = (state={COUNTRIES_INITIAL_STATE}, action)=>{
	switch (action.type){
		case GET_COUNTRY_LIST_PENDING:
			return {
					...state,
					fetching: true,
					data: null,
					error: null
			};
		case GET_COUNTRY_LIST_SUCCESS:
			return {
				...state,
				fetching: false,
				data: action.data,
				error: null
			};
		case GET_COUNTRY_LIST_FAILURE:
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