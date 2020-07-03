import React from 'react'

import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'

import { colors } from '../../../../../styles'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		marginTop: 40,

		backgroundColor: `rgba(0,0,0, 0.2)`,
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
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 10,
	},
	close: {
		position: 'absolute',
		top: 20,
		right: 20,
	},
})

const MessageModal = ({ setModalVisible, deleteMessage, editMessage }) => {
	return (
		<View style={styles.container}>
			<View style={styles.modal}>
				<View>
					<TouchableOpacity
						onPress={() => {
							editMessage()
							setModalVisible(0)
						}}
					>
						<Text style={styles.modalInfo}>Edit Message</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							deleteMessage()
							setModalVisible(0)
						}}
					>
						<Text style={styles.modalInfo}>Delete Message</Text>
					</TouchableOpacity>
				</View>
				<TouchableWithoutFeedback
					onPress={() => {
						setModalVisible(0)
					}}
				>
					<View style={styles.close}>
						<Text style={{ color: colors.black, fontSize: 15 }}>close</Text>
					</View>
				</TouchableWithoutFeedback>
			</View>
		</View>
	)
}

export default MessageModal
