import http from '..'

export const getSubscription = () => http.post('/getSubscriptions').then(res => res.data)

export const getCustomerSubscription = () =>
	http.post('/getCustomerSubscriptions').then(res => res.data)

export const getSubscriptionById = id =>
	http.post(`/getSubscriptionById/${id}`).then(res => res.data)

export const addSubscriptions = data =>
	http.post('/CreateSubscriptionBySavedCard', data).then(res => res.data)

export const deleteSubscriptions = data =>
	http.post('/DeleteSubscription', data).then(res => res.data)
