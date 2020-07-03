import { createSelector } from 'reselect'

import { getBasketArray } from './basket'

export const getFavouritesArray = state => {
	return state.favorites.favorites
}

export const getProductArray = state => {
	return state.basket.product
}

export const getFavouritesWithCount = createSelector(
	[getFavouritesArray, getBasketArray],
	(favourites, basket) => {
		return (
			favourites &&
			favourites.map(a => {
				const newElement =
					basket &&
					basket.find(b => {
						return a.id === b.id
					})

				return newElement ? { ...a, count: newElement.count } : { ...a, count: 0 }
			})
		)
	},
)
