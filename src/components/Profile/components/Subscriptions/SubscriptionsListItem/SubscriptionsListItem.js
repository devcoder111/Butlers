/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-properties */
/* eslint-disable no-restricted-globals */
/* eslint-disable camelcase */
import React from 'react'
import { View, Text, Switch, TouchableWithoutFeedback } from 'react-native'

import styles from './styles'

const SubscriptionsListItem = ({
	// data: { color, type, price, info, value },
	setModalVisible,
	setModalPlan,
	onChange,
	data: { subscription_name, price, description },
	data,
	customerSubscriptions,
	checkSwitch,
	setDeleteVisible,
	index,
	item,
}) => {
	const roundNum = (x, n) => {
		if (isNaN(x) || isNaN(n)) return false
		const result = (+x).toFixed(n).replace('.', ',')
		const out = result
			.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
			.split(' ')
			.join('.')
		return out
	}

	const checkColor = light => {
		const itemIndex = index + 1
		const colors = {
			green: light ? '#56CE62' : '#32B846',
			blue: light ? '#00C1FF' : '#037BFF',
			purple: light ? '#BE81FE' : '#913CF7',
		}
		if (itemIndex % 3 === 0) {
			return colors.purple
		}
		if (itemIndex % 3 === 2) {
			return colors.blue
		}
		return colors.green
	}

	return (
		<>
			{checkSwitch(data) ? null : (
				<View style={[styles.containerActive, { backgroundColor: checkColor() }]}>
					<TouchableWithoutFeedback
						onPress={() => {
							if (checkSwitch(data)) {
								setDeleteVisible(data.id)
								console.log('delete')
							} else {
								setModalPlan({ subscription_name, price, roundNum })
								setModalVisible(data.id)
							}
						}}
					>
						<View>
							<View style={styles.headerActive}>
								<View style={styles.titleViewActive}>
									<Text style={styles.titleTextActive}>{subscription_name}</Text>
								</View>
								<View style={styles.headerRightActive}>
									<Switch
										style={styles.switchActive}
										value={checkSwitch(data)}
										trackColor={{ true: '#fff', false: checkColor(true) }}
										ios_backgroundColor={checkColor(true)}
										thumbColor={checkColor()}
									/>
								</View>
							</View>
							<View style={styles.infoViewActive}>
								<Text style={styles.priceTextActive}>{roundNum(price, 2)} DKK/month</Text>
								<Text style={styles.infoTextActive}>{description}</Text>
							</View>
						</View>
					</TouchableWithoutFeedback>
				</View>
			)}
		</>
	)
}

export default SubscriptionsListItem
