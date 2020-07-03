/* eslint-disable no-param-reassign */
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import { actions as servicesActions } from '../../../../redux/services'
import { actions as authActions } from '../../../../redux/auth'
import { actions as profileActions } from '../../../../redux/profile'

import { getBasketArray, getTotalAmount } from '../../../../selectors/basket'
import { getServicesArray } from '../../../../selectors/services'

import MainScreenView from './MainScreenView'

class MainScreenContainer extends PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			activeCategory: 1,
			visibleModal: true,
		}
	}

	componentDidMount = () => {
		const { actions } = this.props
		actions.getTagsRequest()
		actions.getServiceByTypeIdRequest(1)
		actions.getAppSettingsRequest()
		actions.getCustomerGroupRequest()
	}

	getServices = id => {
		const { actions } = this.props
		actions.getServiceByTypeIdRequest(id)
	}

	setActiveCategory = id => {
		this.setState({ activeCategory: id })
	}

	forwardTo = (link, id) => {
		const { navigation } = this.props
		navigation.navigate(link, { id })
	}

	onClose = () => {
		this.setState({ visibleModal: false })
	}

	updateVerifiedEmailModal = () => {
		const { actions } = this.props
		actions.updateCustomerDataRequest({ email_verified_modal_showed: true })
	}

	render() {
		const {
			navigation,
			tags,
			user,
			tagsLoading,
			services,
			isServicesLoading,
			basket,
			total,
			welcomeMessageEn,
			welcomeMessageDa,
			actionMessageEn,
			actionMessageDa,
		} = this.props
		const { activeCategory, visibleModal } = this.state
		return (
			<MainScreenView
				navigation={navigation}
				tags={tags}
				user={user}
				tagsLoading={tagsLoading}
				activeCategory={activeCategory}
				services={services}
				getServices={this.getServices}
				setActiveCategory={this.setActiveCategory}
				isServicesLoading={isServicesLoading}
				forwardTo={this.forwardTo}
				basket={basket}
				total={total}
				visibleModal={visibleModal}
				onClose={this.onClose}
				setEmailVerified={this.setEmailVerified}
				updateVerifiedEmailModal={this.updateVerifiedEmailModal}
				welcomeMessageEn={welcomeMessageEn}
				welcomeMessageDa={welcomeMessageDa}
				actionMessageEn={actionMessageEn}
				actionMessageDa={actionMessageDa}
			/>
		)
	}
}

const mapStateToProps = state => ({
	tags: state.services.tags,
	user: state.auth.user,
	tagsLoading: state.services.tagsLoading,
	services: getServicesArray(state),
	isServicesLoading: state.services.isServicesLoading,
	basket: getBasketArray(state),
	total: getTotalAmount(state),
	welcomeMessageEn: state.profile.appSettings.welcome_message_en,
	welcomeMessageDa: state.profile.appSettings.welcome_message_da,
	appSettings: state.profile.appSettings,
	actionMessageEn: state.profile.appSettings.action_message_en,
	actionMessageDa: state.profile.appSettings.action_message_da,
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			...servicesActions,
			...authActions,
			...profileActions,
		},
		dispatch,
	),
})
export default connect(mapStateToProps, mapDispatchToProps)(MainScreenContainer)
