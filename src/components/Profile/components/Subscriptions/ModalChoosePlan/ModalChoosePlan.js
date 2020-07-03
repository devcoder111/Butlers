/* eslint-disable camelcase */
import React from 'react'
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native'

import { colors } from '../../../../../styles'

import Title from '../../../../Registration/components/Title'
import SubscriptionsButton from '../SubscriptionsButton'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',

		backgroundColor: `rgba(0,0,0, 0.5)`,
	},
	modal: {
		width: '90%',
		marginHorizontal: 20,
		height: 300,
		paddingHorizontal: 20,
		textAlign: 'center',
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		position: 'relative',
		backgroundColor: '#fff',
		borderRadius: 8,
	},
	modalInfo: {
		color: colors.black,
		fontSize: 18,
		lineHeight: 24,
		textAlign: 'center',
		fontWeight: '300',
	},
	close: {
		position: 'absolute',
		top: 20,
		right: 20,
	},
	typeText: {
		color: colors.black,
		fontSize: 16,
		lineHeight: 18,
		fontWeight: 'bold',
	},
	textWrap: {
		textAlign: 'center',
		alignItems: 'center',
		alignContent: 'center',
		justifyContent: 'center',
	},
	descriptionWrap: {
		paddingVertical: 20,
	},
})

const ModalChoosePlan = ({
	setModalVisible,
	navigateTo,
	modalPlan: { subscription_name, price },
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
	return (
		<View style={styles.container}>
			<View style={styles.modal}>
				{/* <View /> */}
				<View style={styles.textWrap}>
					<Title color={colors.black}>Choose the plan</Title>
					<View style={styles.descriptionWrap}>
						<Text style={styles.modalInfo}>
							You want to subscribe on the next plan:{' '}
							<Text style={styles.typeText}>{subscription_name}</Text>
						</Text>
						<Text style={styles.modalInfo}>You will pay {roundNum(price, 2)} DKK per month</Text>
					</View>
				</View>
				<SubscriptionsButton linkTo={navigateTo}>Continue</SubscriptionsButton>
				<TouchableWithoutFeedback onPress={setModalVisible}>
					<View style={styles.close}>
						<Text style={{ color: colors.black, fontSize: 15 }}>close</Text>
					</View>
				</TouchableWithoutFeedback>
			</View>
		</View>
	)
}
export default ModalChoosePlan
