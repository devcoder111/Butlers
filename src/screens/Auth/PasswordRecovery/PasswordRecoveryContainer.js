import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actions as loginActions } from '../../../redux/auth'

import PasswordRecoveryView from './PasswordRecoveryView'

class PasswordRecoveryContainer extends PureComponent {
	constructor(props) {
		super(props)

		this.state = {
			email: '',
		}
	}

	forwardTo = email => {
		const { navigation, actions } = this.props
		actions.sendEmailForChangingPasswordRequest(email)
		navigation.navigate('RecoveryLink')
	}

	onChangeEmail = text => {
		this.setState({ email: text })
	}

	render() {
		const { navigation } = this.props
		const { email } = this.state

		return (
			<PasswordRecoveryView
				navigation={navigation}
				forwardTo={this.forwardTo}
				onChangeEmail={this.onChangeEmail}
				email={email}
			/>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			...loginActions,
		},
		dispatch,
	),
})
export default connect(
	null,
	mapDispatchToProps,
)(PasswordRecoveryContainer)
