import React from 'react'
import {
	Text,
	View,
	KeyboardAvoidingView,
	Keyboard,
	TouchableWithoutFeedback,
	Platform,
	TouchableOpacity,
} from 'react-native'

import {
	ForwardButton,
	Title,
	Label,
	Input,
	Offer,
} from '../../../../components/Registration/components'
import CustomCountryPicker from '../../../../components/CustomCountryPicker'
import NavigationHeader from '../../../../components/Profile/components/NavigationHeader'

import styles from './styles'

const FacebookView = ({
	navigation,
	togglePicker,
	country,
	code,
	onClear,
	value,
	onChange,
	isPickerVisible,
	changeCountry,
	email,
	switchEmail,
	onSwitch,
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
					<Title color="#000">Facebook verification</Title>
					<View style={styles.titleView}>
						<Text style={styles.titleColor}>
							To finish facebook verification, provide us with your phone number, email and address.
						</Text>
					</View>
					<TouchableOpacity onPress={togglePicker} style={[styles.inputView, styles.emailView]}>
						<Text style={styles.countryView}>{country}</Text>
					</TouchableOpacity>
					<View style={styles.labelView}>
						<Label><Translate value="SIGNUP_mail_countryConfim" /></Label>
					</View>
					<View style={[styles.inputView, styles.phone]}>
						<Text style={styles.countryView}>+{code}</Text>
						<Input onClear={onClear('value')} value={value} onChangeText={onChange('value')} />
					</View>
					<View style={styles.labelView}>
						<Label><Translate value="SIGNUP_mail_countryCodeConfim" /></Label>
					</View>
					<CustomCountryPicker
						isPickerVisible={isPickerVisible}
						togglePicker={togglePicker}
						changeCountry={inputValue => changeCountry(inputValue)}
					/>
					<View style={styles.emailView}>
						<Label>Email</Label>
					</View>
					<View style={styles.inputView}>
						<Input onClear={onClear('email')} value={email} onChangeText={onChange('email')} />
					</View>
					<View style={styles.offerView}>
						<Offer value={switchEmail} onChange={onSwitch}>
							Subscribe to our newsletter
						</Offer>
					</View>
					<View style={styles.forwardView}>
						<ForwardButton value={value && email} forwardTo={forwardTo} />
					</View>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default FacebookView
