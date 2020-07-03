import http from '..'

export const getCustomerMessages = () => http.post('/getCustomerMessages').then(res => res.data)

export const getMessageById = data => http.post(`/getMessageById/${data}`).then(res => res.data)

export const getMessageSubjects = () => http.post(`/getMessageSubjects`).then(res => res.data)

export const getMessagesBySubject = data =>
	http.post(`/getMessagesBySubject`, data).then(res => res.data)

export const sendMessage = data => http.post(`/sendMessage`, data).then(res => res.data)
