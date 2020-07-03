import React from 'react'
import { SafeAreaView } from 'react-native'

import { ScrollView } from 'react-native-gesture-handler'
import { Title } from '../../../../components/Registration/components'
import NavigationHeader from '../../../../components/Profile/components/NavigationHeader'

import { colors } from '../../../../styles'

import styles from './styles'

import FavouriteLocationsList from '../../../../components/Profile/components/FavouriteLocationsList'

const FavouriteLocationsView = ({ navigation }) => {
	return (
		<ScrollView>
			<SafeAreaView style={styles.container}>
				<NavigationHeader navigation={navigation} onAction={() => {}} />
				<Title color={colors.black}>Favourite locations</Title>
				<FavouriteLocationsList />
			</SafeAreaView>
		</ScrollView>
	)
}

export default FavouriteLocationsView
