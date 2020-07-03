import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Animated } from 'react-native'
import { actions as registrationActions } from '../../../../../redux/registration'
import { actions as authActions } from '../../../../../redux/auth'

import EmailView from './EmailView'

class EmailContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			email: '',
			switchEmail: '',
			validationError: true,
		}
		this.shown = new Animated.Value(0)
	}

	onClear = () => {
		this.setState({ email: '' })
	}

	onSwitch = () => {
		const { switchEmail } = this.state
		this.setState({ switchEmail: !switchEmail })
	}

	onChange = text => {
		this.setState({ email: text.toLowerCase() })
		this.validate(text)
	}

	validate = text => {
		const reg = /^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.[a-z]{2,6}$/
		if (reg.test(text)) {
			this.setState({ validationError: false })
			Animated.timing(this.shown, {
				toValue: 0,
				duration: 300,
			}).start()
		} else {
			this.setState({ validationError: true })
			Animated.timing(this.shown, {
				toValue: 1,
				duration: 300,
			}).start()
		}
	}

	forwardTo = () => {
		const { email } = this.state
		const { navigation, actions, emailChecked, emailLoading } = this.props
		actions.addEmailRequest(email)
		actions.checkEmailUsedRequest({ email })
		//test
		navigation.navigate('PhoneNumber')
	}

	onNavigate = () => {
		const { navigation, actions } = this.props
		actions.cleanEmailChecker()
		navigation.navigate('PhoneNumber')
	}

	render() {
		const { email, switchEmail, validationError } = this.state
		const { navigation, emailChecked, checkEmailUsedError } = this.props
		return (
			<EmailView
				onClear={this.onClear}
				onChange={this.onChange}
				onSwitch={this.onSwitch}
				navigation={navigation}
				forwardTo={this.forwardTo}
				email={email}
				switchEmail={switchEmail}
				validationError={validationError}
				shown={this.shown}
				emailChecked={emailChecked}
				checkEmailUsedError={checkEmailUsedError}
				onNavigate={this.onNavigate}
			/>
		)
	}
}
const mapStateToProps = state => ({
	emailChecked: state.registration.checkEmailUsedResponse,
	emailLoading: state.registration.checkEmailUsedLoading,
	checkEmailUsedError: state.registration.checkEmailUsedError,
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			...registrationActions,
			...authActions,
		},
		dispatch,
	),
})
export default connect(mapStateToProps, mapDispatchToProps)(EmailContainer)
