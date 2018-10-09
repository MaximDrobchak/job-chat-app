import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Footer from './index.jsx';

describe('Footer', () => {
	it('отрисовывает без ошибки', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Footer />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	test('есть корректный снимок', () => {
		const component = renderer.create(<Footer />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
