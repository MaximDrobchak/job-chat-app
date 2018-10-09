import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

const styles = {
	root: {
		width: 22,
		heigth: 22,
		'object-fit': 'contain',
	},
};
const Button = ({ classes, children, ...props }) => (
	<span className={classes.root} onClick={() => alert('hello')} {...props}>
		{children}
	</span>
);

Button.propTypes = {
	classes: PropTypes.object.isRequired,
};
export default injectSheet(styles)(Button);
