import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

import Title from '../../../../../../components/Registration/components/Title/Title'
import NavigationHeader from '../../../../../../components/Profile/components/NavigationHeader'
import AnimatedClock from '../../../../../../components/AnimatedClock'
import { colors } from '../../../../../../styles'

import styles from './styles'

const ShowGDPR = ({ navigation, loading, gdprEn, gdprDa, user }) => {
	return (
		<SafeAreaView>
			<View style={styles.container}>
				<NavigationHeader navigation={navigation} onAction={() => {}} />
				<View style={styles.scrollContainer}>
					<Title color="#1E272E">GDPR</Title>
					{loading ? (
						<View style={styles.loaderWrap}>
							<AnimatedClock color={colors.green} />
						</View>
					) : (
						<Text style={styles.text}>{user.locale === 'en' ? gdprEn : gdprDa}</Text>
					)}
				</View>
			</View>
		</SafeAreaView>
	)
}

export default ShowGDPR
