import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Main from './index.jsx';

describe('Main', () => {
	it('отрисовывает без ошибки', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Main />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	test('есть корректный снимок', () => {
		const component = renderer.create(<Main />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
