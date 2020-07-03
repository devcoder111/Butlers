import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Animated } from 'react-native'

import { actions as registrationActions } from '../../../../../redux/registration'
import { actions as authActions } from '../../../../../redux/auth'

import PhoneNumberView from './PhoneNumberView'

import checkRoute from '../../../../../helpers/registration/checkRoute'

class PhoneNumberContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			value: '',
			isPickerVisible: false,
			country: '',
			code: '',
			validationError: true,
		}
		this.shown = new Animated.Value(0)
	}

	onClear = () => {
		this.setState({ value: '' })
	}

	onChange = text => {
		this.setState({ value: text })
		this.validate(text)
	}

	validate = text => {
		if (text.length === 7) {
			this.setState({ validationError: false })
			Animated.timing(this.shown, {
				toValue: 0,
				duration: 300,
			}).start()
		} else if (text.length === 1 || text.length === 6) {
			this.setState({ validationError: true })
			Animated.timing(this.shown, {
				toValue: 1,
				duration: 300,
			}).start()
		}
	}

	togglePicker = () => {
		const { isPickerVisible } = this.state
		this.setState({ isPickerVisible: !isPickerVisible })
		console.log('toggle')
	}

	changeCountry = inputValue => {
		const values = inputValue.split('|')
		console.log('change')
		this.setState({ country: values[0], code: values[1] })
	}

	forwardTo = () => {
		const { value, code } = this.state
		const { actions } = this.props
		const config = {
			phone: `+${code}${value}`,
			locale: 'en',
		}
		actions.addPhoneRequest(`+${code}${value}`)
		actions.sendVerifySmsRequest(config)
		actions.checkEmailUsedRequest({ phone: `+${code}${value}` })
	}

	onNavigate = () => {
		const { navigation, actions } = this.props
		actions.cleanEmailChecker()
		navigation.navigate('SmsCode')
	}

	render() {
		const { code, country, value, isPickerVisible, validationError, registrationType } = this.state
		const { navigation, checkEmailUsedResponse, checkEmailUsedError } = this.props
		const routeTo = checkRoute(navigation, registrationType)
		return (
			<PhoneNumberView
				onClear={this.onClear}
				onChange={this.onChange}
				forwardTo={this.forwardTo}
				navigation={navigation}
				code={code}
				country={country}
				value={value}
				isPickerVisible={isPickerVisible}
				togglePicker={this.togglePicker}
				changeCountry={this.changeCountry}
				validationError={validationError}
				shown={this.shown}
				routeTo={routeTo}
				checkEmailUsedResponse={checkEmailUsedResponse}
				checkEmailUsedError={checkEmailUsedError}
				onNavigate={this.onNavigate}
			/>
		)
	}
}
const mapStateToProps = state => ({
	checkEmailUsedResponse: state.registration.checkEmailUsedResponse,
	registrationType: state.registration.registrationType,
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
export default connect(mapStateToProps, mapDispatchToProps)(PhoneNumberContainer)
