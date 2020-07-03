import React from 'react'

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { colors } from '../../styles'

const styles = StyleSheet.create({
	container: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 10,
		backgroundColor: colors.white,
		borderWidth: 1,
		borderColor: colors.green,
	},
})

const SignUpButton = ({ children, onPress }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.container}>
				<Text style={{ color: colors.green, fontSize: 18 }}>{children}</Text>
			</View>
		</TouchableOpacity>
	)
}

export default SignUpButton
