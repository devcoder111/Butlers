import http from '..'

export const applyPromoCodes = data => http.post('/applyPromoCode', data).then(res => res.data)

export const getPromocodes = data => http.post('/getPromoCodes', data).then(res => res.data)
