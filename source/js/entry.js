import App from './App';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';
import '../styles/main.scss';

const wrapper = (
	<Provider store={store}>
		<App/>
	</Provider>
);

render(wrapper, document.getElementById('app'));