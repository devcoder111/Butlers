import http from '..'

export const getTypes = () => http.post('/getServiceTypes').then(res => res.data)

export const getServicesByTypeId = data =>
	http.post(`/getServiceTypesByMainServiceCategoryId/${data}`).then(res => res.data)

export const getServiceById = data =>
	http.post(`/getServicesByTypeId/${data}`).then(res => res.data)

export const getAllTags = () => http.post('/getMainServiceCategories').then(res => res.data)

export const getServiceTypesWithService = () =>
	http.post('/getServiceTypesWithServices').then(res => res.data)

export const searchServicesByTag = data =>
	http
		.post(`/getMainServiceCategoriesWithWithServiceTypesAndServicesById/${data}`)
		.then(res => res.data)
