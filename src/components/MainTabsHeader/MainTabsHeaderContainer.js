/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import MainTabsHeader from './MainTabsHeader'

import { actions as profileActions } from '../../redux/profile'

class MainTabsHeaderContainer extends Component {
	componentDidMount = () => {
		const { actions } = this.props
		actions.getAppSettingsRequest()
	}

	render() {
		const {
			navigation,
			user,
			visibleInput,
			welcomeMessageEn,
			welcomeMessageDa,
			appSettings,
		} = this.props
		return (
			<MainTabsHeader
				navigation={navigation}
				user={user}
				visibleInput={visibleInput}
				welcomeMessageEn={welcomeMessageEn}
				welcomeMessageDa={welcomeMessageDa}
				appSettings={appSettings}
			/>
		)
	}
}
const mapStateToProps = state => ({
	user: state.auth.user,
	welcomeMessageEn: state.profile.appSettings.welcome_message_en,
	welcomeMessageDa: state.profile.appSettings.welcome_message_da,
	appSettings: state.profile.appSettings,
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			...profileActions,
		},
		dispatch,
	),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainTabsHeaderContainer)
