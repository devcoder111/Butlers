// const mockCard = {
// 	id: 2,
// 	title: 'Mastercard',
// 	number: '123454343353',
// 	navigateTo: 'DebitCard',
// }

const initialState = {
	cards: [],
	getCardsLoading: false,
	getCardsError: '',
	card: [],
	getCardLoading: false,
	getCardError: '',
	addCardLoading: false,
	addCardError: '',
	updateCardLoading: false,
	updateCardError: '',
	deleteCardLoading: false,
	deleteCardError: '',
	deleteCardResponse: '',
	faq: [],
	getFaqLoading: false,
	getFaqError: '',
	referLink: '',
	getReferLinkLoading: false,
	getReferLinkError: '',
	appSettings: {},
	getAppSettingsLoading: false,
	getAppSettingsError: '',
	bonuses: [],
	getBonusesLoading: false,
	getBonusesError: '',
	customerData: [],
	getCustomerDataLoading: false,
	getCustomerDataError: '',
	saveCardLoading: false,
	saveCardError: false,
	saveCardResponse: '',
	setAsPrimaryResponse: '',
	setAsPrimaryError: '',
	setAsPrimaryLoading: false,
	updateAvatarLoading: false,
	updateAvatarError: '',
	updateAvatarResponse: '',
	updateUserDataLoading: false,
	updateUserDataResponse: '',
	updateUserDataError: '',
	clientMessage: '',
	subjectChat: '',
	subjectChatLoading: false,
	subjectChatError: '',
	orderId: 0,
	orderIdLoading: false,
	orderIdError: '',
	messageType: '',
	messageFile: '',
	customerGroup: '',
	getCustomerGroupLoading: false,
	getCustomerGroupError: '',
	sendGdprResponse: '',
	sendGdprLoading: false,
	sendGdprError: '',
	deleteGdprResponse: '',
	deleteGdprLoading: false,
	deleteGdprError: '',
	sendGdprCodeResponse: '',
	sendGdprcodeLoading: false,
	sendGdprcodeError: '',
	messages: [],
	getMessagesLoading: false,
	getMessagesError: '',
	subjects: [],
	getSubjectsLoading: false,
	getSubjectsError: '',
	sendMessageLoading: false,
	sendMessageError: '',
	updateMessageLoading: false,
	updateMessageError: '',
	deleteMessageLoading: false,
	deleteMessageError: '',
	getNotificationOptionsLoading: false,
	getNotificationOptionsError: false,
	getNotificationOptionsResponse: false,
	setNotificationOptionsLoading: false,
	setNotificationOptionsError: false,
	setNotificationOptionsResponse: false,
}

export const getCardsRequest = state => ({
	...state,
	getCardsLoading: true,
})

export const getCardsSuccess = (state, { payload }) => ({
	...state,
	cards: payload,
	getCardsLoading: false,
})

export const getCardsFailure = (state, { payload }) => ({
	...state,
	getCardsError: payload,
	getCardsLoading: false,
})

export const getCardRequest = state => ({
	...state,
	getCardLoading: true,
})

export const getCardSuccess = (state, { payload }) => ({
	...state,
	card: payload,
	getCardLoading: false,
})

export const getCardFailure = (state, { payload }) => ({
	...state,
	getCardError: payload,
	getCardLoading: false,
})

export const addCardRequest = state => ({
	...state,
	addCardLoading: true,
})

export const addCardSuccess = state => ({
	...state,
	addCardLoading: false,
})

export const addCardFailure = (state, { payload }) => ({
	...state,
	addCardError: payload,
	addCardLoading: false,
})

export const updateCardRequest = state => ({
	...state,
	updateCardLoading: true,
})

export const updateCardSuccess = state => ({
	...state,
	updateCardLoading: false,
})

export const updateCardFailure = (state, { payload }) => ({
	...state,
	updateCardError: payload,
	updateCardLoading: false,
})

export const deleteCardRequest = state => ({
	...state,
	deleteCardLoading: true,
})

export const deleteCardSuccess = (state, { payload }) => ({
	...state,
	deleteCardResponse: payload,
	deleteCardLoading: false,
})

export const deleteCardFailure = (state, { payload }) => ({
	...state,
	deleteCardError: payload,
	deleteCardLoading: false,
})

export const getFaqRequest = state => ({
	...state,
	getFaqLoading: true,
})

export const getFaqSuccess = (state, { payload }) => ({
	...state,
	faq: payload,
	getFaqLoading: false,
})

