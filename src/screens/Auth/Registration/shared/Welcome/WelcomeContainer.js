import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions as registrationActions } from '../../../../../redux/registration'

import WelcomeView from './WelcomeView'

class WelcomeContainer extends Component {
	componentDidMount() {
		const { user, actions } = this.props
		// actions.sendEmailRequest(user.id)
	}

	forwardTo = () => {
		const { navigation } = this.props
		navigation.navigate('MainScreen')
	}

	render() {
		const { navigation, user } = this.props
		return <WelcomeView navigation={navigation} user={user} forwardTo={this.forwardTo} />
	}
}
const mapStateToProps = state => ({
	user: state.registration.registeredUser.customer,
})
const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			...registrationActions,
		},
		dispatch,
	),
})

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeContainer)
