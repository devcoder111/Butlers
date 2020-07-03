/* eslint-disable no-nested-ternary */
import React from 'react'
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native'

import Translate from '@app/translations'

import { colors } from '../../../../styles'

const styles = StyleSheet.create({
	container: {
		paddingVertical: 20,
	},
	image: {
		width: 80,
		height: 80,
		borderRadius: 40,
		backgroundColor: '#d6d6d6',
	},
	nameText: {
		fontWeight: '700',
		fontSize: 18,
		lineHeight: 20,

		marginTop: 10,
	},
	emailText: {
		fontWeight: '300',
		fontSize: 16,
		lineHeight: 20,

		marginTop: 10,
	},
	savingText: {
		color: colors.green,
		marginTop: 10,
	},
})

const ProfileInfo = ({ name, email, addPhoto, user, imageSource, avatarLoading }) => {
	return (
		<View style={styles.container}>
			<View style={styles.image}>
				<TouchableWithoutFeedback onPress={addPhoto}>
					<Image
						style={{ width: 80, height: 80, borderRadius: 40 }}
						source={
							imageSource.uri
								? { uri: imageSource.uri }
								: user.file_link
								? { uri: user.file_link }
								: null
						}
					/>
				</TouchableWithoutFeedback>
			</View>
			{avatarLoading ? (
				<View>
					<Text style={styles.savingText}><Translate value="PROFILE_personalInfo_savingAvatarLabel" /></Text>
				</View>
			) : null}
			<View style={styles.nameView}>
				<Text style={styles.nameText}>{name}</Text>
			</View>
			<View style={styles.emailView}>
				<Text style={styles.emailText}>{email}</Text>
			</View>
		</View>
	)
}

export default ProfileInfo
