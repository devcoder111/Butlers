import React from 'react'
import { SafeAreaView, View } from 'react-native'

import Title from '../../../../../components/Registration/components/Title/Title'
import NavigationHeader from '../../../../../components/Profile/components/NavigationHeader'
import Slider from './Slider/Slider'

import styles from './styles'

const AppTutorial = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.headerContainer}>
				<NavigationHeader navigation={navigation} onAction={() => {}} />
				<View style={styles.backView}>
					<Title color="#1E272E">AppTutorial</Title>
				</View>
			</View>
			<Slider />
		</SafeAreaView>
	)
}

export default AppTutorial
