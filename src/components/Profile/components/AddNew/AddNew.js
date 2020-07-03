import React from 'react'

import { View, Text, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import { colors } from '../../../../styles'

import styles from './styles'

const AddNew = ({ navigation, navigateTo, title, icon }) => {
	return (
		<TouchableWithoutFeedback onPress={() => navigation.navigate(navigateTo)}>
			<View style={styles.container}>
				<Icon color={colors.black} name={icon} size={40} />
				<View style={{ marginLeft: 15 }}>
					<Text style={styles.itemText}>{title}</Text>
				</View>
			</View>
		</TouchableWithoutFeedback>
	)
}

export default AddNew
