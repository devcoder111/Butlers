/* eslint-disable no-nested-ternary */
import React from 'react'
import { StyleSheet, View } from 'react-native'
import Icon from '../../../assets'

import { colors } from '../../../styles'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#2ED573',
		alignItems: 'center',
		justifyContent: 'center',
	},
})

const LoadingView = ({ navigation, authenticated, loading }) => {
	return (
		<View style={styles.container}>
			{loading
				? Icon('Loader')
				: authenticated
				? navigation.navigate('App')
				: navigation.navigate('Auth')}
		</View>
	)
}

export default LoadingView
