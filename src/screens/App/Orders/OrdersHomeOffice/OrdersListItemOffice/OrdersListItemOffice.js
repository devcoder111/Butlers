import React from 'react'
import { View, Text } from 'react-native'

import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Touchable from '../../../../../components/Touchable/Touchable'
import { colors } from '../../../../../styles'
import styles from './styles'

const OrdersListItemOffice = ({ item, navigation, types, location }) => {
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

	const navigate = () => {
		navigation.navigate('Order', {
			item,
			types,
			color: checkColor(),
			location,
		})
	}
	const initialValue = 0
	return (
		<View>
			<Touchable buttonStyle={styles.itemContainer} onPress={navigate}>
				<View style={styles.leftWrap}>
					<Text style={styles.boldText}>Order: {item.id}</Text>
					<Text style={styles.text}>Delivery time: {item.delivery_time.slice(-8)}</Text>
					<Text style={styles.text}>
						Items:{' '}
						{item.order_items.reduce((accumulator, currentValue) => {
							return accumulator + currentValue.count
						}, initialValue)}
					</Text>
					<View style={styles.spaceBetweenItems}>
						<View style={[styles.status, { backgroundColor: checkColor() }]}>
							<Text style={styles.centeredText}>{item.status}</Text>
						</View>
						<View style={{ flexDirection: 'row' }}>
							{/* <View style={[styles.itemsNumber, { backgroundColor: checkColor() }]}>
                  				<Text>1</Text>
                			</View> */}
							<Icon
								color={colors.black}
								name="arrow-right"
								size={20}
								style={{ textAlignVertical: 'center' }}
							/>
						</View>
					</View>
				</View>
			</Touchable>
		</View>
	)
}

export default OrdersListItemOffice
