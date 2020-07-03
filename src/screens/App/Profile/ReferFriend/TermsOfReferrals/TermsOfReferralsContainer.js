/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'

import { actions as profileActions } from '../../../../../redux/profile'

import TermsOfReferrals from './TermsOfReferrals'

class TermsOfReferralsContainer extends Component {
	static navigationOptions = {
		header: null,
	}

	componentDidMount = () => {
		const { actions } = this.props
		actions.getAppSettingsRequest()
	}

	render() {
		const { navigation, loading, termsEn, termsDa, user } = this.props
		return (
			<TermsOfReferrals
				navigation={navigation}
				loading={loading}
				termsEn={termsEn}
				termsDa={termsDa}
				user={user}
			/>
		)
	}
}

const mapStateToProps = state => ({
	termsEn: state.profile.appSettings.terms_of_referrals_en,
	termsDa: state.profile.appSettings.terms_of_referrals_da,
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

export default connect(mapStateToProps, mapDispatchToProps)(TermsOfReferralsContainer)
