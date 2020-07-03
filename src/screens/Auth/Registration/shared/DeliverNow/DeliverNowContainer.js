import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions as registrationActions } from '../../../../../redux/registration'

import DeliverNowView from './DeliverNowView'

class DeliverNowContainer extends Component {
	componentDidMount() {
		const { user, actions } = this.props
		// actions.sendEmailRequest(user.id)
	}

	forwardTo = () => {
		const { navigation } = this.props
		navigation.navigate('Initials')
	}

	render() {
		const { navigation, user } = this.props
		return <DeliverNowView navigation={navigation} user={user} forwardTo={this.forwardTo} />
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

export default connect(mapStateToProps, mapDispatchToProps)(DeliverNowContainer)
