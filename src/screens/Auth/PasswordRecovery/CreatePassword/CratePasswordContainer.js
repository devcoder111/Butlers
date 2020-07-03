import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actions as loginActions } from '../../../../redux/auth'

import CreatePasswordView from './CreatePasswordView'

class CreatePasswordContainer extends PureComponent {
	constructor(props) {
		super(props)

		this.state = {
			email: '',
			password: '',
			showPassword: false,
		}
	}

	forwardTo = (username, password) => {
		const { navigation, actions } = this.props
		// actions.???(username, password)
		navigation.navigate('App')
	}

	onChangeEmail = text => {
		this.setState({ email: text })
	}

	onChangePass = text => {
		this.setState({ password: text })
	}

	render() {
		const { navigation } = this.props
		const { email, password, showPassword } = this.state

		const onShow = () => {
			this.setState({ showPassword: !showPassword })
		}
		return (
			<CreatePasswordView
				navigation={navigation}
				forwardTo={this.forwardTo}
				onChangeEmail={this.onChangeEmail}
				onChangePass={this.onChangePass}
				email={email}
				password={password}
				showPassword={showPassword}
				onShow={onShow}
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
)(CreatePasswordContainer)
