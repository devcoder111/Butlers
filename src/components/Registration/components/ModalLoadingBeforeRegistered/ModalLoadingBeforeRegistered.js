import React from 'react'
import { ActivityIndicator, StyleSheet, View, Image } from 'react-native'

import { colors } from '../../../../styles'

import SpinLoading from '../../../SpinLoading'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		marginTop: 40,

		backgroundColor: 'rgba(0,0,0,0.4)',
	},
	modal: {
		width: 150,
		height: 150,

		alignItems: 'center',
		justifyContent: 'center',

		// backgroundColor: colors.green,
		borderRadius: 20,

		opacity: 1,
		zIndex: 800,
	},
})

const ModalLoadingBeforeRegistered = () => {
	return (
		
		<View style={styles.container}>
			<View style={styles.modal}>
				{/* <Image source={require('../../../../assets/SmallLoading.png')} />
				<SpinLoading color="#fff" /> */}
				<ActivityIndicator size="large" color="#2ED573" />
			</View>
		</View>
	)
}
export default ModalLoadingBeforeRegistered
