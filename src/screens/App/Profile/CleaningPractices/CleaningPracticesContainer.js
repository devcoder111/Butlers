/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'

import { actions as profileActions } from '../../../../redux/profile'

import CleaningPractices from './CleaningPractices'

class CleaningPracticesContainer extends Component {
	componentDidMount = () => {
		const { actions } = this.props
		actions.getAppSettingsRequest()
	}

	static navigationOptions = {
		header: null,
	}

	render() {
		const { navigation, loading, practicesEn, practicesDa, user } = this.props
		return (
			<CleaningPractices
				navigation={navigation}
				loading={loading}
				practicesEn={practicesEn}
				practicesDa={practicesDa}
				user={user}
			/>
		)
	}
}

const mapStateToProps = state => ({
	practicesEn: state.profile.appSettings.cleaning_practices_en,
	practicesDa: state.profile.appSettings.cleaning_practices_da,
	loading: state.profile.getAppSettingsLoading,
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

export default connect(mapStateToProps, mapDispatchToProps)(CleaningPracticesContainer)
