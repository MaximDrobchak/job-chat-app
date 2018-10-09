import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import settingIcon from '../../assets/settings.svg';
import Button from '../../elements/Button';
const styles = {
	root: {
		display: 'flex',
		justifyContent: 'space-between',
		padding: {
			top: 20,
			bottom: 13,
			left: 20,
			right: 20,
		},
		'& h1': {
			fontFamily: 'Roboto',
			fontSize: 22,
			fontWeight: 500,
		},
	},
};

const user = {
	name: 'Terry Crews',
};
class Header extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<h1>{user.name}</h1>
				<Button>
					<img src={settingIcon} alt="setting" />
				</Button>
			</div>
		);
	}
}
Header.propTypes = {
	classes: PropTypes.object.isRequired,
};
export default injectSheet(styles)(Header);
