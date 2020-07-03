import React from 'react'
import {
	View,
	KeyboardAvoidingView,
	Platform,
	Keyboard,
	TouchableWithoutFeedback,
	Text,
} from 'react-native'
import Translate from '@app/translations'

import { ForwardButton, Title, Label, Input } from '../../../components/Registration/components'
import NavigationHeader from '../../../components/Profile/components/NavigationHeader'

import Icon from '../../../assets'
import styles from './styles'

const PasswordRecoveryView = ({ navigation, onChangeEmail, email, forwardTo }) => {
	return (
		<KeyboardAvoidingView
			automaticallyAdjustContentInsets={false}
			behavior={Platform.OS === 'ios' ? 'padding' : null}
			style={{ flex: 1 }}
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.container}>
					<NavigationHeader navigation={navigation} />
					<Title color="#000">
						<Translate value="LOGIN_recoverHeading" />
					</Title>
					<Text style={styles.text}>
						<Translate value="LOGIN_recoverText" />
					</Text>
					<View style={styles.labelView}>
						<Label color="#000">
							<Translate value="EmailLabel" />
						</Label>
					</View>
					<View style={styles.inputView}>
						<Input name={email} value={email} onChangeText={onChangeEmail} color="#000" />
					</View>
					<View style={styles.illustration}>{Icon('Illustration9')}</View>
					<View style={styles.forwardView}>
						<ForwardButton forwardTo={forwardTo} value={email} />
					</View>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default PasswordRecoveryView
