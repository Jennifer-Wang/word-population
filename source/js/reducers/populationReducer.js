import {
	GET_POPULATION_PENDING,
	GET_POPULATION_SUCCESS,
	GET_POPULATION_FAILURE,
	GET_POPULATION_FOR_18_PENDING,
	GET_POPULATION_FOR_18_SUCCESS,
  GET_POPULATION_FOR_18_FAILURE
} from '../actions/populationActions';


const POPULATION_INITIAL_STATE = {
	data: {}
};

const POPULATION_AGE_18_INITIAL_STATE = {
	data: {}
};

export const population = (state=POPULATION_INITIAL_STATE, action)=>{
	switch (action.type){
		case GET_POPULATION_PENDING:
			return {...state,
				data: {
					...state.data,
					[action.country]: {
						population: null,
						fetching: true,
						error: null
					}
				}
			};
		case GET_POPULATION_SUCCESS:
			return {...state,
				data: {
					...state.data,
					[action.country]: {
						population: action.data,
						fetching: false,
						error: null
					}
				}
			};
		case GET_POPULATION_FAILURE:
			return {
				...state,
				data: {
					...state.data,
					[action.country]: {
						population: null,
						fetching: false,
						error: action.error
					}
				}
			};
		default:
			return state;
	}
};

export const populationForAge18 = (state=POPULATION_AGE_18_INITIAL_STATE, action)=>{
	switch (action.type){
		case GET_POPULATION_FOR_18_PENDING:
			return {...state,
				data: {
					...state.data,
					[action.country]: {
						total: null,
						females: null,
						males: null,
						fetching: true,
						error: null
					}
				}
			};
		case GET_POPULATION_FOR_18_SUCCESS:
			return {...state,
				data: {
					...state.data,
					[action.country]: {
						total: action.data.total,
						females: action.data.females,
						males: action.data.males,
						fetching: false,
						error: null
					}
				}
			};
		case GET_POPULATION_FOR_18_FAILURE:
			return {
				...state,
				data: {
					...state.data,
					[action.country]: {
						total: null,
						females: null,
						males: null,
						fetching: false,
						error: action.error
					}
				}
			};
		default:
			return state;
	}
};