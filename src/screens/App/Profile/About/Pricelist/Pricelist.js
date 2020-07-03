import React from 'react'
import { SafeAreaView, View, FlatList, ScrollView } from 'react-native'

import Title from '../../../../../components/Registration/components/Title/Title'
import NavigationHeader from '../../../../../components/Profile/components/NavigationHeader'
import PriceListItem from './PriceListItem/PriceListItem'

import styles from './styles'
import { colors } from '../../../../../styles'

const Pricelist = ({ navigation }) => {
	const types = navigation.state.params
	console.log(types, 'here')
	return (
		<SafeAreaView>
			<ScrollView style={styles.container}>
				<NavigationHeader navigation={navigation} onAction={() => {}} />
				<View style={styles.scrollContainer}>
					<Title color={colors.black}>Pricelist</Title>
					<FlatList
						style={styles.listWrap}
						data={types}
						renderItem={({ item }) => <PriceListItem title={item.name} services={item.services} />}
						keyExtractor={item => item.id}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default Pricelist
