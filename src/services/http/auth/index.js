import http from '..'

export const smsVerification = data => http.post('/sendVerifySMS', data).then(res => res.data)

export const authenticate = data => http.post('/login', data).then(res => res.data)

export const sendEmail = data => http.post('/restorePassword', data).then(res => res.data)

export const changePassword = data => http.post('/resetPassword', data).then(res => res.data)

export const register = data => http.post('/register', data).then(res => res.data)

export const refreshToken = () => http.post('/refresh').then(res => res.data.access_token)

export const sendVerifyEmail = data => http.post(`/SendVerifyEmail/${data}`).then(res => res.data)

export const getCustomerInfo = () => http.post('/getCustomerData')

export const checkSmsVerification = data => http.post(`/checkSmsCode/${data}`).then(res => res.data)

export const checkEmailUsed = data => http.post(`/checkEmailExists`, data).then(res => res.data)

export const checkPostCode = data => http.post(`/checkPostCodeInRange`, data).then(res => res.data)

export const checkAgreementNumberValid = data =>
	http.post(`/checkAgreementNumberValid`, data).then(res => res.data)
