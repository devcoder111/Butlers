import React from 'react'
import { Text, View, TouchableWithoutFeedback } from 'react-native'
import Translate from '@app/translations'

import styles from './styles'

import { ForwardButton } from '../Registration/components'
import Icon from '../../assets'
import { colors } from '../../styles'

const DeleteCardModalView = ({ onDeleteCard, onClose }) => {
	return (
		<View style={styles.container}>
			<View style={styles.modalWrap}>
				<Text style={styles.header}><Translate value="PROFILE_cardDetails_deleteCard" /></Text>
				<Text style={styles.text}><Translate value="PROFILE_cardDetails_wantDeleteCard" /></Text>
				<TouchableWithoutFeedback onPress={onClose}>
					<View style={styles.touchable}>{Icon('Cross')}</View>
				</TouchableWithoutFeedback>
				<ForwardButton
					colorText={colors.white}
					backgroundColorText={colors.green}
					value={'>'}
					forwardTo={onDeleteCard}
				>
					<Translate value="PROFILE_addNewCard_addButton" />
				</ForwardButton>
			</View>
		</View>
	)
}

export default DeleteCardModalView
