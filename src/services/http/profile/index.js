import http from '..'

export const getAllCards = data => http.post('/getCustomerCards', data).then(res => res.data)

export const getCardById = data => http.post('/getCardById', data).then(res => res.data)

export const createCard = data => http.post('/addCard', data).then(res => res.data)

export const editCard = data => http.post('/updateCard', data).then(res => res.data)

export const removeCard = data => http.post('/DeleteCard', data).then(res => res.data)

export const getAllFaq = () => http.post('/getFaq').then(res => res.data)

export const generateLink = () => http.post('/generateReferralLink').then(res => res.data)

export const getSettings = () => http.post('/getAppMenageSettings').then(res => res.data)

export const getBonuses = () => http.post('/getCustomerBonuses').then(res => res.data)

export const getCustomer = () => http.post('/getCustomerData').then(res => res.data)

export const updateCustomer = data => http.post('/updateCustomer', data).then(res => res.data)

export const saveCard = data => http.post('/SaveCard', data).then(res => res.data)

export const setPrimaryCard = data => http.post('/setCardAsDefault', data).then(res => res.data)

export const updateAvatar = data => http.post('/updateCustomer', data).then(res => res.data)

export const getCustomerGroup = () => http.post('/getCustomerGroupOfCustomer').then(res => res.data)

export const sendGdprOnMail = () => http.post('/getAllCustomerInformation').then(res => res.data)

export const deletePeronalInfo = data =>
	http.post(`/deleteAllCustomerInformation/${data}`).then(res => res.data)

export const sendGdprCodeOnMail = () => http.post('/sendConfirmCode').then(res => res.data)
export const getMessage = data => http.post('/getCustomerMessages', data).then(res => res.data)

export const getSubject = data => http.post('/getMessageSubjects', data).then(res => res.data)

export const sendMessage = data => http.post('/sendMessage', data).then(res => res.data)

export const updateMessage = data => http.post('/updateMessage', data).then(res => res.data)

export const deleteMessage = data =>
	http.post(`/deleteMessage/${data.id}`, data).then(res => res.data)

export const getCustomerSettings = () => http.post('/getCustomerSettings').then(res => res.data)

export const setCustomerSettings = data =>
	http.post('/setCustomerSettings', data).then(res => res.data)
