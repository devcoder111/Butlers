import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

import NavigationHeader from '../../../../../../components/Profile/components/NavigationHeader'
import StoreMap from '../StoreMap/StoreMap'

import styles from './styles'

const NearestStoresRegist = ({ navigation, locations }) => {
	return (
		<SafeAreaView>
			<View style={styles.container}>
				<NavigationHeader navigation={navigation} leftText>
					<Text>The nearest stores</Text>
				</NavigationHeader>
			</View>
			<StoreMap navigation={navigation} withList={false} locations={locations} />
		</SafeAreaView>
	)
}

export default NearestStoresRegist
