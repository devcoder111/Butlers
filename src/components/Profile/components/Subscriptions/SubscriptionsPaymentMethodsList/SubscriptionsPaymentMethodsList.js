import React from 'react'
import { View } from 'react-native'

import styles from './styles'

import SubscriptionsPaymentMethodsListItem from '../SubscriptionsPaymentMethodsListItem'

const SubscriptionsPaymentMethodsList = ({
	navigation,
	data,
	toggleModalVisible,
	setCardForSubscription,
}) => {
	return (
		<View style={styles.container}>
			{data.map(item => (
				<SubscriptionsPaymentMethodsListItem
					data={item}
					navigation={navigation}
					toggleModalVisible={toggleModalVisible}
					setCardForSubscription={setCardForSubscription}
				/>
			))}
		</View>
	)
}

export default SubscriptionsPaymentMethodsList
