import React from 'react'
import { View, Text } from 'react-native'
import CustomSwitch from '../../../../../../components/CustomSwitch/CustomSwitch'

import styles from './styles'

const NotificationListItem = ({ title, name, writeData, value }) => {
	const color = value ? '#1E272E' : '#999'
	return (
		<View style={styles.itemContainer}>
			<Text style={[styles.itemTitle, { color }]}>{title}</Text>
			<CustomSwitch name={name} onChangeInput={writeData} initialValue={value} />
		</View>
	)
}

export default NotificationListItem
