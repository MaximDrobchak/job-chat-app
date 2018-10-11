import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as serviceWorker from './serviceWorker';
import messages from './reducers/messages';

const store = createStore(
	messages,
	window.__REDUX_DEVTOOLS_EXTENSION && window.__REDUX_DEVTOOLS_EXTENSION()
);

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
