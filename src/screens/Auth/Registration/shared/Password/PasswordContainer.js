import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Animated } from 'react-native'

import { actions as registrationActions } from '../../../../../redux/registration'

import PasswordView from './PasswordView'

class PasswordContainer extends Component {
	shownLength = new Animated.Value(0)

	shownConfirmation = new Animated.Value(0)

	constructor(props) {
		super(props)

		this.state = {
			password: '',
			passwordHidden: true,
			passwordConfirmation: '',
			passwordConfirmationHidden: true,
			lengthError: true,
			matchError: false,
		}
	}

	onClear = name => {
		return () => this.setState({ [name]: '' })
	}

	onChangePassword = text => {
		this.setState({ password: text })
		this.validatePassword(text)
	}

	onChangeConfirmation = text => {
		this.setState({ passwordConfirmation: text })
	}

	validatePassword = text => {
		const reg = /(?=.*[!@#$%^&*])(?=.*[a-z])[0-9a-zA-Z!@#$%^&*]{8,}/
		if (reg.test(text)) {
			this.setState({ lengthError: false })
			Animated.timing(this.shownLength, {
				toValue: 0,
				duration: 300,
			}).start()
		} else {
			this.setState({ lengthError: true })
			Animated.timing(this.shownLength, {
				toValue: 1,
				duration: 300,
			}).start()
		}
	}

	onHidden = name => {
		return () => this.setState({ [name]: !name })
	}

	forwardTo = () => {
		const { navigation, actions } = this.props
		const { password, passwordConfirmation } = this.state
		const routeTo = navigation.state.params.route
		actions.addPasswordRequest({ password, passwordConfirmation })
		navigation.navigate(routeTo)
	}

	render() {
		const {
			password,
			passwordHidden,
			passwordConfirmation,
			passwordConfirmationHidden,
			lengthError,
			matchError,
		} = this.state
		const { navigation } = this.props
		const notEmpty = password && passwordConfirmation

		return (
			<PasswordView
				onClear={this.onClear}
				onChangePassword={this.onChangePassword}
				onChangeConfirmation={this.onChangeConfirmation}
				onHidden={this.onHidden}
				forwardTo={this.forwardTo}
				navigation={navigation}
				notEmpty={notEmpty}
				password={password}
				passwordConfirmation={passwordConfirmation}
				passwordHidden={passwordHidden}
				passwordConfirmationHidden={passwordConfirmationHidden}
				shownLength={this.shownLength}
				shownConfirmation={this.shownConfirmation}
				lengthError={lengthError}
				matchError={matchError}
			/>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			...registrationActions,
		},
		dispatch,
	),
})
export default connect(null, mapDispatchToProps)(PasswordContainer)
