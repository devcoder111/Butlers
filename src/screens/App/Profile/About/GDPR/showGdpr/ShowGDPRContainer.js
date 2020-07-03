import React, { Component } from 'react'
import { connect } from 'react-redux'

import GDPR from './ShowGDPR'

class ShowGDPRContainer extends Component {
	render() {
		const { navigation, loading, gdprEn, gdprDa, user } = this.props
		return (
			<GDPR navigation={navigation} loading={loading} gdprEn={gdprEn} gdprDa={gdprDa} user={user} />
		)
	}
}

const mapStateToProps = state => ({
	gdprEn: state.profile.appSettings.gdpr_en,
	gdprDa: state.profile.appSettings.gdpr_da,
	loading: state.profile.getAppSettingsLoading,
	user: state.auth.user,
})

export default connect(mapStateToProps, null)(ShowGDPRContainer)
