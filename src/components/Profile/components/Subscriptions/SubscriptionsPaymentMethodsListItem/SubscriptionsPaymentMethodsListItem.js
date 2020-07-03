import React, { Component } from 'react'
import { View, Switch, Text, TouchableWithoutFeedback } from 'react-native'

import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Card from '../../../../../assets/index'

import styles from './styles'
import { colors } from '../../../../../styles'

class SubscriptionsPaymentMethodsListItem extends Component {
	render() {
		const { data, toggleModalVisible, setCardForSubscription } = this.props
		return (
			<View>
				{data.brand ? (
					<TouchableWithoutFeedback
						onPress={() => {
							setCardForSubscription(data.id)
							toggleModalVisible()
						}}
					>
						<View style={styles.container}>
							<View style={styles.card}>{Card(data.brand)}</View>
							<View style={styles.numberContainer}>
								{data.last_4 ? (
									<View>
										<Text style={styles.number}>{data.last_4}</Text>
									</View>
								) : null}
								<Icon color={colors.black} name="arrow-right" size={20} />
							</View>
						</View>
					</TouchableWithoutFeedback>
				) : null}
			</View>
		)
	}
}

export default SubscriptionsPaymentMethodsListItem
