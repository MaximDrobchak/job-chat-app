import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import man from '../../assets/man.png';
import wooman from '../../assets/oval-4-copy_2018-10-09/oval-4-copy.jpg';
const styles = {
	root: {
		borderTop: '2px solid #dfe0e5',
		height: 300,
		display: 'flex',
		flexDirection: 'column',
		padding: {
			top: 20,
			bottom: 20,
			left: 20,
			right: 20,
		},
	},
	merry: {
		display: 'flex',
		width: 560,
		justifyContent: 'flex-start',
		margin: { bottom: 10 },
		'& span': {
			color: '#425563',
			fontFamily: 'Roboto',
			fontSize: 18,
			minWidth: 500,
			borderRadius: 8,
			backgroundColor: '#ebedf1',
			margin: {
				left: 20,
			},
		},
		'& div': {
			backgroundColor: '#fff',
		},
	},
	crrys: {
		display: 'flex',
		justifyContent: 'flex-end',
		alignSelf: 'flex-end',
		width: 560,
		margin: { bottom: 10 },
		color: '#fff',
		'& span': {
			color: '#fff',
			fontFamily: 'Roboto',
			fontSize: 18,
			minWidth: 500,
			borderRadius: 8,
			backgroundColor: '#0077c8',
			margin: {
				right: 20,
			},
		},
		'& div': {
			backgroundColor: '#fff',
		},
	},
};
class Main extends Component {
	render() {
		const { classes, messageStore } = this.props;
		return (
			<div className={classes.root}>
				{messageStore.map(
					(message, index) =>
						index % 2 === 0 ? (
							<div className={classes.crrys} key={index}>
								<span>{message}</span>
								<img src={wooman} alt="sss" />
								<div />
							</div>
						) : (
							<div className={classes.merry} key={index}>
								<div />
								<img src={man} alt="sss" />
								<span>{message}</span>
							</div>
						)
				)}
			</div>
		);
	}
}

Main.propTypes = {
	classes: PropTypes.object.isRequired,
};
export default connect(state => ({
	messageStore: state,
}))(injectSheet(styles)(Main));
