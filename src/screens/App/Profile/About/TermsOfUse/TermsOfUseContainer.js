import React, { Component } from 'react'
import { connect } from 'react-redux'

import TermsOfUse from './TermsOfUse'

class TermsOfUseContainer extends Component {
	render() {
		const { navigation, loading, termsEn, termsDa, user } = this.props
		return (
			<TermsOfUse
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
	termsEn: state.profile.appSettings.terms_of_use_en,
	termsDa: state.profile.appSettings.terms_of_use_da,
	loading: state.profile.getAppSettingsLoading,
	user: state.auth.user,
})

export default connect(mapStateToProps, null)(TermsOfUseContainer)
