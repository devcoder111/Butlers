import React from 'react'
import ModalSelector from 'react-native-modal-selector'
import { View, Text } from 'react-native'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Translate from '@app/translations'
import NavigationHeader from '../../../../components/Profile/components/NavigationHeader'
import CustomDatePicker from '../../../../components/CustomDatePicker'

import { Title, Label, Input } from '../../../../components/Registration/components'

import { colors } from '../../../../styles'
import styles from './styles'

import { placeholdersHandler } from '../../../../constants/translations/index'

const data = [
	{ key: 3122231, section: true, label: 'Choose sex' },
	{ key: 31231, label: 'male' },
	{ key: 222, label: 'female' },
]
const lng = [
	{ key: 3122231, section: true, label: 'Choose the language:' },
	{ key: 31231, label: 'en' },
	{ key: 222, label: 'da' },
]

const PersonalInformationView = ({
	navigation,
	onClear,
	onChange,
	onModalChange,
	firstName,
	lastName,
	email,
	phone,
	date,
	sex,
	address,
	houseNumber,
	floor,
	floorNumber,
	postalNumber,
	language,
	updateUser,
	updateCustomerDataLoading,
	updateCustomerDataSuccess,
	onUpdateComplete,
}) => {
	if (updateCustomerDataSuccess) {
		onUpdateComplete()
	}
	return (
		<KeyboardAwareScrollView style={styles.container}>
			<NavigationHeader
				navigation={navigation}
				onAction={updateCustomerDataLoading ? () => {} : updateUser}
				onPress={updateCustomerDataLoading ? () => {} : () => navigation.goBack()}
			>
				<Translate value="PROFILE_saveLocationButton" />
			</NavigationHeader>
			<Title color={colors.black}>
				<Translate value="PROFILE_personalInfoLink" />
			</Title>
			{updateCustomerDataLoading ? (
				<Text style={styles.isInfoSaved}><Translate value="PROFILE_personalInfo_savingLabel" /></Text>
			) : null}

			<View style={styles.labelView}>
				<Label color={colors.black}>
					<Translate value="SIGNUP_mail_firstNameLabel" />
				</Label>
			</View>
			<View style={styles.inputView}>
				<Input
					color={colors.black}
					selectionColor={colors.black}
					onClear={onClear('firstName')}
					value={firstName}
					onChangeText={onChange('firstName')}
				/>
			</View>
			<View style={styles.labelView}>
				<Label color={colors.black}>
					<Translate value="SIGNUP_mail_lastNameLabel" />
				</Label>
			</View>
			<View style={styles.inputView}>
				<Input
					color={colors.black}
					selectionColor={colors.black}
					onClear={onClear('lastName')}
					value={lastName}
					onChangeText={onChange('lastName')}
				/>
			</View>
			<View style={styles.labelView}>
				<Label color={colors.black}>
					<Translate value="SIGNUP_mail_ageInputLabel" />
				</Label>
			</View>
			<View style={styles.inputView}>
				<CustomDatePicker
					color={colors.black}
					selectionColor={colors.black}
					date={date}
					onClear={onClear('date')}
					onChange={onChange('date')}
					format="YYYY-MM-DD"
				/>
			</View>
			<View style={styles.labelView}>
				<Label color={colors.black}>
					<Translate value="PROFILE_personalInfo_sexLabel" />
				</Label>
			</View>
			<View style={styles.inputView}>
				<ModalSelector
					data={data}
					initValue={sex}
					overlayStyle={{
						justifyContent: 'flex-end',
						paddingHorizontal: '3%',
						paddingBottom: '2%',
					}}
					cancelText="Cancel"
					cancelStyle={{
						padding: 12,
						backgroundColor: 'rgb(255,255,255)',
						opacity: 0.9,
						borderRadius: 10,
					}}
					onChange={onModalChange('sex')}
				>
					<Input
						closeButton={false}
						color={colors.black}
						selectionColor={colors.black}
						value={sex}
					/>
				</ModalSelector>
			</View>
			<View style={styles.labelView}>
				<Label color={colors.black}>
					<Translate value="EmailLabel" />
				</Label>
			</View>
			<View style={styles.inputView}>
				<Text style={styles.inputText}>{email}</Text>
				{/* <Input
					color={colors.black}
					selectionColor={colors.black}
					onClear={onClear('email')}
					value={email}
					onChangeText={onChange('email')}
				/> */}
			</View>
			<View style={styles.labelView}>
				<Label color={colors.black}>
					<Translate value="SIGNUP_select_phoneButtonLabel" />
				</Label>
			</View>
			<View style={styles.inputView}>
				<Text style={styles.inputText}>{phone}</Text>
				{/* <Input
					type="num"
					color={colors.black}
					selectionColor={colors.black}
					onClear={onClear('phone')}
					value={phone}
					onChangeText={onChange('phone')}
				/> */}
			</View>

			{/* <View style={styles.labelView}>
				<Label color={colors.black}>
					<Translate value="AdressLabel" />
				</Label>
			</View>
			<View style={styles.inputView}>
				<Input
					color={colors.black}
					selectionColor={colors.black}
					onClear={onClear('address')}
					value={address}
					onChangeText={onChange('address')}
				/>
			</View>
			<View style={styles.midLane}>
				<View style={styles.houseNumber}>
					<View style={styles.labelView}>
						<Label color={colors.black}>
							<Translate value="SIGNUP_mail_adressHouseLabel" />
						</Label>
					</View>
					<View style={styles.inputView}>
						<Input
							color={colors.black}
							selectionColor={colors.black}
							onClear={onClear('houseNumber')}
							value={houseNumber}
							onChangeText={onChange('houseNumber')}
						/>
					</View>
				</View>
				<View style={styles.floor}>
					<View style={styles.labelView}>
						<Label color={colors.black}>
							<Translate value="SIGNUP_mail_adressFloorLabel" />
						</Label>
					</View>
					<View style={styles.inputView}>
						<Input
							color={colors.black}
							selectionColor={colors.black}
							onClear={onClear('floor')}
							value={floor}
							onChangeText={onChange('floor')}
						/>
					</View>
				</View> */}
			{/* <View style={styles.floor}>
				<View style={styles.labelView}>
					<Label color={colors.black}>
						<Translate value="SIGNUP_mail_adressFloorLabel" /> №
					</Label>
				</View>
				<View style={styles.inputView}>
					<Input
						color={colors.black}
						selectionColor={colors.black}
						onClear={onClear('floorNumber')}
						value={floorNumber}
						onChangeText={onChange('floorNumber')}
					/>
				</View>
			</View>
			</View>
			<View style={styles.labelView}>
				<Label color={colors.black}>
					<Translate value="SIGNUP_mail_adressPostalLabel" />
				</Label>
			</View>
			<View style={styles.inputView}>
				<Input
					color={colors.black}
					selectionColor={colors.black}
					onClear={onClear('postalNumber')}
					value={postalNumber}
					onChangeText={onChange('postalNumber')}
				/>
			</View> */}
			<View style={styles.labelView}>
				<Label color={colors.black}>
					<Translate value="PROFILE_personalInfo_languageLabel" />:
				</Label>
			</View>
			<View style={styles.inputView}>
				<View style={styles.inputView}>
					<ModalSelector
						data={lng}
						initValue={language}
						overlayStyle={{
							justifyContent: 'flex-end',
							paddingHorizontal: '3%',
							paddingBottom: '2%',
						}}
						cancelText="Cancel"
						cancelStyle={{
							padding: 12,
							backgroundColor: 'rgb(255,255,255)',
							opacity: 0.9,
							borderRadius: 10,
						}}
						onChange={onModalChange('language')}
					>
						<Input
							closeButton={false}
							color={colors.black}
							selectionColor={colors.black}
							value={language}
						/>
					</ModalSelector>
				</View>
			</View>
		</KeyboardAwareScrollView>
	)
}

export default PersonalInformationView
