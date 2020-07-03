import React from 'react'
import { View, SafeAreaView, Text, ScrollView } from 'react-native'

import Icon from 'react-native-vector-icons/EvilIcons'
import Translate from '@app/translations'
import NavigationHeader from '../../../../components/Profile/components/NavigationHeader/NavigationHeader'
import { colors } from '../../../../styles'
import Touchable from '../../../../components/Touchable/Touchable'
import styles from './styles'
import { convertDate } from '../../../../helpers/time'

const Order = ({ navigation }) => {
	const item = navigation.getParam('item')
	const types = navigation.getParam('types')
	const location = navigation.getParam('location')
	const addOrderId = navigation.getParam('addOrderId')
	const user = navigation.getParam('user')
	const onNotifyStore = navigation.getParam('onNotifyStore')
	const deliveryDate = navigation.getParam('deliveryDate')
	const pickupDate = navigation.getParam('pickupDate')

	const getType = id => {
		const currentType = types.find(elem => elem.id === id)
		return currentType.name
	}
	const getLocation = id => {
		const shopLocation = location.find(elem => elem.id === id)
		if (shopLocation) {
			return shopLocation.address
		}
		return user.company.location.address
		// return location.find(elem => elem.id === id).address
	}

	const roundNum = (x, n) => {
		if (isNaN(x) || isNaN(n)) return false
		const result = (+x).toFixed(n).replace('.', ',')
		const out = result
			.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
			.split(' ')
			.join('.')
		return out
	}

	const itemsArray = item.order_items.map(elem => (
		<Text style={styles.boldText}>
			<Translate value="MY_ORDERS_orderDetails_itemName" />: {elem.count}x{' '}
			{elem.service.service_name}
		</Text>
	))
	return (
		<SafeAreaView>
			<ScrollView style={styles.container}>
				<NavigationHeader color={colors.black} onAction={() => {}} navigation={navigation} />
				<Text style={styles.boldText}>
					<Translate value="MY_ORDERS_orderDetails_orderNumber" />: {item.id}
				</Text>
				<Text style={styles.boldText}>
					<Translate value="MY_ORDERS_orderDetails_deliveryTime" />:{' '}
					{item.delivery_time
						? `from ${item.delivery_time_range.hour_from} to ${item.delivery_time_range.hour_to}`
						: ''}
				</Text>
				{itemsArray}
				<Text style={[styles.status, { color: navigation.getParam('color') }]}>{item.status}</Text>
				<Text style={styles.section}>
					<Translate value="BASKET_orderConfirmation_dropAddress" />:
				</Text>
				<Text style={styles.text}>
					{item.delivery_location_id
						? getLocation(item.delivery_location_id)
						: item.delivery_customer_location.address}
				</Text>
				<Text style={styles.section}>
					<Translate value="BASKET_orderConfirmation_pickAddress" />:
				</Text>
				<Text style={styles.text}>
					{item.pickup_location_id
						? getLocation(item.pickup_location_id)
						: item.pickup_customer_location.address}
				</Text>
				<Text style={styles.section}>
					<Translate value="BASKET_orderCompletion_dropOffLabel" />:
				</Text>
				<Text style={styles.text}>
					{item.delivery_time_range
						? `${deliveryDate} from ${item.delivery_time_range.hour_from} to ${item.delivery_time_range.hour_to}`
						: ''}
				</Text>
				<Text style={styles.section}>
					<Translate value="BASKET_orderCompletion_pickUpLabel" />:
				</Text>
				<Text style={styles.text}>
					{item.pickup_time_range
						? `${pickupDate} from ${item.pickup_time_range.hour_from} to ${item.pickup_time_range.hour_to}`
						: ''}
				</Text>
				<Text style={styles.section}>
					<Translate value="MY_ORDERS_orderDetails_amountBefore" />:
				</Text>
				<Text style={styles.text}>{roundNum(+item.discount_amount + +item.price, 2)} DKK</Text>
				<Text style={styles.section}>
					<Translate value="BASKET_orderConfirmation_discount" />:
				</Text>
				<Text style={styles.text}>-{roundNum(item.discount_amount, 2)} DKK</Text>
				<Text style={styles.section}>
					<Translate value="MY_ORDERS_orderDetails_amount" />:
				</Text>
				<Text style={styles.text}>{roundNum(item.price, 2)} DKK</Text>
				<Text style={styles.section}>
					<Translate value="MY_ORDERS_orderDetails_deliveryFee" />:
				</Text>
				<Text style={styles.text}>{roundNum(item.delivery_fee, 2)} DKK</Text>
				<View style={styles.totalAmountContainer}>
					<View style={styles.amountLeft}>
						<Text style={styles.totalText}>
							<Translate value="BASKET_totalAmount" />
						</Text>
						<Text style={styles.amountText}>{roundNum(item.price_with_delivery, 2)} DKK</Text>
					</View>
					{navigation.getParam('messages') ? (
						<Touchable
							onPress={() => {
								addOrderId(item.id)
								navigation.navigate('CurrentChat', { order_id: item.id })
							}}
						>
							<View style={styles.amountRight}>
								<Icon name="comment" size={50} color={colors.green} />
								<View style={styles.messagesCount}>
									<Text style={styles.messages}>{navigation.getParam('messages')}</Text>
								</View>
							</View>
						</Touchable>
					) : (
						<Touchable
							onPress={() => {
								addOrderId(item.id)
								navigation.navigate('CurrentChat', { order_id: item.id })
							}}
						>
							<View style={styles.amountRight}>
								<Icon name="comment" size={50} color={colors.green} />
							</View>
						</Touchable>
					)}
				</View>
				{item.delivery_location && item.delivery_location.type !== 'officeLocation' ? (
					<Touchable
						buttonStyle={styles.button}
						onPress={() => {
							onNotifyStore(item.id)
						}}
					>
						<Text style={styles.buttonText}>
							<Translate value="MY_ORDERS_orderDetails_button" />
						</Text>
					</Touchable>
				) : null}
			</ScrollView>
		</SafeAreaView>
	)
}

export default Order
