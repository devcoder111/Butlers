import React from 'react'

import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'

import Translate from '@app/translations'
import { colors } from '../../../../../styles'

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
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	close: {
		position: 'absolute',
		top: 20,
		right: 20,
	},
	deleteBtn: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 10,
		backgroundColor: colors.green,
		marginTop: 20,
	},
})

const DeleteLocationModal = ({ setModalVisible, deleteLocation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.modal}>
				<View>
					<Text style={styles.modalInfo}>
						<Translate value="PROFILE_deleteLocationModalText" />
					</Text>
					<TouchableOpacity
						onPress={() => {
							deleteLocation()
							setModalVisible(0)
						}}
					>
						<View style={styles.deleteBtn}>
							<Text style={{ color: colors.white, fontSize: 18 }}>
								<Translate value="PROFILE_deleteLocationButton" />
							</Text>
						</View>
					</TouchableOpacity>
				</View>
				<TouchableWithoutFeedback
					onPress={() => {
						setModalVisible(0)
					}}
				>
					<View style={styles.close}>
						<Text style={{ color: colors.black, fontSize: 15 }}>
							<Translate value="PROFILE_closeDeleteLocationModalButton" />
						</Text>
					</View>
				</TouchableWithoutFeedback>
			</View>
		</View>
	)
}

export default DeleteLocationModal
