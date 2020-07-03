import React from 'react'
import { Text, View, TouchableWithoutFeedback } from 'react-native'

import styles from './styles'

import { ForwardButton } from '../Registration/components'
import Icon from '../../assets'
import { colors } from '../../styles'

const SendGDPRModalView = ({ onDeleteCard, onClose }) => {
	return (
		<View style={styles.container}>
			<View style={styles.modalWrap}>
				<Text style={styles.header}>Success!</Text>
				<Text style={styles.text}>Your personal information was sent to your email.</Text>
				<TouchableWithoutFeedback onPress={onClose}>
					<View style={styles.touchable}>{Icon('Cross')}</View>
				</TouchableWithoutFeedback>
				{/* <ForwardButton
					colorText={colors.white}
					backgroundColorText={colors.green}
					value={'>'}
					forwardTo={onDeleteCard}
				>
					Add
				</ForwardButton> */}
			</View>
		</View>
	)
}

export default SendGDPRModalView
