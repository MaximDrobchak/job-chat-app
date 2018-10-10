import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { connect } from 'react-redux';
import MessageInput from './elements/MessageInput';

const styles = {
	root: {
		borderRadius: 4,
		backgroundColor: '#fff',
		maxWidth: 1040,
		minHeight: 904,
		border: '1px solid black',
		display: 'flex',
		flexDirection: 'column',
	},
	padding: {
		top: 20,
		bottom: 20,
		left: 20,
		right: 20,
	},
};
class App extends Component {
	render() {
		console.log(this.props.testStore);
		const { classes, testStore } = this.props;
		return (
			<div className={classes.root}>
				<Header />
				<Main
					children={
						<ul>
							{testStore.map((message, index) => (
								<li key={index}>{message}</li>
							))}
						</ul>
					}
				/>
				<Footer children={<MessageInput />} />
			</div>
		);
	}
}
App.propTypes = {
	classes: PropTypes.object.isRequired,
};
export default connect(state => ({
	testStore: state,
}))(injectSheet(styles)(App));
