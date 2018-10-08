import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Index from './index.jsx';
describe('Index', () => {
	it('отрисовывает без ошибки', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Index />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	test('есть корректный снимок', () => {
		const component = renderer.create(<Index />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
