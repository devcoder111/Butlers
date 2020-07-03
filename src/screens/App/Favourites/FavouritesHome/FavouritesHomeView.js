import React from 'react'
import { ScrollView, Text, View, SafeAreaView, FlatList } from 'react-native'

import Translate from '@app/translations'
import Title from '../../../../components/Registration/components/Title/Title'

import AnimatedClock from '../../../../components/AnimatedClock'
import FavoritesListItem from './FavoritesListItem/FavoritesListItem'
import Basket from '../../../../components/Cleaning/BasketButton'

import { colors } from '../../../../styles'
import styles from './styles'

const FavouritesHomeView = ({
	addItemToBasket,
	deleteItemFromBasket,
	favorites,
	isFavoritesLoading,
	total,
	navigateTo,
	getFavorites,
	deleteFavorite,
	allServices,
}) => {
	const fav = favorites.slice()
	fav.forEach(el => {
		allServices.forEach(item => {
			if (el.type_id === item.id) el.category = item.name
		})
	})
	const category = []
	fav.forEach(el => {
		if (!category.includes(el.category)) category.push(el.category)
	})
	const filtered = category => {
		return fav.filter(el => {
			return category === el.category
		})
	}
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={{ flex: 1, position: 'relative' }}>
				<Basket count={total} navigateTo={() => navigateTo('Basket')} />

				<ScrollView style={styles.container}>
					<Title color="#1E272E">
						<Translate value="FAVORITES_heading" />
					</Title>

					{isFavoritesLoading ? (
						<View style={styles.loaderContainerWithPadding}>
							<View style={styles.spinnerWrap}>
								<AnimatedClock color={colors.green} />
							</View>
						</View>
					) : (
						<>
							<Text style={styles.text}>
								{favorites ? (
									<Translate value="FAVORITES_text" />
								) : (
									<Translate value="FAVORITES_empty" />
								)}
							</Text>
							<FlatList
								style={styles.favoritesList}
								data={category}
								renderItem={({ item }) => (
									<FavoritesListItem
										item={item}
										addItemToBasket={addItemToBasket}
										deleteItemFromBasket={deleteItemFromBasket}
										getFavorites={getFavorites}
										deleteFavorite={deleteFavorite}
										filtered={filtered(item)}
									/>
								)}
								keyExtractor={item => item}
							/>
						</>
					)}
				</ScrollView>
			</View>
		</SafeAreaView>
	)
}

export default FavouritesHomeView
