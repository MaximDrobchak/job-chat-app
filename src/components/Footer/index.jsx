import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

const styles = {
	root: {
		padding: {
			top: 20,
			bottom: 20,
			left: 20,
			right: 20,
		},
		'& div': {
			marginTop: 20,
			display: 'flex',
			justifyContent: 'space-between',
			'& span': {
				opacity: 0.5,
				fontFamily: 'Roboto',
				fontSize: 14,
			},
			'& blockquote': {
				marginTop: 0,
				opacity: 0.5,
				fontFamily: 'Roboto',
				fontSize: 14,
			},
		},
	},
};
class Footer extends Component {
	render() {
		const { classes, children } = this.props;
		return (
			<div className={classes.root}>
				{children}
				<div>
					<span>
						Enter to send a message <strong>Shift + Enter</strong> for new line
					</span>
					<blockquote>
						<b>*bold </b>
						<i>_italic_ </i>
						<strike>~strice~ </strike>
						>qoute
					</blockquote>
				</div>
			</div>
		);
	}
}

Footer.propTypes = {
	classes: PropTypes.object.isRequired,
	children: PropTypes.object.isRequired,
};
export default injectSheet(styles)(Footer);
