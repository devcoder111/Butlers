import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actions as registrationActions } from '../../../../../redux/registration'

import SignUpView from './SignUpView'

class SignUpContainer extends Component {
	forwardTo = (path, type) => {
		const { navigation, actions } = this.props
		actions.addRegistrationTypeRequest(type)
		navigation.navigate(path)
	}

	render() {
		const { navigation } = this.props
		return <SignUpView navigation={navigation} forwardTo={this.forwardTo} />
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
export default connect(null, mapDispatchToProps)(SignUpContainer)
