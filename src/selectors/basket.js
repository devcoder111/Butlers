import { createSelector } from 'reselect'

export const getBasketArray = state => {
	return state.basket.basket
}

export const getProductArray = state => {
	return state.basket.product
}

export const getBasketProductItemsCount = createSelector([getBasketArray], basket => {
	return basket.reduce((sum, item) => {
		return sum + item.count
	}, 0)
})

export const getTotalAmount = createSelector([getBasketArray], basket => {
	return basket.reduce((sum, item) => {
		return sum + item.count * item.price
	}, 0)
})

export const getProductsWithCount = createSelector(
	[getBasketArray, getProductArray],
	(basket, product) => {
		return (
			product &&
			product.map(a => {
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
