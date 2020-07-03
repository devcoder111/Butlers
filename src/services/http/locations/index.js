import http from '..'

export const getLocations = () => http.post('/getLocations').then(res => res.data)

export const getLocationById = data => http.post(`/getServiceById/${data}`).then(res => res.data)

export const addCustomerLocation = data =>
	http.post(`/addCustomerLocation`, data).then(res => res.data)

export const getCustomerLocation = () => http.post(`/getCustomerLocations`).then(res => res.data)

export const deleteCustomerLocation = data =>
	http.post(`/deleteCustomerLocation/${data}`).then(res => res.data)

export const updateCustomerLocation = data =>
	http.post(`/updateCustomerLocation`, data).then(res => res.data)
