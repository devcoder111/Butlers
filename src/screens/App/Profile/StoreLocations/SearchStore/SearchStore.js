import React, { PureComponent } from 'react'
import { SafeAreaView, Text, View } from 'react-native'

import Translate from '@app/translations'
import StoreInput from './StoreInput/StoreInput'
import NavigationHeader from '../../../../../components/Profile/components/NavigationHeader'
import Touchable from '../../../../../components/Touchable/Touchable'
import StoreMap from '../StoreMap/StoreMap'

import styles from './styles'

class SearchStore extends PureComponent {
	render() {
		const { locations, navigation, onChangeInput, user } = this.props
		return (
			<SafeAreaView>
				<View style={styles.header}>
					<NavigationHeader navigation={navigation} />
					<StoreInput onChangeInput={onChangeInput} user={user} />
				</View>
				<View style={styles.mapContainer}>
					<StoreMap navigation={navigation} withList={false} locations={locations} />
				</View>
				<Touchable
					onPress={() => navigation.navigate('NearestStores')}
					containerStyle={styles.linkContainer}
				>
					<Text style={styles.link}>
						<Translate value="PROFILE_storeLocations_nearestStoresLink" />
					</Text>
				</Touchable>
			</SafeAreaView>
		)
	}
}

export default SearchStore
