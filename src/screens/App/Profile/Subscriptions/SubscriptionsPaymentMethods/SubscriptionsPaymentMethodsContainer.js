import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import SubscriptionsPaymentMethodsView from './SubscriptionsPaymentMethodsView'

import { colors } from '../../../../../styles'

import { actions as subscriptionsActions } from '../../../../../redux/subscriptions'

const methods = [
	{
		type: 'Light',
		price: '50',
		color: colors.green,
		info:
			'Includes 15 shirts + 2 suits to clean every month. If youu run out of the limit you can make additional payments.',
	},
	{
		type: 'Medium',
		price: '50',
		color: colors.blue,
		info:
			'Includes 15 shirts + 2 suits to clean every month. If youu run out of the limit you can make additional payments.',
	},
	{
		type: 'Premium',
		price: '50',
		color: colors.purple,
		info:
			'Includes 15 shirts + 2 suits to clean every month. If youu run out of the limit you can make additional payments.',
	},
]

class SubscriptionsPaymentMethodsContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			modalVisible: false,
		}
	}

	navigateTo = link => {
		const { navigation } = this.props
		navigation.navigate(link)
	}

	setModalPlan = data => {
		const { actions } = this.props
		actions.setModalPlanRequest(data)
	}

	forwardTo = (path, type) => {
		const { navigation, actions } = this.props
		// actions.addRegistrationTypeRequest(type)
		this.toggleModalVisible()
		navigation.navigate(path)
	}

	toggleModalVisible = () => {
		const { modalVisible } = this.state
		this.setState({ modalVisible: !modalVisible })
	}

	setCardForSubscription = data => {
		const { navigation, actions } = this.props
		const subId = navigation.getParam('currentSubscriptionId')
		const payload = {
			subscription_id: subId,
			card_id: data,
		}
		actions.addSubscriptionRequest(payload)
	}

	render() {
		const { navigation, modalPlan, cards } = this.props
		const { modalVisible } = this.state
		return (
			<SubscriptionsPaymentMethodsView
				setModalPlan={this.setModalPlan}
				modalPlan={modalPlan}
				navigation={navigation}
				data={cards}
				forwardTo={this.forwardTo}
				modalVisible={modalVisible}
				toggleModalVisible={this.toggleModalVisible}
				setCardForSubscription={this.setCardForSubscription}
			/>
		)
	}
}

const mapStateToProps = state => ({
	cards: state.profile.cards,
	modalPlan: state.subscriptions.modalPlan,
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			...subscriptionsActions,
		},
		dispatch,
	),
})

export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionsPaymentMethodsContainer)
