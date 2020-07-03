/* eslint-disable no-template-curly-in-string */
import React from 'react'
import { SafeAreaView, Text, Platform, Linking, View } from 'react-native'

import Translate from '@app/translations'
import Touchable from '../../../../../components/Touchable/Touchable'
import Title from '../../../../../components/Registration/components/Title/Title'
import NavigationHeader from '../../../../../components/Profile/components/NavigationHeader'

import styles from './styles'

const ContactInfo = ({ navigation }) => {
	const callDialogue = () => {
		let phoneNumber = ''

		if (Platform.OS === 'android') {
			phoneNumber = 'tel:${+45 7022 2058}'
		} else {
			phoneNumber = 'telprompt:${+45 7022 2058}'
		}

		Linking.openURL(phoneNumber)
	}

	const mailDialogue = () => {
		Linking.openURL('mailto:info@butlers.dk')
	}

	return (
		<SafeAreaView>
			<View style={styles.container}>
				<NavigationHeader navigation={navigation} onAction={() => {}} />
				<View style={styles.scrollContainer}>
					<Title color="#1E272E">
						<Translate value="PROFILE_contactInfoHeading" />
					</Title>
					<Text style={styles.text}>Butlers{'\n'}Literbuen 11, 2740 Skovlunde</Text>
					<Touchable containerStyle={styles.text} onPress={callDialogue}>
						<Text style={styles.textNoPadding}>t. +45 7022 2058</Text>
					</Touchable>
					<Touchable containerStyle={styles.textNoPadding} onPress={mailDialogue}>
						<Text style={styles.textNoPadding}>e. info@butlers.dk</Text>
					</Touchable>
					<Text style={styles.text}>CVR: 29637830</Text>
					<Text style={styles.text}>Man - torsdag: 8.00 - 16.00{'\n'}Fredag: 8.00 - 15.30</Text>
				</View>
			</View>
		</SafeAreaView>
	)
}

export default ContactInfo
