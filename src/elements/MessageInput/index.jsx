import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import Button from '../Button';
import attachmentImage from '../../assets/attachment.svg';
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
const MessageInput = ({ classes }) => (
	<div className={classes.root}>
		<input
			// className={classes.inputMessage}
			type="text"
			placeholder="Message to Terry Crews"
		/>
		<Button className={classes.buttonMessage}>
			<img src={attachmentImage} alt="attachment" />
		</Button>
	</div>
);

MessageInput.propTypes = {
	classes: PropTypes.object.isRequired,
};
export default injectSheet(styles)(MessageInput);
