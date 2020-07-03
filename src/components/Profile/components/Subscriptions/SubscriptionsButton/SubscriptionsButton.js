import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'

import { colors } from '../../../../../styles'

const styles = StyleSheet.create({
	buttonView: {
		backgroundColor: colors.green,
		borderRadius: 5,
		paddingHorizontal: 90,
		paddingVertical: 15,
	},
	buttonText: {
		color: colors.white,
		fontSize: 16,
		lineHeight: 18,
	},
})

const SubscriptionsButton = ({ children, linkTo }) => {
	return (
		<TouchableWithoutFeedback onPress={linkTo}>
			<View style={styles.buttonView}>
				<Text style={styles.buttonText}>{children}</Text>
			</View>
		</TouchableWithoutFeedback>
	)
}
export default SubscriptionsButton
