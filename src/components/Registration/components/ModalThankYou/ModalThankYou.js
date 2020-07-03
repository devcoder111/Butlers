import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { colors } from '../../../../styles'

import Title from '../Title'
import NavigationLink from '../NavigationLink'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		marginTop: 40,

		backgroundColor: `rgba(0,0,0, 0.5)`,
	},
	modal: {
		width: '90%',
		height: 300,
		padding: 40,

		alignItems: 'center',
		justifyContent: 'space-around',
		textAlign: 'center',

		backgroundColor: colors.white,
		borderRadius: 10,
	},
	modalInfo: {
		color: colors.black,
		fontSize: 15,
		lineHeight: 20,
		textAlign: 'center',
	},
})

const ModalThankYou = props => {
	const { setModalVisible, navigateTo } = props
	return (
		<View style={styles.container}>
			<View style={styles.modal}>
				<Title color={colors.black}>Thank you!</Title>
				<View>
					<Text style={styles.modalInfo}>
						We will notify you when we start operating in your area.
					</Text>
				</View>
				<View styles={styles.modalLinks}>
					<NavigationLink linkTo={() => navigateTo('SignUp')} align="center" color={colors.green}>
						Browse the app
					</NavigationLink>
					<View>
						<Text style={{ textAlign: 'center' }}>or</Text>
					</View>
					<NavigationLink linkTo={setModalVisible} align="center">
						Discover the nearest shops
					</NavigationLink>
				</View>
			</View>
		</View>
	)
}
export default ModalThankYou
