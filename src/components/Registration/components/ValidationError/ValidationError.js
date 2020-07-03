import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

const ModalLoadingBeforeRegistered = ({ text }) => {
	return (
		<View style={styles.error}>
			<Text style={styles.errorText}>{text}</Text>
		</View>
	)
}
export default ModalLoadingBeforeRegistered
