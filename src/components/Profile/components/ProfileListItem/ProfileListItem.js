import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import { colors } from '../../../../styles'
import Icon from '../../../../assets/index'

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',

		paddingVertical: 20,
		paddingHorizontal: 20,

		borderBottomWidth: 1,
		borderBottomColor: '#D8D8D8',
	},
	image: {
		width: 30,
		justifyContent: 'center',
		flexDirection: 'row',
	},
	nameText: {
		fontSize: 16,
		fontWeight: '300',
		color: colors.black,
	},
})

const ProfileListItem = ({ text, icon, borderTop = '', onPress }) => {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={[styles.container, borderTop]}>
				<View style={styles.nameView}>
					<Text style={styles.nameText}>{text}</Text>
				</View>
				<View style={styles.image}>{Icon(icon)}</View>
			</View>
		</TouchableWithoutFeedback>
	)
}

export default ProfileListItem
