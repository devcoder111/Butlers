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
import { ForwardButton, Title, Label, Input } from '../../../../components/Registration/components'
import NavigationHeader from '../../../../components/Profile/components/NavigationHeader'

import styles from './styles'

const CratePasswordView = ({
	navigation,
	onChangePass,
	onChangeEmail,
	email,
	password,
	showPassword,
	onShow,
	forwardTo,
}) => {
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
						<Translate value="LOGIN_createNewPasswordHeading" />
					</Title>
					<Text style={styles.text}>
						<Translate value="PasswordRequirements" />
					</Text>
					<View style={styles.labelView}>
						<Label color="#000">
							<Translate value="EmailLabel" />
						</Label>
					</View>
					<View style={styles.inputView}>
						<Input name={email} value={email} onChangeText={onChangeEmail} color="#000" />
					</View>
					<View style={styles.labelView}>
						<Label color="#000">
							<Translate value="PasswordLabel" />
						</Label>
						<TouchableWithoutFeedback onPress={onShow}>
							<Text>
								<Translate value="ShowLabel" />
							</Text>
						</TouchableWithoutFeedback>
					</View>
					<View style={styles.inputView}>
						<Input
							name={password}
							value={password}
							onChangeText={onChangePass}
							color="#000"
							secureTextEntry={showPassword}
						/>
					</View>
					<View style={styles.forwardView}>
						<ForwardButton forwardTo={forwardTo} value={password} />
					</View>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default CratePasswordView
