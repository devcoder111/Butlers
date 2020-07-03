import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'

import Title from '../../../../../components/Registration/components/Title/Title'
import NavigationHeader from '../../../../../components/Profile/components/NavigationHeader'
import FAQAccordian from './FAQAccordian/FAQAccordian'

import styles from './styles'

const FAQ = ({ navigation, faq }) => {
	return (
		<SafeAreaView>
			<ScrollView style={styles.container}>
				<NavigationHeader navigation={navigation} onAction={() => {}} />
				<View style={styles.scrollContainer}>
					<Title color="#1E272E">Frequently asked questions</Title>
					<FAQAccordian navigation={navigation} faq={faq} />
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default FAQ
