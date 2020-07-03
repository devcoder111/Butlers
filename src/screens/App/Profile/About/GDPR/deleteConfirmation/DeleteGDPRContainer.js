import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import { actions as profileActions } from '../../../../../../redux/profile'
import { actions as loginActions } from '../../../../../../redux/auth'

import DeleteGDPR from './DeleteGDPR'

class DeleteGDPRContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			value: '',
		}
	}

	onChange = text => {
		this.setState({ value: text })
	}

	onClear = () => {
		this.setState({ value: '' })
	}

	onNavigate = () => {
		const { actions } = this.props
		const { value } = this.state
		actions.deleteGdprRequest(value)
	}

	onLogOut = () => {
		const { actions } = this.props
		actions.logOutRequest()
	}

	render() {
		const {
			navigation,
			loading,
			gdprEn,
			gdprDa,
			user,
			deleteGdprResponse,
			deleteGdprLoading,
		} = this.props
		const { value } = this.state
		return (
			<DeleteGDPR
				navigation={navigation}
				loading={loading}
				gdprEn={gdprEn}
				gdprDa={gdprDa}
				user={user}
				value={value}
				onChange={this.onChange}
				onClear={this.onClear}
				onNavigate={this.onNavigate}
				onLogOut={this.onLogOut}
				deleteGdprResponse={deleteGdprResponse}
				deleteGdprLoading={deleteGdprLoading}
			/>
		)
	}
}

const mapStateToProps = state => ({
	gdprEn: state.profile.appSettings.gdpr_en,
	gdprDa: state.profile.appSettings.gdpr_da,
	loading: state.profile.getAppSettingsLoading,
	deleteGdprResponse: state.profile.deleteGdprResponse,
	user: state.auth.user,
	deleteGdprLoading: state.profile.deleteGdprLoading,
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			...profileActions,
			...loginActions,
		},
		dispatch,
	),
})

export default connect(mapStateToProps, mapDispatchToProps)(DeleteGDPRContainer)
