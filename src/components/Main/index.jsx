import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
const styles = {
	root: {
		borderTop: '2px solid #dfe0e5',
		height: '70%',
		padding: {
			top: 20,
			bottom: 20,
			left: 20,
			right: 20,
		},
	},
};
class Main extends Component {
	render() {
		const { classes, children } = this.props;
		return <div className={classes.root}>{children}</div>;
	}
}

Main.propTypes = {
	classes: PropTypes.object.isRequired,
};
export default injectSheet(styles)(Main);
