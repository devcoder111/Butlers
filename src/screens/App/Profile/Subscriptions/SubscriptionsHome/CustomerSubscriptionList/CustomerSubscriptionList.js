/* eslint-disable no-restricted-properties */
/* eslint-disable no-restricted-globals */
/* eslint-disable camelcase */
import React from 'react'
import { View, Text, Switch, TouchableWithoutFeedback } from 'react-native'

import styles from './styles'

const CustomerSubscriptionList = ({ setDeleteVisible, index, item, subscriptions }) => {
	const roundNum = (x, n) => {
		if (isNaN(x) || isNaN(n)) return false
		const result = (+x).toFixed(n).replace('.', ',')
		const out = result
			.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
			.split(' ')
			.join('.')
		return out
	}

	const checkColor = () => {
		const colors = {
			green: '#32B846',
			blue: '#037BFF',
			purple: '#913CF7',
		}
		const subscriptionIndex =
			subscriptions.findIndex(elem => {
				return elem.id === item.subscription_id
			}) + 1
		if (subscriptionIndex % 3 === 0) {
			return colors.purple
		}
		if (subscriptionIndex % 2 === 0) {
			return colors.blue
		}
		return colors.green
	}

	return (
		<View style={[styles.containerActive, { backgroundColor: checkColor() }]}>
			<TouchableWithoutFeedback
				onPress={() => {
					setDeleteVisible(item.subscription.id)
				}}
			>
				<View>
					<View style={styles.headerActive}>
						<View style={styles.titleViewActive}>
							<Text style={styles.titleTextActive}>{item.subscription.subscription_name}</Text>
						</View>
						<View style={styles.headerRightActive}>
							<Switch
								value
								trackColor={{ true: '#fff', false: checkColor() }}
								ios_backgroundColor={checkColor()}
								thumbColor={checkColor()}
							/>
						</View>
					</View>
					<View style={styles.infoViewActive}>
						{item.is_canceled ? (
							<Text style={styles.infoTextActive}>
								Subscription is cancelled. Expires at {item.expired_at.slice(0, 10)}
							</Text>
						) : null}
						<Text style={styles.priceTextActive}>
							{roundNum(item.subscription.price, 2)} DKK/month
						</Text>
						<Text style={styles.infoTextActive}>{item.subscription.description}</Text>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</View>
	)
}

export default CustomerSubscriptionList
