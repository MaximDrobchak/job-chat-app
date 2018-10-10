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
		width: '92vw',
		height: '95vh',
		position: 'relative',
		borderRadius: 4,
		backgroundColor: '#fff',
		maxWidth: 1040,
		border: '1px solid black',
		display: 'flex',
		flexDirection: 'column',
		textRendering: 'optimizeLegibility',
		background: '#fff',
		textAlign: 'center',
	},
	padding: {
		top: 20,
		bottom: 20,
		left: 20,
		right: 20,
	},
	'@media (max-width: 1039px)': {
		root: {
			width: '92vw',
			height: '95vh',
		},
	},
};
class App extends Component {
	render() {
		console.log(this.props.messageStore);
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<Header />
				<Main />
				<Footer children={<MessageInput />} />
			</div>
		);
	}
}
App.propTypes = {
	classes: PropTypes.object.isRequired,
};
export default connect(state => ({
	messageStore: state,
}))(injectSheet(styles)(App));
