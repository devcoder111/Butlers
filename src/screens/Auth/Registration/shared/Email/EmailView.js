import React from 'react'
import {
	View,
	KeyboardAvoidingView,
	Platform,
	Keyboard,
	TouchableWithoutFeedback,
	Animated,
	Text,
} from 'react-native'

import Translate from '@app/translations'
import {
	ForwardButton,
	Title,
	Label,
	Input,
	Offer,
} from '../../../../../components/Registration/components'
import NavigationHeader from '../../../../../components/Profile/components/NavigationHeader'
import BottomButton from '../../../../../components/BottomButton/BottomButton';
import ValidationError from '../../../../../components/Registration/components/ValidationError/ValidationError'
import CircleCheckBox, { LABEL_POSITION } from 'react-native-circle-checkbox';
import styles from './styles'

const EmailView = ({
	navigation,
	onClear,
	email,
	onChange,
	forwardTo,
	switchEmail,
	onSwitch,
	shown,
	validationError,
	emailChecked,
	routeTo,
	checkEmailUsedError,
	onNavigate,
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
						<Translate value="SIGNUP_mail_emailHeading" />
					</Title>
					{emailChecked.email === 'success' ? onNavigate() : null}
					<Text style={[styles.error, { opacity: checkEmailUsedError ? 1 : 0 }]}>
						<Translate value="SIGNUP_mail_alreadyUsedEmail" />
					</Text>

					<View style={styles.inputView}>
						<Input
							onClear={onClear}
							value={email}
							onChangeText={onChange}
							placeholder="Email "
						/>
					</View>
					<Animated.View style={{ opacity: shown }}>
						<ValidationError text={<Translate value="SIGNUP_mail_correctEmail" />} />
					</Animated.View>
					<View style={styles.offerView}>
						<CircleCheckBox
							checked={switchEmail}
							innerColor='#2ED573'
							outerColor='#8B8C8E'
							onToggle={onSwitch}
							labelPosition={LABEL_POSITION.RIGHT}
							label=" "
						/>
						<View style={{ flexDirection: 'row' }}>
							<Text style={{ color: '#2ED573' }}>
								<Translate value="SIGNUP_mail_subscribeLabelLink" />
							</Text>
							<Text style={{ fontSize: 15, color: '#B5B7BA' }}>
								<Translate value="SIGNUP_mail_subscribeLabel" />
							</Text>
						</View>
					</View>

					<View style={{ marginTop: 180 }}>
						<BottomButton onPress={!validationError && forwardTo}
							shadow={!validationError ? true : false}
							border={!validationError ? '#2ED573' : '#D8D8D8'}
							background={!validationError ? '#2ED573' : '#D8D8D8'}
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

export default EmailView
