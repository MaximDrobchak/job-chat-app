import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import Button from '../Button';
import attachmentImage from '../../assets/attachment.svg';
import { connect } from 'react-redux';

const styles = {
	root: {
		position: 'relative',
		'& input': {
			width: '100%',
			height: 46,
			borderRadius: 4,
			backgroundColor: '#fff',
			border: 'solid 2px #ecedf0',
			fontFamily: 'Roboto-Regular',
			fontSize: 18,
		},
	},
	buttonMessage: {
		position: 'absolute',
		right: '1%',
		top: '25%',
	},
};
class MessageInput extends Component {
	state = {
		input: '',
	};

	addMessage() {
		console.log(this.MessageInput.value);
		this.props.onAddMessage(this.MessageInput.value);
		this.MessageInput.value = '';
	}
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<input
					onKeyUp={e => {
						if (e.key === 'Enter' && e.shiftKey) {
							this.addMessage();
						}
					}}
					ref={input => {
						this.MessageInput = input;
					}}
					type="text"
					placeholder="Message to Terry Crews"
				/>
				<Button className={classes.buttonMessage}>
					<img src={attachmentImage} alt="attachment" />
				</Button>
			</div>
		);
	}
}
MessageInput.propTypes = {
	classes: PropTypes.object.isRequired,
};
export default connect(
	state => ({
		messageStore: state,
	}),
	dispatch => ({
		onAddMessage: messageName => {
			dispatch({
				type: 'ADD_MESSAGE',
				messageList: messageName,
			});
		},
	})
)(injectSheet(styles)(MessageInput));
