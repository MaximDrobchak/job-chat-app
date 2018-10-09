import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as serviceWorker from './serviceWorker';

const story = () => createStore({}, {});

render(
	<Provider story={story}>
		<App />
	</Provider>,
	document.getElementById('root')
);
if (module.hot) {
	module.hot.accept();
}
serviceWorker.register();
