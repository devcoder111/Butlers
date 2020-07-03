import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { colors } from '../../../../styles'

const styles = StyleSheet.create({
	container: {},
	text: {
		color: colors.black,
		fontSize: 40,
		fontFamily: 'Circular Std',
		lineHeight: 50,
		fontWeight: 'bold',
		marginTop: 10,
	},
})

const Title = props => {
	const { children, color, fontSize } = props
	return (
		<View styles={styles.container}>
			<Text style={[styles.text, { color: color || '' }, { fontSize: fontSize || 35 }]}>
				{children}
			</Text>
		</View>
	)
}
export default Title
