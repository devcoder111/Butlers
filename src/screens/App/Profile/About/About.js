import React from 'react'
import { SafeAreaView, View } from 'react-native'

import Title from '../../../../components/Registration/components/Title/Title'
import NavigationHeader from '../../../../components/Profile/components/NavigationHeader'
import AboutList from './AboutList/AboutList'

import styles from './styles'

const About = ({ navigation, serviceTypesWith }) => {
	return (
		<SafeAreaView>
			<View style={styles.container}>
				<NavigationHeader navigation={navigation} onAction={() => {}} />
				<View style={styles.scrollContainer}>
					<Title color="#1E272E">About</Title>
					<AboutList serviceTypesWith={serviceTypesWith} navigation={navigation} />
				</View>
			</View>
		</SafeAreaView>
	)
}

export default About
