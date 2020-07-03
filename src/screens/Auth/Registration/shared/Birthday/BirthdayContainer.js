import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actions as registrationActions } from '../../../../../redux/registration'

import BirthdayView from './BirthdayView'

import checkRoute from '../../../../../helpers/registration/checkRoute'

class BirthdayContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			date: '',
		}
	}

	getMaxDate = () => {
		const date = new Date()
		const year = date.getFullYear() - 18
		const month = date.getMonth() + 1
		const day = date.getDate()
		return `${year}-${month}-${day}`
	}

	onClear = () => {
		this.setState({ date: '' })
	}

	onChange = value => {
		this.setState({ date: value })
	}

	forwardTo = () => {
		const { navigation, actions, registrationType } = this.props
		const { date } = this.state
		const routeTo = checkRoute(navigation, registrationType)
		actions.addBirthdayRequest(date)
		navigation.navigate(routeTo)
	}

	render() {
		const { date } = this.state
		const { navigation } = this.props
		return (
			<BirthdayView
				onClear={this.onClear}
				onChange={this.onChange}
				forwardTo={this.forwardTo}
				navigation={navigation}
				date={date}
				getMaxDate={this.getMaxDate}
			/>
		)
	}
}

const mapStateToProps = ({ registration: { registrationType } }) => ({
	registrationType,
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			...registrationActions,
		},
		dispatch,
	),
})
export default connect(mapStateToProps, mapDispatchToProps)(BirthdayContainer)
