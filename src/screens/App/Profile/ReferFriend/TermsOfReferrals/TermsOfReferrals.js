import React from 'react'
import { Text, SafeAreaView, ScrollView, View } from 'react-native'

import NavigationHeader from '../../../../../components/Profile/components/NavigationHeader'
import Title from '../../../../../components/Registration/components/Title'

import AnimatedClock from '../../../../../components/AnimatedClock'

import styles from './styles'
import { colors } from '../../../../../styles'

const TermsOfReferrals = ({ navigation, loading, termsEn, termsDa, user }) => {
	return (
		<SafeAreaView>
			<ScrollView style={styles.container}>
				<NavigationHeader navigation={navigation} onAction={() => {}} />
				<Title>Terms of the Referrals</Title>
				{loading ? (
					<View style={styles.loaderWrap}>
						<AnimatedClock color={colors.green} />
					</View>
				) : (
					<Text style={styles.text}>{user.locale === 'en' ? termsEn : termsDa}</Text>
				)}
			</ScrollView>
		</SafeAreaView>
	)
}

export default TermsOfReferrals
