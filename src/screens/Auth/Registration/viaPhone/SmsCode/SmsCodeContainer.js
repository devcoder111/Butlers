import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actions as registrationActions } from '../../../../../redux/registration'
import { actions as authActions } from '../../../../../redux/auth'

import SmsCodeView from './SmsCodeView'

class SmsCodeContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			value: '',
			visibleModal: false,
			codeSentVisible: false,
		}
	}

	onChange = text => {
		this.setState({ value: text })
	}

	onClear = () => {
		this.setState({ value: '' })
	}

	forwardTo = () => {
		const { navigation, actions, verificationLoading, verificationError } = this.props
		const { value } = this.state
		actions.checkVerifySmsRequest(value)
		if (verificationLoading) {
			this.setState({ visibleModal: true })
		} else if (verificationError) {
			console.log('error')
		// } else navigation.navigate('Email')
		} else navigation.navigate('Birthday')
	}

	resendCode = () => {
		const { actions, phone } = this.props
		const config = {
			phone: `${phone}`,
			locale: 'en',
		}
		actions.sendVerifySmsRequest(config)
		this.setState({ codeSentVisible: true })
		setTimeout(() => {
			this.setState({ codeSentVisible: false })
		}, 4500)
	}

	render() {
		const { value, visibleModal, codeSentVisible } = this.state
		const { navigation, code } = this.props
		const routeTo = navigation.state.params.route
		return (
			<SmsCodeView
				onClear={this.onClear}
				onChange={this.onChange}
				goBack={this.goBack}
				navigation={navigation}
				forwardTo={this.forwardTo}
				code={code}
				value={value}
				visibleModal={visibleModal}
				routeTo={routeTo}
				resendCode={this.resendCode}
				codeSentVisible={codeSentVisible}
			/>
		)
	}
}

const mapStateToProps = state => ({
	code: state.auth.sendSMSResponse.code,
	verificationError: state.auth.checkSMSError,
	verificationLoading: state.auth.checkSMSLoading,
	sendSMSResponse: state.auth.sendSMSResponse,
	phone: state.registration.phone,
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
export default connect(mapStateToProps, mapDispatchToProps)(SmsCodeContainer)
