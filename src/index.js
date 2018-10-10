import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as serviceWorker from './serviceWorker';

const messages = (state = [], action) => {
	if (action.type === 'ADD_MESSAGE') {
		return [...state, action.messageList];
	}
	return state;
};
const store = createStore(messages);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
if (module.hot) {
	module.hot.accept();
}
serviceWorker.register();
