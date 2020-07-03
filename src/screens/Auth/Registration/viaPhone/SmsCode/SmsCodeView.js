import React from 'react'
import {
	Text,
	View,
	KeyboardAvoidingView,
	Keyboard,
	TouchableWithoutFeedback,
	Platform,
} from 'react-native'
import Translate from '@app/translations'
import {
	Title,
} from '../../../../../components/Registration/components'
import NavigationHeader from '../../../../../components/Profile/components/NavigationHeader'
import NavigationLink from '../../../../../components/Registration/components/NavigationLink'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import BottomButton from '../../../../../components/BottomButton/BottomButton';

import styles from './styles'

const SmsCodeView = ({
	navigation,
	onClear,
	value,
	onChange,
	forwardTo,
	code,
	routeTo,
	resendCode,
	codeSentVisible,
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
						<Translate value="SIGNUP_mail_smsHeading" />
					</Title>
					<View style={styles.titleView}>
						<Text style={styles.titleColor}>
							<Translate value="SIGNUP_mail_smsText" />
						</Text>
					</View>
{/* 
					<View style={styles.inputView}>
						<Input
							onClear={onClear}
							value={value}
							type="num"
							onChangeText={onChange}
							textContentType="oneTimeCode"
						/>
					</View> */}

					<SmoothPinCodeInput
						codeLength={4}
						cellSize={55}
						cellStyle={{
							borderBottomWidth: .9,
							borderColor: '#ddd',
							marginTop: 50,
						}}
						textStyle={{
							fontSize: 42,
							color: '#525255',
							fontFamily: 'CircularStd-Bold'
						}}
						containerStyle={{
							marginTop: 100,
						}}
						cellSpacing={20}
						cellStyleFocused={{
							borderColor: 'black',
						}}
						onClear={onClear}
						value={value}
						type="num"
						onTextChange={onChange}
						textContentType="oneTimeCode"
					/>

					<View style={styles.resendCode}>
						<Text style={[styles.resentText, { opacity: codeSentVisible ? 1 : 0 }]}>
							We have sent a new code
						</Text>
					</View>

					<View style={{marginTop: 100}}>
						<BottomButton 
							// onPress={value === code && forwardTo } 
							onPress={() => navigation.navigate('Birthday') }
							shadow= {value === code ? true : false}
							border= {value === code ? '#2ED573' : '#D8D8D8'} 
							background= {value === code ? '#2ED573' : '#D8D8D8'}
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

export default SmsCodeView
