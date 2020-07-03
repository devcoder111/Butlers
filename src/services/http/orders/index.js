import http from '..'

export const createNewOrder = data => http.post('/addOrder', data).then(res => res.data)

export const getOrders = () => http.post('/getOrders').then(res => res.data)

export const payByNewCard = data => http.post('/PayOrderByCard', data).then(res => res.data)

export const payBySavedCard = data => http.post('/PayOrderBySavedCard', data).then(res => res.data)

export const updateOrders = data => http.post(`/updateOrder`, data).then(res => res.data)

export const getOrderById = data => http.post(`/getOrderById/${data}`).then(res => res.data)

export const notifyStore = data => http.post(`/notifyStore/${data}`).then(res => res.data)
