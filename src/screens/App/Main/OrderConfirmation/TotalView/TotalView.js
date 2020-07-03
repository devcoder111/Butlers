import React, { Component } from 'react'

import { View, Text } from 'react-native'
import Translate from "@app/translations";

import styles from './styles'

class TotalView extends Component {
	render() {
		const { doneOrder, roundNum } = this.props
		return (
			<View style={styles.container}>
				<View style={styles.row}>
					<View style={styles.column}>
						<Text style={styles.label}>
						<Translate value="BASKET_orderConfirmation_subtotal" />: {roundNum(doneOrder.price_with_delivery - doneOrder.delivery_fee, 2)} DKK
						</Text>
						<Text style={styles.label}>
						<Translate value="BASKET_orderConfirmation_deliveryFee" />: {roundNum(doneOrder.delivery_fee, 2)} DKK
						</Text>
						<Text style={styles.label}><Translate value="BASKET_orderConfirmation_VAT" />: {roundNum(doneOrder.vat, 2)} DKK</Text>
					</View>
					<View style={styles.column}>
						<Text style={styles.total}>Total: </Text>
						<Text style={styles.price}>{roundNum(doneOrder.price_with_delivery, 2)} DKK</Text>
					</View>
				</View>
			</View>
		)
	}
}

export default TotalView
