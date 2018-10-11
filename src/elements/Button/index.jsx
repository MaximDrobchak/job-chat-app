import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

const styles = {
	root: {
		width: 22,
		heigth: 22,
		'object-fit': 'contain',
	},
	popap: {
		position: 'fixed',
		width: 100,
		height: 100,
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		margin: 'auto',
		backgroundColor: 'rgba(0,0,0, 0.001)',
		'& div': {
			display: 'inline-flex',
			position: 'absolute',
			top: '25%',
			left: '25%',
			right: '25%',
			bottom: '25%',
			margin: 'auto',
			'& h1': {
				color: 'grey',
				opacity: 0.5,
				fontSize: 30,
			},
		},
	},
};

class Button extends React.Component {
	state = {
		showPopup: false,
	};
	togglePopup() {
		this.setState({ showPopup: !this.state.showPopup });
	}

	render() {
		const { classes, children, ...props } = this.props;
		return (
			<span
				className={classes.root}
				onClick={this.togglePopup.bind(this)}
				{...props}
			>
				{children}
				{this.state.showPopup ? (
					<div className={classes.popap}>
						<div>
							<h1>{this.props.text}</h1>
							<span onClick={this.props.closePopup}>X</span>
						</div>
					</div>
				) : null}
			</span>
		);
	}
}

Button.propTypes = {
	classes: PropTypes.object.isRequired,
};
export default injectSheet(styles)(Button);
