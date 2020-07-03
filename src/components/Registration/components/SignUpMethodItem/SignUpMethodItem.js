import React from 'react'
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native'

import Icon from '../../../../assets/index'
import { colors } from '../../../../styles'

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 20,
		backgroundColor: colors.green,
	},
	text: {
		color: '#1E272E',
		fontSize: 16,
		lineHeight: 20,
	},
	itemView: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	iconView: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.white,
		height: 70,
		width: 70,
		borderRadius: 35,
	},
	itemTextView: {
		marginTop: 15,
	},
	itemTextColor: {
		color: '#1E272E',
		fontSize: 16,
	},
})

const SignUpMethodItem = props => {
	const { children, onPress, name } = props
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.itemView}>
				<View style={styles.iconView}>{Icon(name)}</View>
				<View style={styles.itemTextView}>
					<Text style={styles.itemTextColor}>{children}</Text>
				</View>
			</View>
		</TouchableWithoutFeedback>
	)
}
export default SignUpMethodItem
