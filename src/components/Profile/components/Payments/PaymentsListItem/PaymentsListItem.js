/* eslint-disable camelcase */
import React from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'

import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Card from '../../../../../assets/index'

import styles from './styles'
import { colors } from '../../../../../styles'

const PaymentsListItem = ({ data: { last_4, brand }, getCardById }) => {
	return (
		<View>
			{brand === 'visa' || brand === 'mastercard' ? (
				<TouchableWithoutFeedback onPress={getCardById}>
					<View style={styles.container}>
						<View style={styles.card}>{Card(brand)}</View>
						<View style={styles.numberContainer}>
							{last_4 ? (
								<View>
									<Text style={styles.number}>{last_4}</Text>
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

export default PaymentsListItem
