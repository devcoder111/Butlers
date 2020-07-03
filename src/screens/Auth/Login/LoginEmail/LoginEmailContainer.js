import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actions as loginActions } from '../../../../redux/auth'

import LoginEmailView from './LoginEmailView'

class LoginEmailContainer extends PureComponent {
	constructor(props) {
		super(props)

		this.state = {
			email: '',
			password: '',
			showPassword: false,
		}
	}

	forwardTo = () => {
		const { actions } = this.props
		const { email, password } = this.state
		const search = email.indexOf('+')
		const phone = email
		if (search === -1) {
			actions.logInRequest({
				email,
				password,
			})
		} else {
			actions.logInRequest({
				phone,
				password,
			})
		}
	}

	onChangeEmail = text => {
		this.setState({ email: text.toLowerCase() })
	}

	onChangePass = text => {
		this.setState({ password: text })
	}

	onClear = text => {
		this.setState({ [text]: '' })
	}

	render() {
		const { navigation, authenticated, isLoginLoading, isLoginError } = this.props
		const { email, password, showPassword } = this.state
		const method = navigation.getParam('param')

		const onShow = () => {
			this.setState({ showPassword: !showPassword })
		}
		return (
			<LoginEmailView
				navigation={navigation}
				forwardTo={this.forwardTo}
				onChangeEmail={this.onChangeEmail}
				onChangePass={this.onChangePass}
				email={email}
				password={password}
				showPassword={showPassword}
				onShow={onShow}
				authenticated={authenticated}
				isLoginError={isLoginError}
				isLoginLoading={isLoginLoading}
				method={method}
				onClear={this.onClear}
			/>
		)
	}
}

const mapStateToProps = ({ auth: { isLoginError, isLoginLoading, authenticated } }) => ({
	isLoginError,
	isLoginLoading,
	authenticated,
})
const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			...loginActions,
		},
		dispatch,
	),
})
export default connect(mapStateToProps, mapDispatchToProps)(LoginEmailContainer)
