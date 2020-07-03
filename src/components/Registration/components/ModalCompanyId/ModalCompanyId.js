import React from 'react'
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import { colors } from '../../../../styles'

import Title from '../Title'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 40,

		backgroundColor: colors.white,
		opacity: 1,
	},
	modal: {
		position: 'relative',
		width: '100%',
		height: '100%',
		padding: 20,

		backgroundColor: colors.white,
		borderRadius: 10,
	},
	modalInfo: {
		color: colors.black,
		fontSize: 15,
		lineHeight: 20,
	},
	close: {
		position: 'absolute',
		color: colors.black,
		top: 20,
		left: 20,
	},
	modalInfoView: {
		marginTop: 30,
	},
	modalTitleView: {
		marginTop: 50,
	},
})

const ModalCompanyId = props => {
	const { setModalVisible } = props
	return (
		<View style={styles.container}>
			<View style={styles.modal}>
				<View style={styles.modalTitleView}>
					<Title color={colors.black}>How to find your company ID?</Title>
				</View>
				<View style={styles.modalInfoView}>
					<Text style={styles.modalInfo}>
						If you work for a company that has an agreement with Butlers, please, enter the ID of
						your company. If your are a private user, just skip this screen. If you work for a
						company that has an agreement with Butlers, please, enter the ID of your company. If
						your are a private user, just skip this screen. If you work for a company that has an
						agreement with Butlers, please, enter the ID of your company. If your are a private
						user, just skip this screen.
					</Text>
				</View>
				<TouchableWithoutFeedback onPress={setModalVisible}>
					<Icon style={styles.close} name="times" size={30} />
				</TouchableWithoutFeedback>
			</View>
		</View>
	)
}
export default ModalCompanyId
