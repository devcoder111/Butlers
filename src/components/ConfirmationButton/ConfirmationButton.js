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
	},
})

const ConfirmationButton = ({ children, setModalVisible }) => {
	return (
		<TouchableOpacity onPress={setModalVisible}>
			<View
				style={[
					styles.container,
					{ backgroundColor: setModalVisible ? colors.green : colors.gray },
				]}
			>
				<Text style={{ color: colors.white, fontSize: 18 }}>{children}</Text>
			</View>
		</TouchableOpacity>
	)
}

export default ConfirmationButton
