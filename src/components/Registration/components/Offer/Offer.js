import React from 'react'
import { StyleSheet, View, Text, Switch } from 'react-native'

import { colors } from '../../../../styles'

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 10,
	},
	text: {
		color: '#B5B7BA',
		fontSize: 15,
		lineHeight: 20,
	},
})

const Offer = props => {
	const { children, onChange, value } = props
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.text}>{children}</Text>
			</View>
			<View>
				<Switch onChange={onChange} value={value} />
			</View>
		</View>
	)
}
export default Offer
