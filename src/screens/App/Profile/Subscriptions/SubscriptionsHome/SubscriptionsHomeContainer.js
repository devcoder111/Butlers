import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import SubscriptionsHomeView from './SubscriptionsHomeView'

import { colors } from '../../../../../styles'

import { actions as subscriptionsActions } from '../../../../../redux/subscriptions'
import { actions as profileActions } from '../../../../../redux/profile'

class SubscriptionsHomeContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			modalVisible: false,
			deleteVisible: false,
			currentSubscriptionId: '',
		}
	}

	getAllSubscriptions = () => {
		const { actions } = this.props
		actions.getSubscriptionRequest()
		actions.getCustomerSubscriptionRequest()
	}

	setModalVisible = openedSub => {
		const { modalVisible } = this.state
		this.setState({ currentSubscriptionId: openedSub, modalVisible: !modalVisible })
	}

	setDeleteVisible = openedSub => {
		const { deleteVisible } = this.state
		this.setState({ currentSubscriptionId: openedSub, deleteVisible: !deleteVisible })
	}

	navigateTo = () => {
		const { navigation } = this.props
		const { currentSubscriptionId } = this.state
		this.setState({ modalVisible: false }, () =>
			navigation.navigate('SubscriptionsPaymentMethods', { currentSubscriptionId }),
		)
	}

	onDelete = () => {
		const { deleteVisible, currentSubscriptionId } = this.state
		const { actions } = this.props
		actions.deleteSubscriptionRequest({ subscription_id: currentSubscriptionId })
		this.setState({ deleteVisible: !deleteVisible })
	}

	setModalPlan = data => {
		const { actions } = this.props
		actions.setModalPlanRequest(data)
	}

	componentDidMount = () => {
		const { actions, subscriptions, customerSubscriptions } = this.props
		actions.getSubscriptionRequest()
		actions.getCardsRequest()
		// const payload = { subscription_id: 1, card_id: 1 }
		// actions.addSubscriptionRequest(payload)
		// const config = { subscription_id: 1 }
		// actions.deleteSubscriptionRequest(config)
		actions.getCustomerSubscriptionRequest()
		// console.log(subscriptions)
		// console.log(customerSubscriptions)
	}

	checkSwitch = data => {
		const { customerSubscriptions } = this.props
		let status = false
		customerSubscriptions.map(elem => {
			if (elem.subscription_id === data.id) {
				status = true
			}
		})
		return status
	}

	render() {
		const {
			navigation,
			modalPlan,
			subscriptions,
			customerSubscriptions,
			isSubscriptionLoading,
		} = this.props

		const { modalVisible, deleteVisible } = this.state
		return (
			<SubscriptionsHomeView
				setModalPlan={this.setModalPlan}
				navigateTo={this.navigateTo}
				modalPlan={modalPlan}
				navigation={navigation}
				modalVisible={modalVisible}
				setModalVisible={this.setModalVisible}
				subscriptions={subscriptions}
				customerSubscriptions={customerSubscriptions}
				checkSwitch={this.checkSwitch}
				getAllSubscriptions={this.getAllSubscriptions}
				setDeleteVisible={this.setDeleteVisible}
				deleteVisible={deleteVisible}
				onDelete={this.onDelete}
			/>
		)
	}
}

const mapStateToProps = ({
	profile: { card },
	subscriptions: { modalPlan, subscriptions, customerSubscriptions, isSubscriptionLoading },
}) => ({
	card,
	modalPlan,
	subscriptions,
	customerSubscriptions,
	isSubscriptionLoading,
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			...subscriptionsActions,
			...profileActions,
		},
		dispatch,
	),
})

export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionsHomeContainer)
