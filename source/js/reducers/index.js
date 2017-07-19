import { combineReducers } from 'redux';

//reducers
import {population} from './populationReducer'



const rootReducer = combineReducers({
	population
});

export default rootReducer