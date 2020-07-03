import React from 'react'
import { View, Text } from 'react-native'
import Icon from '../../../../../../assets/index'

import Touchable from '../../../../../../components/Touchable/Touchable'

import styles from './styles'

const AboutListItem = ({ title, icon, data, navigateTo, onNavigate }) => {
	return (
		<Touchable onPress={() => onNavigate(navigateTo, data)}>
			<View style={styles.itemWrap}>
				<Text style={styles.itemText}>{title}</Text>
				<View style={styles.icon}>{Icon(icon)}</View>
			</View>
		</Touchable>
	)
}

export default AboutListItem
