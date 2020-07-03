import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

import Translate from '@app/translations'
import NavigationHeader from '../../../../../components/Profile/components/NavigationHeader'
import StoreMap from '../StoreMap/StoreMap'

import styles from './styles'

const NearestStores = ({ navigation, locations }) => {
	return (
		<SafeAreaView>
			<View style={styles.container}>
				<NavigationHeader navigation={navigation} leftText>
					<Text>
						<Translate value="PROFILE_storeLocations_nearestStoresHeading" />
					</Text>
				</NavigationHeader>
			</View>
			<StoreMap navigation={navigation} withList={false} locations={locations} />
		</SafeAreaView>
	)
}

export default NearestStores
