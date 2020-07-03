import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'

import { colors } from '../../../../styles'

const styles = StyleSheet.create({
	container: {},
	text: {
		color: colors.white,
		fontSize: 15,
		lineHeight: 20,
		textDecorationLine: 'underline',
	},
})

const NavigationLink = ({ children, linkTo, color, align = 'left' }) => {
	return (
		<TouchableWithoutFeedback onPress={linkTo}>
			<Text style={[styles.text, { textAlign: align || '', color: color || '' }]}>{children}</Text>
		</TouchableWithoutFeedback>
	)
}
export default NavigationLink
