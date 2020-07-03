import React from 'react'
import {
	Text,
	View,
	KeyboardAvoidingView,
	Platform,
	Keyboard,
	TouchableWithoutFeedback,
	Animated,
} from 'react-native'
import Translate from '@app/translations'
import {
	Title,
	Input,
} from '../../../../../components/Registration/components'
import NavigationHeader from '../../../../../components/Profile/components/NavigationHeader'
import BottomButton from '../../../../../components/BottomButton/BottomButton';
import ValidationError from '../../../../../components/Registration/components/ValidationError/ValidationError'
import { BoxPasswordStrengthDisplay } from 'react-native-password-strength-meter';
import Icon from '../../../../../assets'
import styles from './styles'

const PasswordView = ({
	onClear,
	onChangePassword,
	onChangeConfirmation,
	onHidden,
	navigation,
	forwardTo,
	password,
	passwordHidden,
	passwordConfirmation,
	passwordConfirmationHidden,
	shownLength,
	lengthError,
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
					<Title color="#525255">
						<Translate value="SIGNUP_mail_passwordHeading" />
					</Title>
					<View style={styles.titleView}>
						<Text style={styles.textColor}>
							<Translate value="PasswordRequirements" />
						</Text>
					</View>

					<View style={styles.inputView}>
						<Input
							onClear={onClear('password')}
							style={styles.textInput}
							onChangeText={onChangePassword}
							value={password}
							secureTextEntry={passwordHidden}
							placeholder='Password (+8 Characters)'
						/>
						<BoxPasswordStrengthDisplay
							password={password}
							minLength='1'
							labelVisible='true'
							width= '200'
						/>
					</View>
					
					<View style={{ marginTop: 80 }}>
						<BottomButton
							onPress={!lengthError && forwardTo}
							shadow= {!lengthError ? true : false}
							border={!lengthError ? '#2ED573' : '#D8D8D8'}
							background={!lengthError ? '#2ED573' : '#D8D8D8'}
							arrow='true'>
							<Text>
								CONTINUE
							</Text>
						</BottomButton>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default PasswordView
