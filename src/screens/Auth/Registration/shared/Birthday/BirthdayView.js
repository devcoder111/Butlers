import React from 'react'
import {
	Text,
	View,
	KeyboardAvoidingView,
	Platform,
	Keyboard,
	TouchableWithoutFeedback,
} from 'react-native'
import Translate from '@app/translations'

import { ForwardButton, Title, Label } from '../../../../../components/Registration/components'
import NavigationHeader from '../../../../../components/Profile/components/NavigationHeader'
import BottomButton from '../../../../../components/BottomButton/BottomButton';
import CustomDatePicker from '../../../../../components/CustomDatePicker'
import { colors } from '../../../../../styles'
import styles from './styles'

const BirthdayView = ({ date, navigation, onClear, onChange, forwardTo, getMaxDate }) => {
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
						<Translate value="SIGNUP_mail_ageHeading" />
					</Title>
					<View style={styles.titleView}>
						<Text style={styles.textColor}>
							<Translate value="SIGNUP_mail_ageText" />
						</Text>
					</View>

					<View style={styles.inputView}>
						<CustomDatePicker
							placeholder ="dd / mm / yyyy"							
							color={colors.black}
							date={date}
							selectionColor={colors.black}
							onClear={onClear}
							onChange={onChange}
							format="YYYY-MM-DD"
							maxDate={getMaxDate()}
						/>
					</View>
					
					<View style={{marginTop: 100}}>
						<BottomButton 
							onPress={() => value={date}, date.length && forwardTo }
							shadow= {date.length ?  true : false}
							border= {date.length ? '#2ED573' : '#D8D8D8'} 
							background= {date.length ? '#2ED573' : '#D8D8D8'}
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

export default BirthdayView
