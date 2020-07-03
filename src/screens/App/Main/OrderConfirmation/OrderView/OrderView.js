import React, { Component } from 'react'

import { View, Text } from 'react-native'

import Translate from '@app/translations'
import { orderItemPrice } from '../../../../../helpers/basket'

import styles from './styles'

class OrderView extends Component {
	render() {
		const { basket, roundNum, order } = this.props
		return (
			<View style={styles.container}>
				<View>
					<Text style={styles.header}>
						<Translate value="BASKET_orderConfirmation_heading" />
					</Text>
					{order.order_items.map(item => {
						return (
							<View style={styles.row}>
								<Text style={styles.items}>{`${item.service.service_name} ${item.count}x`}</Text>
								<Text style={styles.price}>{`${roundNum(
									orderItemPrice(item.price_without_discount, item.count),
									2,
								)} DKK`}</Text>
							</View>
						)
					})}
					{order.discount_amount ? (
						<View style={styles.row}>
							<Text style={styles.items}>
								<Translate value="BASKET_orderConfirmation_discount" />
							</Text>
							<Text style={styles.price}>-{order.discount_amount} DKK</Text>
						</View>
					) : null}
					{/* <Text>Paid by subs plan: 4x</Text>
					<Text>To pay via card: 2x</Text> */}
				</View>
			</View>
		)
	}
}

export default OrderView
