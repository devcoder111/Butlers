import React from 'react'
import { Text, ScrollView, SafeAreaView, View } from 'react-native'

import NavigationHeader from '../../../../components/Profile/components/NavigationHeader'
import Title from '../../../../components/Registration/components/Title'
import AnimatedClock from '../../../../components/AnimatedClock'

import styles from './styles'
import { colors } from '../../../../styles'

const CleaningPractices = ({ navigation, loading, practicesEn, practicesDa, user }) => {
	return (
		<SafeAreaView>
			<ScrollView style={styles.scrollWrap}>
				<View style={styles.container}>
					<NavigationHeader navigation={navigation} onAction={() => {}} />
					<Title>Cleaning Practices</Title>
					{loading ? (
						<View style={styles.loaderWrap}>
							<AnimatedClock color={colors.green} />
						</View>
					) : (
						<>
							{/* <View style={styles.iconWrap}><Image /></View> */}
							{/* <Text style={styles.text}>
								A Danemark governmental sign given to enviromental companies.
							</Text> */}
							<Text style={styles.text}>{user.locale === 'en' ? practicesEn : practicesDa}</Text>
						</>
					)}
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default CleaningPractices
