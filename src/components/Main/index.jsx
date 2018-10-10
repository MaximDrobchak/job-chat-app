import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import man from '../../assets/man.png';
import wooman from '../../assets/oval-4-copy_2018-10-09/oval-4-copy.jpg';
const styles = {
	root: {
		overflow: 'auto',
		borderTop: '2px solid #dfe0e5',
		minHeight: '50vh',
		maxHeight: '90%',
		display: 'flex',
		flexDirection: 'column',
		padding: {
			top: 20,
			bottom: 20,
			left: 20,
			right: 20,
		},
	},
	dateString: {
		color: '#425563',
		textAlign: 'center',
		background: '#fff',
		opacity: 0.5,
		fontFamily: 'Roboto',
		fontSize: 16,
	},
	merry: {
		flexShrink: 0,
		display: 'flex',
		justifyContent: 'flex-start',
		margin: { bottom: 10 },
		'& img': {
			width: 40,
			height: 40,
		},
		'& div': {
			flexbasis: 'auto',
			'& span': {
				display: 'flex',
				padding: {
					top: 8,
					bottom: 5,
					left: 5,
					rigth: 5,
				},
				alignItems: 'flex-start',
				color: '#425563',
				fontFamily: 'Roboto',
				fontSize: 18,
				width: 500,
				borderRadius: 8,
				backgroundColor: '#ebedf1',
				margin: {
					left: 20,
				},
			},
		},
	},
	crrys: {
		flexShrink: 0,
		display: 'flex',
		justifyContent: 'flex-end',
		alignSelf: 'flex-end',
		margin: { bottom: 10 },
		color: '#fff',
		'& img': {
			top: '100%',
			width: 40,
			height: 40,
		},
		'& div': {
			'& span': {
				display: 'flex',
				padding: {
					top: 8,
					bottom: 5,
					left: 5,
					rigth: 5,
				},
				alignItems: 'flex-start',
				color: '#fff',
				fontFamily: 'Roboto',
				fontSize: 18,
				width: 500,
				borderRadius: 8,
				backgroundColor: '#0077c8',
				margin: {
					right: 20,
				},
			},
		},
	},
	avatar: {
		maxWidth: 42,
		minWidth: 40,
		flexShrink: 0,
		display: 'flex',
		alignSelf: 'flex-end',
	},
	'@media (max-width: 640px)': {
		root: {
			overflow: 'auto',
			height: '95%',
		},
		crrys: {
			flexShrink: 0,
			'& div': {
				width: '100%',
				'& span': {
					width: '70%',
				},
			},
		},
		merry: {
			flexShrink: 0,
			'& div': {
				width: '100%',
				'& span': {
					width: '70%',
				},
			},
		},
	},
};
const data = new Date();
class Main extends Component {
	componentDidMount() {
		this.scrollToBottom();
	}

	componentDidUpdate() {
		this.scrollToBottom();
	}

	scrollToBottom() {
		this.el.scrollIntoView({ behaviour: 'smooth' });
	}
	render() {
		const { classes, messageStore } = this.props;
		return (
			<div className={classes.root}>
				{messageStore.map(
					(message, index) =>
						index % 2 === 0 ? (
							<div className={classes.crrys} key={index}>
								<div>
									<div className={classes.dateString}>
										{data.toLocaleTimeString('en-US', { month: 'short' })}
									</div>
									<span>{message}</span>
								</div>
								<div className={classes.avatar}>
									<img src={wooman} alt="sss" />
								</div>
								<span />
							</div>
						) : (
							<div className={classes.merry} key={index}>
								<span />
								<div className={classes.avatar}>
									<img src={man} alt="sss" />
								</div>
								<div>
									<div className={classes.dateString}>
										{data.toLocaleTimeString('en-US', { month: 'short' })}
									</div>
									<span>{message}</span>
								</div>
							</div>
						)
				)}
				<div
					ref={el => {
						this.el = el;
					}}
				/>
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
