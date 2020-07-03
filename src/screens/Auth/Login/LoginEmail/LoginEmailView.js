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

const EmailView = ({
	navigation,
	onChangePass,
	onChangeEmail,
	email,
	password,
	showPassword,
	onShow,
	forwardTo,
	authenticated,
	method,
	isLoginError,
	onClear,
}) => {
	if (authenticated) {
		return navigation.navigate('App')
	}
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
						<Translate value="Login" />
					</Title>
					<Text style={[{ opacity: isLoginError ? 1 : 0 }, styles.loginError]}>
					<Translate value="LOGIN_InvalidLogin" />
					</Text>
					<View style={styles.labelView}>
						<Label color="#000">
							<Translate value="EmailLabel" />
						</Label>
					</View>
					<View style={styles.inputView}>
						<Input
							name={email}
							value={email}
							onChangeText={onChangeEmail}
							color="#000"
							onClear={() => onClear('email')}
						/>
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
							secureTextEntry={!showPassword}
							onClear={() => onClear('password')}
						/>
					</View>
					<TouchableWithoutFeedback onPress={() => navigation.navigate('RecoverPassword')}>
						<Text style={styles.link}>
							<Translate value="LOGIN_emailForgotButton" />
						</Text>
					</TouchableWithoutFeedback>
					<View style={styles.forwardView}>
						<ForwardButton forwardTo={forwardTo} value={email} />
					</View>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default EmailView