export const getFaqFailure = (state, { payload }) => ({
	...state,
	getFaqError: payload,
	getFaqLoading: false,
})

export const getReferLinkRequest = state => ({
	...state,
	getReferLinkLoading: true,
})

export const getReferLinkSuccess = (state, { payload }) => ({
	...state,
	referLink: payload,
	getReferLinkLoading: false,
})

export const getReferLinkFailure = (state, { payload }) => ({
	...state,
	getReferLinkError: payload,
	getReferLinkLoading: false,
})

export const getAppSettingsRequest = state => ({
	...state,
	getAppSettingsLoading: true,
})

export const getAppSettingsSuccess = (state, { payload }) => ({
	...state,
	appSettings: payload,
	getAppSettingsLoading: false,
})

export const getAppSettingsFailure = (state, { payload }) => ({
	...state,
	getAppSettingsError: payload,
	getAppSettingsLoading: false,
})

export const getBonusesRequest = state => ({
	...state,
	getBonusesLoading: true,
})

export const getBonusesSuccess = (state, { payload }) => ({
	...state,
	bonuses: payload,
	getBonusesLoading: false,
})

export const getBonusesFailure = (state, { payload }) => ({
	...state,
	getBonusesError: payload,
	getBonusesLoading: false,
})

export const getCustomerDataRequest = state => ({
	...state,
	getCustomerDataLoading: true,
})

export const getCustomerDataSuccess = (state, { payload }) => ({
	...state,
	customerData: payload,
	getCustomerDataLoading: false,
})

export const getCustomerDataFailure = (state, { payload }) => ({
	...state,
	getCustomerDataError: payload,
	getCustomerDataLoading: false,
})

export const saveCardRequest = state => ({
	...state,
	saveCardLoading: true,
})

export const saveCardSuccess = (state, { payload }) => ({
	...state,
	saveCardResponse: payload,
	saveCardLoading: false,
})

export const saveCardFailure = (state, { payload }) => ({
	...state,
	saveCardError: payload,
	saveCardLoading: false,
})

export const setPrimaryCardRequest = state => ({
	...state,
	setAsPrimaryLoading: true,
})

export const setPrimaryCardSuccess = (state, { payload }) => ({
	...state,
	setAsPrimaryResponse: payload,
	setAsPrimaryLoading: false,
})

export const setPrimaryCardFailure = (state, { payload }) => ({
	...state,
	setAsPrimaryError: payload,
	setAsPrimaryLoading: false,
})

export const cleanPrimaryRequest = state => ({
	...state,
	setAsPrimaryResponse: '',
})

export const cleanCardsRequest = state => ({
	...state,
	cards: [],
})

export const updateAvatarRequest = state => ({
	...state,
	updateAvatarLoading: true,
})

export const updateAvatarSuccess = (state, { payload }) => ({
	...state,
	updateAvatarResponse: payload,
	updateAvatarLoading: false,
})

export const updateAvatarFailure = (state, { payload }) => ({
	...state,
	updateAvatarError: payload,
	updateAvatarLoading: false,
})

export const updateUserDataRequest = state => ({
	...state,
	updateUserDataLoading: true,
})

export const updateUserDataSuccess = (state, { payload }) => ({
	...state,
	updateUserDataResponse: payload,
	updateUserDataLoading: false,
})

export const updateUserDataFailure = (state, { payload }) => ({
	...state,
	updateUserDataError: payload,
	updateUserDataLoading: false,
})

export const clientMessageRequest = state => ({
	...state,
	clientMessageLoading: true,
})

export const clientMessageSuccess = (state, { payload }) => ({
	...state,
	clientMessage: payload,
	messageType: 'client',
	clientMessageLoading: false,
})

export const clientMessageFailure = (state, { payload }) => ({
	...state,
	clientMessageError: payload,
	clientMessageLoading: false,
})

export const subjectChatRequest = state => ({
	...state,
	subjectChatLoading: true,
})

export const subjectChatSuccess = (state, { payload }) => ({
	...state,
	subjectChat: payload,
	subjectChatLoading: false,
})

export const subjectChatFailure = (state, { payload }) => ({
	...state,
	subjectChatError: payload,
	subjectChatLoading: false,
})

export const orderIdRequest = state => ({
	...state,
	orderIdLoading: true,
})

export const orderIdSuccess = (state, { payload }) => ({
	...state,
	orderId: payload,
	orderIdLoading: false,
})

