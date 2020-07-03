import React from 'react'
import {
	View,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Platform,
	Keyboard,
	Animated,
	Modal,
	Text,
} from 'react-native'
import Translate from '@app/translations'
import ValidationError from '../../../../../components/Registration/components/ValidationError/ValidationError'
import AddCardModalView from '../../../../../components/AddCardModal/AddCardModalView'

import { Title, Input, ForwardButton } from '../../../../../components/Registration/components'
import NavigationHeader from '../../../../../components/Profile/components/NavigationHeader'

import { colors } from '../../../../../styles'

import styles from './styles'

import { placeholdersHandler } from '../../../../../constants/translations/index'

const AddCardView = ({
	navigation,
	// data: { primary, number, date },
	expireDate,
	onChange,
	validationError,
	cvv,
	cardNumber,
	shown,
	shownDate,
	onChangeCvv,
	sendData,
	onChangeDate,
	visibleModal,
	onModalClose,
	onAddCard,
	onClear,
	stopCheckDate,
	user,
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
					<Title color={colors.black}>
						<Translate value="PROFILE_addNewCard_heading" />
					</Title>
					<View style={styles.margin} />
					<View style={styles.inputView}>
						<Input
							placeholder={placeholdersHandler(user, 'PROFILE_cardDetails_cardNumberLabel')}
							selectionColor={colors.black}
							type="num"
							onChangeText={onChange}
							value={cardNumber}
							maxLength={16}
							onClear={onClear('cardNumber')}
						/>
					</View>
					<Animated.View style={{ opacity: shown }}>
						<ValidationError text={placeholdersHandler(user, 'PROFILE_cardDetails_correctCardNumber')} />
					</Animated.View>
					<View style={styles.inputView}>
						<Input
							placeholder={placeholdersHandler(user, 'PROFILE_cardDetails_expireDateLabel')}
							onChangeText={expireDate.length === 5 ? stopCheckDate : onChangeDate}
							value={expireDate}
							type="num"
							maxLength={5}
							onClear={onClear('expireDate')}
						/>
					</View>
					<Animated.View style={{ opacity: shownDate }}>
						<ValidationError text={placeholdersHandler(user, 'PROFILE_cardDetails_correctExpirationDate')} />
					</Animated.View>
					<View style={styles.inputView}>
						<Input
							placeholder={placeholdersHandler(user, 'PROFILE_addNewCard_cvvLabel')}
							selectionColor={colors.black}
							type="num"
							maxLength={3}
							secureTextEntry
							value={cvv}
							onChangeText={onChangeCvv}
							onClear={onClear('cvv')}
						/>
					</View>
					<Animated.View style={{ opacity: 0 }}>
						<ValidationError text={placeholdersHandler(user, 'PROFILE_cardDetails_correctCardNumber')} />
					</Animated.View>
					<View style={styles.forwardView}>
						<ForwardButton
							colorText={colors.white}
							backgroundColorText={colors.green}
							value={!validationError && cardNumber && cvv.length === 3}
							forwardTo={sendData}
						>
							<Text>
								<Translate value="PROFILE_addNewCard_addButton" />
							</Text>
						</ForwardButton>
					</View>
					<Modal animationType="slide" transparent visible={visibleModal}>
						<AddCardModalView
							onClose={onModalClose}
							navigation={navigation}
							onAddCard={onAddCard}
							visible={visibleModal}
						/>
					</Modal>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default AddCardView
