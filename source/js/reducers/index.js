import { combineReducers } from 'redux';

//reducers
import {population, populationForAge18} from './populationReducer';
import {countries} from './countryReducer';
import {ranking} from './rankingReducer';



const rootReducer = combineReducers({
	population,
	populationForAge18,
	countries,
	ranking
});

export default rootReducer