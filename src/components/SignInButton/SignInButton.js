import React from 'react'
import {Dimensions } from "react-native";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { colors } from '../../styles'

const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
	container: {
		width: screenWidth * 0.8,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 10,
		backgroundColor: '#2ED573',
		borderWidth: 1,
		borderColor: '#2ED573',
		borderRadius: 25,
		marginVertical: 30,
	},
})

const SignInButton = ({ children, onPress }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.container}>
				<Text style={{ color: colors.white, fontSize: 18 }}>{children}</Text>
			</View>
		</TouchableOpacity>
	)
}

export default SignInButton
