/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'

import { actions as profileActions } from '../../../../redux/profile'

import Notifications from './Notifications'

class NotificationsContainer extends Component {
	componentDidMount = () => {
		const { actions } = this.props
		actions.getNotificationOptionsRequest()
	}

	onChange = config => {
		const { actions } = this.props
		actions.setNotificationOptionsRequest(config)
	}

	static navigationOptions = {
		header: null,
	}

	render() {
		const { navigation, loading, user, options } = this.props
		return (
			<Notifications
				navigation={navigation}
				loading={loading}
				user={user}
				options={options}
				onChange={this.onChange}
			/>
		)
	}
}

const mapStateToProps = state => ({
	loading: state.profile.getNotificationOptionsLoading,
	options: state.profile.getNotificationOptionsResponse,
	user: state.auth.user,
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			...profileActions,
		},
		dispatch,
	),
})

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer)
