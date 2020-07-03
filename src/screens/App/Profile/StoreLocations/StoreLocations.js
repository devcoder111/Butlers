import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

import Translate from '@app/translations'
import StoreMap from './StoreMap/StoreMap'
import Title from '../../../../components/Registration/components/Title/Title'
import NavigationHeader from '../../../../components/Profile/components/NavigationHeader'

import styles from './styles'

const StoreLocations = ({ navigation, locations }) => {
	const onSearch = () => {
		navigation.navigate('SearchStore')
	}
	return (
		<SafeAreaView>
			<View style={styles.container}>
				<NavigationHeader navigation={navigation} onAction={() => {}}>
					{/* <Translate value="INTRO_wrongArea_SearchButton" /> */}
				</NavigationHeader>
				<Title color="#000">
					<Translate value="PROFILE_storeLocationsLink" />
				</Title>
				<Text style={styles.text}>
					<Translate value="PROFILE_storeLocations_text" />
				</Text>
			</View>
			<View style={styles.scrollContainer}>
				<StoreMap navigation={navigation} withList locations={locations} />
			</View>
		</SafeAreaView>
	)
}

export default StoreLocations
