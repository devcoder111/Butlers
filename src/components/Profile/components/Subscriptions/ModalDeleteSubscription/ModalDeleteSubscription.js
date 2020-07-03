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
		height: 400,
		paddingVertical: 20,
		paddingHorizontal: 60,

		alignItems: 'center',
		justifyContent: 'space-around',
		textAlign: 'center',

		backgroundColor: colors.white,
		borderRadius: 10,
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
	header: {
		color: colors.black,
		fontSize: 30,
		lineHeight: 40,
		fontWeight: 'bold',
		textAlign: 'center',
	},
})

const ModalDeleteSubscription = ({
	setModalVisible,
	navigateTo,
	modalPlan: { subscription_name },
}) => {
	return (
		<View style={styles.container}>
			<View style={styles.modal}>
				<View />
				<View style={styles.textWrap}>
					<Text style={styles.header}>Delete subscription</Text>
					<View style={styles.descriptionWrap}>
						<Text style={styles.modalInfo}>
							Do you want to delete the next plan:{' '}
							<Text style={styles.typeText}>{subscription_name}</Text>
						</Text>
					</View>
				</View>
				<SubscriptionsButton linkTo={navigateTo}>Delete</SubscriptionsButton>
				<TouchableWithoutFeedback onPress={setModalVisible}>
					<View style={styles.close}>
						<Text style={{ color: colors.black, fontSize: 15 }}>close</Text>
					</View>
				</TouchableWithoutFeedback>
			</View>
		</View>
	)
}
export default ModalDeleteSubscription
