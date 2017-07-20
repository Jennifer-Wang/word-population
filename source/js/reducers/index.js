import { combineReducers } from 'redux';

//reducers
import {population, populationForAge18} from './populationReducer'
import {countries} from './countryReducer'



const rootReducer = combineReducers({
	population,
	populationForAge18,
	countries
});

export default rootReducer