import React from 'react'
import { SafeAreaView, View, Text, Linking, Platform } from 'react-native'

import Title from '../../../../../../components/Registration/components/Title/Title'
import NavigationHeader from '../../../../../../components/Profile/components/NavigationHeader'
import Touchable from '../../../../../../components/Touchable/Touchable'

import styles from './styles'

const StoreInfoRegist = ({ navigation }) => {
	const item = navigation.getParam('item')
	const onNavigate = () => {
		const lat = item.latitude
		const lng = item.longitude
		const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' })
		const latLng = `${lat},${lng}`
		const label = 'Butlers'
		const url = Platform.select({
			ios: `${scheme}${label}@${latLng}`,
			android: `${scheme}${latLng}(${label})`,
		})

		Linking.openURL(url)
	}

	return (
		<SafeAreaView>
			<View style={styles.headerContainer}>
				<NavigationHeader navigation={navigation} onAction={() => {}} color="#fff" />
				<View style={styles.image} />
			</View>
			<View style={styles.container}>
				<Title color="#000">{item.name}</Title>
				<Text style={styles.text}>{item.address}</Text>
				<Text style={styles.text}>{item.zone.city.name}</Text>
				<Touchable onPress={onNavigate}>
					<Text style={styles.link}>View the store on Google maps</Text>
				</Touchable>
			</View>
		</SafeAreaView>
	)
}

export default StoreInfoRegist
