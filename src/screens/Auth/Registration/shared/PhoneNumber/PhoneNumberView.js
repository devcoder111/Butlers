import React from 'react'
import {
	Text,
	View,
	KeyboardAvoidingView,
	Platform,
	Keyboard,
	TouchableWithoutFeedback,
	TouchableOpacity,
	Animated,
} from 'react-native'
import Translate from '@app/translations'

import {
	ForwardButton,
	Title,
	Label,
	Input,
} from '../../../../../components/Registration/components'
import NavigationHeader from '../../../../../components/Profile/components/NavigationHeader'
import ValidationError from '../../../../../components/Registration/components/ValidationError/ValidationError'
import { placeholdersHandler } from '../../../../../constants/translations/index'
import BottomButton from '../../../../../components/BottomButton/BottomButton';

import Icon from '../../../../../assets'
import CustomCountryPicker from '../../../../../components/CustomCountryPicker'

import styles from './styles'

const PhoneNumberView = ({
	navigation,
	togglePicker,
	country,
	code,
	onClear,
	value,
	forwardTo,
	changeCountry,
	onChange,
	shown,
	validationError,
	checkEmailUsedError,
	checkEmailUsedResponse,
	onNavigate,
}) => {
	return (
		<KeyboardAvoidingView
			automaticallyAdjustContentInsets={false}
			behavior={Platform.OS === 'ios' ? 'padding' : null}
			style={{ flex: 1 }}
		>
			{console.log(checkEmailUsedResponse)}
			{checkEmailUsedResponse.phone === 'success' ? onNavigate() : null}
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.container}>
					<NavigationHeader navigation={navigation} />
					<Title color="#525255">
						<Translate value="SIGNUP_mail_phoneHeading" />{' '}
					</Title>

					<View style={[styles.inputView, styles.phone]}>
						<Text style={styles.countryView}>+{code || 45}</Text>
						<View style={styles.inputWrap}>
							<Input
								onClear={onClear}
								value={value}
								onChangeText={onChange}
								type="num"
								maxLength={15}
							/>
						</View>
					</View>
					<View style={styles.labelView}>
						<Animated.View style={{ opacity: shown }}>
							<ValidationError text={<Translate value="SIGNUP_mail_phoneNumberInclude" />} />
						</Animated.View>
						<Text style={[styles.error, { opacity: checkEmailUsedError ? 1 : 0 }]}>
							This phone number is already used
						</Text>
					</View>

					<View style={{marginTop: 100}}>
						<BottomButton onPress={!validationError && forwardTo }
						shadow= {!validationError? true : false} 
							border= {!validationError ? '#2ED573' : '#D8D8D8'} 
							background= {!validationError ? '#2ED573' : '#D8D8D8'}
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

export default PhoneNumberView
