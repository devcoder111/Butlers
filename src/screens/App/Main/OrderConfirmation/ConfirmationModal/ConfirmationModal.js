import React from 'react'

import { View, Text, StyleSheet } from 'react-native'
import Translate from '@app/translations'

import { colors } from '../../../../../styles'

import { ForwardButton } from '../../../../../components/Registration/components'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		marginTop: 40,

		backgroundColor: `rgba(0,0,0, 0.5)`,
	},
	modal: {
		width: '90%',
		height: 300,
		padding: 40,

		alignItems: 'center',
		justifyContent: 'space-around',
		textAlign: 'center',

		backgroundColor: colors.white,
		borderRadius: 10,
	},
	modalInfo: {
		color: colors.black,
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
	},
})

const ConfirmationModal = ({ forwardTo, value }) => {
	return (
		<View style={styles.container}>
			<View style={styles.modal}>
				<View>
					<Text style={styles.modalInfo}><Translate value="BASKET_orderConfirmation_heading" /></Text>
					<Text style={styles.modalInfo}> <Translate value="BASKET_orderConfirmation_successModal" /></Text>
				</View>
				<View style={styles.forwardView}>
					<ForwardButton
						colorText={colors.white}
						backgroundColorText={colors.green}
						value={value}
						forwardTo={forwardTo}
					/>
				</View>
			</View>
		</View>
	)
}

export default ConfirmationModal
