import React from 'react'

import SubscriptionsListItem from '../SubscriptionsListItem'

const SubscriptionsList = ({
	setModalPlan,
	navigation,
	setModalVisible,
	subscriptions,
	customerSubscriptions,
	checkSwitch,
	setDeleteVisible,
}) => {
	return subscriptions.map((item, index) => (
		<SubscriptionsListItem
			setModalPlan={setModalPlan}
			setModalVisible={setModalVisible}
			data={item}
			navigation={navigation}
			subscriptions={subscriptions}
			customerSubscriptions={customerSubscriptions}
			checkSwitch={checkSwitch}
			setDeleteVisible={setDeleteVisible}
			index={index}
		/>
	))
}

export default SubscriptionsList
