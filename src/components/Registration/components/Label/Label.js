import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const styles = StyleSheet.create({
	container: {},
	text: {
		fontSize: 16,
		lineHeight: 20,
	},
})

const Label = ({ color = '#1E272E', children }) => {
	return (
		<View styles={styles.container}>
			<Text style={[styles.text, { color }]}>{children}</Text>
		</View>
	)
}
export default Label
