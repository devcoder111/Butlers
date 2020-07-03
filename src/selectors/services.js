import { createSelector } from 'reselect'

import { getBasketArray } from './basket'

export const getServicesArray = state => {
	return state.services.services
}

export const getService = state => {
	return state.services.service
}

export const searchText = state => {
	return state.services.searchText
}

export const filterServices = createSelector([getService, searchText], (service, text) => {
	return (
		service &&
		service.filter(({ service_name }) => service_name.toLowerCase().includes(text.toLowerCase()))
	)
})

export const getServiceWithCount = createSelector(
	[getService, getBasketArray],
	(service, basket) => {
		return (
			service &&
			service.map(a => {
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
