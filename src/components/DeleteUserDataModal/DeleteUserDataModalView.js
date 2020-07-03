import React from 'react'
import { Text, View, TouchableWithoutFeedback } from 'react-native'

import styles from './styles'

import { ForwardButton } from '../Registration/components'
import Icon from '../../assets'
import { colors } from '../../styles'

const DeleteUserDataModalView = ({ onDeleteClick, onClose }) => {
	return (
		<View style={styles.container}>
			<View style={styles.modalWrap}>
				<Text style={styles.header}>Warning</Text>
				<Text style={styles.text}>
					Your account will be deleted together with purchased subscriptions
				</Text>
				<TouchableWithoutFeedback onPress={onClose}>
					<View style={styles.touchable}>{Icon('Cross')}</View>
				</TouchableWithoutFeedback>
				<ForwardButton
					colorText={colors.white}
					backgroundColorText={colors.green}
					value={'>'}
					forwardTo={onDeleteClick}
				>
					Add
				</ForwardButton>
			</View>
		</View>
	)
}

export default DeleteUserDataModalView
