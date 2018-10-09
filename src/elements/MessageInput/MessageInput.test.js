import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import MessageInput from './index.jsx';

describe('MessageInput', () => {
	it('отрисовывает без ошибки', () => {
		const div = document.createElement('div');
		ReactDOM.render(<MessageInput />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	test('есть корректный снимок', () => {
		const component = renderer.create(<MessageInput />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
