import React from 'react'
import { SafeAreaView, View, Text, ScrollView, FlatList } from 'react-native'
import Translate from '@app/translations'

import NavigationHeader from '../../../../components/Registration/components/NavigationHeader'

import { Input } from '../../../../components/Registration/components'

import AnimatedClock from '../../../../components/AnimatedClock/AnimatedClock'

import SearchProductsListItem from './SearchProductsListItem'

import { colors } from '../../../../styles'
import styles from './styles'

const RenderItems = ({ searchText, forwardTo, products }) => {
	// console.log(searchServicesLoading ? 'load' : 'ne load')
	const searchProducts = products.filter(el => {
		return el.service_name.toLowerCase().includes(searchText.toLowerCase())
	})
	return searchText ? (
		<FlatList
			data={searchProducts}
			renderItem={item => <SearchProductsListItem forwardTo={forwardTo} data={item} />}
			keyExtractor={item => item.id}
		/>
	) : (
		<>
			<View style={styles.productsHeaderView}>
				<Text style={styles.productsHeaderText}><Translate value="MAIN_topSearches" /></Text>
			</View>
			<FlatList
				data={products}
				renderItem={item => <SearchProductsListItem forwardTo={forwardTo} data={item} />}
				keyExtractor={item => item.id}
			/>
		</>
	)
}

const SearchProductsView = ({
	searchText,
	onSearch,
	onClear,
	navigation,
	services,
	searchServicesLoading,
	forwardTo,
	activeServiceTypes,
}) => {
	const products = []
	if (activeServiceTypes) {
		activeServiceTypes.forEach(el => {
			products.push(...el.active_services)
		})
	}
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<NavigationHeader navigation={navigation} onAction={() => {}} />
			<View style={styles.search}>
				<View style={styles.inputView}>
					<Input
						underlineColorAndroid="transparent"
						placeholderTextColor={colors.white}
						selectionColor={colors.white}
						color={colors.white}
						placeholder="Search Trousers"
						onClear={onClear}
						value={searchText}
						onChangeText={onSearch}
					/>
				</View>
			</View>
			<ScrollView style={styles.container}>
				{searchServicesLoading ? (
					<View style={styles.loaderContainerWithPadding}>
						<View style={styles.spinnerWrap}>
							<AnimatedClock color={colors.green} />
						</View>
					</View>
				) : (
					<RenderItems searchText={searchText} forwardTo={forwardTo} products={products} />
				)}
			</ScrollView>
		</SafeAreaView>
	)
}

export default SearchProductsView
