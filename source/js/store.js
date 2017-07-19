import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

const logger = createLogger();
let middleware = applyMiddleware(thunk, promise);

if(process.env.NODE_ENV === 'development'){
	middleware = applyMiddleware(thunk, promise, logger);
}
const store = createStore(reducer, middleware);

export default store;