export const orderIdFailure = (state, { payload }) => ({
	...state,
	orderIdError: payload,
	orderIdLoading: false,
})

export const getCustomerGroupRequest = state => ({
	...state,
	getCustomerGroupLoading: true,
})

export const getCustomerGroupSuccess = (state, { payload }) => ({
	...state,
	getCustomerGroupResponse: payload,
	getCustomerGroupLoading: false,
})

export const getCustomerGroupFailure = (state, { payload }) => ({
	...state,
	getCustomerGroupError: payload,
	getCustomerGroupLoading: false,
})

export const sendGdprRequest = state => ({
	...state,
	sendGdprLoading: true,
})

export const sendGdprSuccess = (state, { payload }) => ({
	...state,
	sendGdprResponse: payload,
	sendGdprLoading: false,
})

export const sendGdprFailure = (state, { payload }) => ({
	...state,
	sendGdprError: payload,
	sendGdprLoading: false,
})

export const deleteGdprRequest = state => ({
	...state,
	deleteGdprLoading: true,
})

export const deleteGdprSuccess = (state, { payload }) => ({
	...state,
	deleteGdprResponse: payload,
	deleteGdprLoading: false,
})

export const deleteGdprFailure = (state, { payload }) => ({
	...state,
	deleteGdprError: payload,
	deleteGdprLoading: false,
})

export const sendGdprCodeRequest = state => ({
	...state,
	sendGdprCodeLoading: true,
})

export const sendGdprCodeSuccess = (state, { payload }) => ({
	...state,
	sendGdprCodeResponse: payload,
	sendGdprCodeLoading: false,
})

export const sendGdprCodeFailure = (state, { payload }) => ({
	...state,
	sendGdprCodeError: payload,
	sendGdprCodeLoading: false,
})

export const getMessagesRequest = state => ({
	...state,
	getMessagesLoading: true,
})

export const getMessagesSuccess = (state, { payload }) => ({
	...state,
	messages: payload,
	getMessagesLoading: false,
})

export const getMessagesFailure = (state, { payload }) => ({
	...state,
	getMessagesError: payload,
	getMessagesLoading: false,
})

export const getSubjectsRequest = state => ({
	...state,
	getSubjectsLoading: true,
})

export const getSubjectsSuccess = (state, { payload }) => ({
	...state,
	subjects: payload,
	getSubjectsLoading: false,
})

export const getSubjectsFailure = (state, { payload }) => ({
	...state,
	getSubjectsError: payload,
	getSubjectsLoading: false,
})

export const sendMessageRequest = state => ({
	...state,
	sendMessageLoading: true,
})

export const sendMessageSuccess = (state, { payload }) => ({
	...state,
	clientMessage: payload,
	sendMessageLoading: false,
})

export const sendMessageFailure = (state, { payload }) => ({
	...state,
	sendMessageError: payload,
	sendMessageLoading: false,
})

export const updateMessageRequest = state => ({
	...state,
	updateMessageLoading: true,
})

export const updateMessageSuccess = state => ({
	...state,
	updateMessageLoading: false,
})

export const updateMessageFailure = (state, { payload }) => ({
	...state,
	updateMessageError: payload,
	updateMessageLoading: false,
})

export const deleteMessageRequest = state => ({
	...state,
	deleteMessageLoading: true,
})

export const deleteMessageSuccess = state => ({
	...state,
	deleteMessageLoading: false,
})

export const deleteMessageFailure = (state, { payload }) => ({
	...state,
	deleteMessageError: payload,
	deleteMessageLoading: false,
})

export const getNotificationOptionsRequest = state => ({
	...state,
	getNotificationOptionsLoading: true,
})

export const getNotificationOptionsSuccess = (state, { payload }) => ({
	...state,
	getNotificationOptionsLoading: false,
	getNotificationOptionsResponse: payload,
})

export const getNotificationOptionsFailure = (state, { payload }) => ({
	...state,
	getNotificationOptionsError: payload,
	getNotificationOptionsLoading: false,
})

export const setNotificationOptionsRequest = state => ({
	...state,
	setNotificationOptionsLoading: true,
})

export const setNotificationOptionsSuccess = (state, { payload }) => ({
	...state,
	setNotificationOptionsLoading: false,
	setNotificationOptionsResponse: payload,
})

export const setNotificationOptionsFailure = (state, { payload }) => ({
	...state,
	setNotificationOptionsError: payload,
	setNotificationOptionsLoading: false,
})

export default initialState
