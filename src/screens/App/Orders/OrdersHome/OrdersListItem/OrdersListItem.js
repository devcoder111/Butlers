import React from 'react'
import { View, Text } from 'react-native'
import Translate from '@app/translations'

import Touchable from '../../../../../components/Touchable/Touchable'
import { colors } from '../../../../../styles'
import styles from './styles'

const OrdersListItem = ({
	item,
	navigation,
	types,
	location,
	addOrderId,
	user,
	onNotifyStore,
	customerGroup,
}) => {
	const checkColor = () => {
		switch (item.status) {
			case 'ready':
				return colors.green

			case 'waitingPickUp':
				return colors.green

			case 'done':
				return colors.green

			case 'inCleaning':
				return '#fc7d34'

			case 'inTailoring':
				return '#fc7d34'

			case 'checking':
				return '#fc7d34'

			case 'inDelivery':
				return '#1E272E'

			case 'creating':
				return '#1E272E'

			default:
				return colors.gray
		}
	}

	const deliveryDate = item.delivery_time ? item.delivery_time.split(' ')[0] : ''
	const pickupDate = item.pick_up_time ? item.pick_up_time.split(' ')[0] : ''

	const navigate = () => {
		navigation.navigate('Order', {
			item,
			types,
			color: checkColor(),
			location,
			addOrderId,
			user,
			onNotifyStore,
			deliveryDate,
			pickupDate,
		})
	}
	const initialValue = 0
	return (
		<View>
			{item.id ? (
				<Touchable buttonStyle={styles.itemContainer} onPress={navigate}>
					<View style={styles.leftWrap}>
						<Text style={styles.boldText}>
							<Translate value="MY_ORDERS_orderDetails_orderNumber" />: {item.id}
						</Text>
						<Text style={styles.text}>
							<Translate value="MY_ORDERS_orderDetails_deliveryTime" />:{' '}
							{item.delivery_time_range
								? `from ${item.delivery_time_range.hour_from} to ${item.delivery_time_range.hour_to}`
								: ''}
						</Text>
						<Text style={styles.text}>
							<Translate value="MY_ORDERS_orderDetails_itemName" />:{' '}
							{item.order_items.reduce((accumulator, currentValue) => {
								return accumulator + currentValue.count
							}, initialValue)}
						</Text>
					</View>
					<View style={styles.rightWrap}>
						<Text style={[styles.status, { color: checkColor() }]}>{item.status}</Text>
						{/* {messages ? (
						<View style={styles.messages}>
							<Text style={styles.messagesNumber}>{messages}</Text>
						</View>
					) : null} */}
					</View>
				</Touchable>
			) : (
				<Text style={[{ padding: 50 }]} />
			)}
		</View>
	)
}

export default OrdersListItem
