import React from 'react'
import { StyleSheet, StatusBar, View } from 'react-native'

import { colors } from '../../styles'

const STATUSBAR_HEIGHT = 0

const styles = StyleSheet.create({
	statusBar: {
		height: STATUSBAR_HEIGHT,
	},
})

const CustomStatusBar = ({ color = colors.green, barStyle = 'dark-content' }) => {
	return (
		<View style={styles.statusBar}>
			<StatusBar backgroundColor={color} barStyle={barStyle} />
		</View>
	)
}

export default CustomStatusBar
