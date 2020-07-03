import React from 'react'
import {
	Text,
	View,
	KeyboardAvoidingView,
	Platform,
	Keyboard,
	TouchableWithoutFeedback,
	Modal,
} from 'react-native'
import Translate from '@app/translations'

import {
	ForwardButton,
	Title,
	Input,
	Offer,
	ModalLoadingBeforeRegistered,
} from '../../../../../components/Registration/components'
import NavigationHeader from '../../../../../components/Profile/components/NavigationHeader'
import BottomButton from '../../../../../components/BottomButton/BottomButton';
import CircleCheckBox, { LABEL_POSITION } from 'react-native-circle-checkbox';
import styles from './styles'

const AboutUs = ({
	navigation,
	onSwitch,
	onChange,
	onClear,
	email,
	friend,
	tv,
	radio,
	other,
	otherValue,
	routeTo,
	modalVisible,
	forwardTo,
	registeredUser,
}) => {
	if (registeredUser) return navigation.navigate('Welcome')
	return (
		<KeyboardAvoidingView
			automaticallyAdjustContentInsets={false}
			behavior={Platform.OS === 'ios' ? 'padding' : null}
			style={{ flex: 1 }}
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.container}>
					<NavigationHeader navigation={navigation} routeTo={routeTo} />
					<Title color="#525255">
						<Translate value="SIGNUP_mail_heardHeading" />
					</Title>
					<View style={styles.titleView}>
						<Text style={styles.textColor}>
							<Translate value="SIGNUP_mail_heardText" />
						</Text>
					</View>
					<View style={[styles.offerView, styles.firstOffer]}>
						<CircleCheckBox
							checked={email}
							innerColor='#2ED573'
							outerColor='#8B8C8E'
							onToggle={onSwitch('email')}
							labelPosition={LABEL_POSITION.RIGHT}
							label=" "
						/>
						<Text><Translate value="SIGNUP_mail_heardEmailLabel" /></Text>
					</View>
					<View style={styles.offerView}>
						<CircleCheckBox
							checked={friend}
							innerColor='#2ED573'
							outerColor='#8B8C8E'
							onToggle={onSwitch('friend')}
							labelPosition={LABEL_POSITION.RIGHT}
							label=" "
						/>
						<Text><Translate value="SIGNUP_mail_heardFriendLabel" /></Text>
					</View>
					<View style={styles.offerView}>
						<CircleCheckBox
							checked={tv}
							innerColor='#2ED573'
							outerColor='#8B8C8E'
							onToggle={onSwitch('tv')}
							labelPosition={LABEL_POSITION.RIGHT}
							label=" "
						/>
						<Text><Translate value="SIGNUP_mail_heardTvLabel" /></Text>
					</View>
					<View style={styles.offerView}>
						<CircleCheckBox
							checked={other}
							innerColor='#2ED573'
							outerColor='#8B8C8E'
							onToggle={onSwitch('other')}
							labelPosition={LABEL_POSITION.RIGHT}
							label=" "
						/>
						<Text><Translate value="SIGNUP_mail_heardOtherLabel" /></Text>
					</View>
					{other ? (
						<>
							<View style={styles.inputView}>
								<Input onClear={onClear} value={otherValue} onChangeText={onChange} />
							</View>
						</>
					) : null}

					<View style={{ marginTop: 30 }}>
						<BottomButton
							onPress={(email || friend || tv || (other && otherValue)) && forwardTo}
							border={(email || friend || tv || (other && otherValue)) ? '#2ED573' : '#D8D8D8'}
							background={(email || friend || tv || (other && otherValue)) ? '#2ED573' : '#D8D8D8'}
							arrow='true'>
							<Text>
								CONTINUE
							</Text>
						</BottomButton>
					</View>

					<Modal backdropColor={'black'} backdropOpacity={0} transparent visible={modalVisible}>
						<ModalLoadingBeforeRegistered />
					</Modal>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default AboutUs
