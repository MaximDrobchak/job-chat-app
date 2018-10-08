import React, { Component } from 'react';
import TestComponent from './components/TestComponent';
class App extends Component {
	render() {
		return (
			<div className="App">
				<p>Test</p>
				<TestComponent />
			</div>
		);
	}
}

export default App;
