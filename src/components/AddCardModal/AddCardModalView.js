import React from 'react'
import { Text, View } from 'react-native'

import Translate from '@app/translations'
import styles from './styles'

import { ForwardButton } from '../Registration/components'
import { colors } from '../../styles'

const AddCardModalView = ({ onAddCard }) => {
	return (
		<View style={styles.container}>
			<View style={styles.modalWrap}>
				<Text style={styles.header}>
					<Translate value="PROFILE_addNewCard_addSuccessHeading" />
				</Text>
				<Text style={styles.text}>
					<Translate value="PROFILE_addNewCard_addSuccessText" />
				</Text>
				<ForwardButton
					colorText={colors.white}
					backgroundColorText={colors.green}
					value={'>'}
					forwardTo={onAddCard}
				>
					<Translate value="PROFILE_addNewCard_addButton" />
				</ForwardButton>
			</View>
		</View>
	)
}

export default AddCardModalView
