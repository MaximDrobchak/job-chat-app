import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Header from './index.jsx';

describe('Header', () => {
	it('отрисовывает без ошибки', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Header />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	test('есть корректный снимок', () => {
		const component = renderer.create(<Header />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
