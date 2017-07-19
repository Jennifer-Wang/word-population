import { combineReducers } from 'redux';

//reducers
import {population} from './populationReducer'
import {countries} from './countryReducer'



const rootReducer = combineReducers({
	population,
	countries
});

export default rootReducer