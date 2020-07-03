import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TouchableOpacity, View, Text } from 'react-native'

import { bindActionCreators } from 'redux'
import { actions as profileActions } from '../../../../../redux/profile'

import GDPR from './GDPR'

class GDPRContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			visibleSendModal: false,
			visibleDeleteModal: false,
		}
	}

	onSendMailClick = () => {
		const { actions } = this.props
		actions.sendGdprRequest()
		this.setState({ visibleSendModal: true })
		setTimeout(() => {
			this.setState({ visibleSendModal: false })
		}, 3000)
	}

	onSendMailModalClose = () => {
		this.setState({ visibleSendModal: false })
	}

	onDeleteClickModal = () => {
		const { actions } = this.props
		this.setState({ visibleDeleteModal: true })
		actions.sendGdprCodeRequest()
	}

	onDeleteClick = () => {
		const { navigation } = this.props
		this.onDeleteModalClose()
		navigation.navigate('DeleteGdpr')
		this.setState({ visibleDeleteModal: false })
	}

	onDeleteModalClose = () => {
		this.setState({ visibleDeleteModal: false })
	}

	render() {
		const { navigation, gdprEn, gdprDa, user } = this.props
		const { visibleSendModal, visibleDeleteModal } = this.state
		return (
			<GDPR
				navigation={navigation}
				visibleSendModal={visibleSendModal}
				visibleDeleteModal={visibleDeleteModal}
				onSendMailModalClose={this.onSendMailModalClose}
				onSendMailClick={this.onSendMailClick}
				onDeleteModalClose={this.onDeleteModalClose}
				onDeleteClick={this.onDeleteClick}
				onDeleteClickModal={this.onDeleteClickModal}
				gdprDa={gdprDa}
				user={user}
				gdprEn={gdprEn}
			/>
		)
	}

	// render() {
	// 	const { navigation, loading, gdprEn, gdprDa, user } = this.props
	// 	return (
	// 		<GDPR navigation={navigation} loading={loading} gdprEn={gdprEn} gdprDa={gdprDa} user={user} />
	// 	)
	// }
}

const mapStateToProps = state => ({
	gdprEn: state.profile.appSettings.gdpr_en,
	gdprDa: state.profile.appSettings.gdpr_da,
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

export default connect(mapStateToProps, mapDispatchToProps)(GDPRContainer)
