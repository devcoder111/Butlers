import React, { PureComponent } from 'react'
import { SafeAreaView, Text, View } from 'react-native'

import StoreInput from './StoreInput/StoreInput'
import NavigationHeader from '../../../../../../components/Profile/components/NavigationHeader'
import Touchable from '../../../../../../components/Touchable/Touchable'
import StoreMap from '../StoreMap/StoreMap'

import styles from './styles'

class SearchStoreRegist extends PureComponent {
	render() {
		const { locations, navigation, onChangeInput } = this.props
		return (
			<SafeAreaView>
				<View style={styles.header}>
					<NavigationHeader navigation={navigation} />
					<StoreInput onChangeInput={onChangeInput} />
				</View>
				<View style={styles.mapContainer}>
					<StoreMap navigation={navigation} withList={false} locations={locations} />
				</View>
				<Touchable
					onPress={() => navigation.navigate('NearestStoresRegist')}
					containerStyle={styles.linkContainer}
				>
					<Text style={styles.link}>Show me the nearest stores</Text>
				</Touchable>
			</SafeAreaView>
		)
	}
}

export default SearchStoreRegist
