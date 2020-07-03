const initialState = {
	customerMessages: [],
	getCustomerMessagesLoading: false,
	getCustomerMeassagesError: false,
	messageById: {},
	getMessageByIdLoading: false,
	getMessageByIdError: false,
	chatSubjects: [],
	getChatSubjectsLoading: false,
	getChatSubjectsError: false,
	messagesBySubject: [],
	getMessagesBySubjectLoading: false,
	getMessagesBySubjectError: false,
	sendMessageResponse: '',
	sendMessageLoading: false,
	sendMessageError: false,
}

export const getCustomerMessagesRequest = state => ({
	...state,
	getCustomerMessagesLoading: true,
	getCustomerMessagesError: initialState.getCustomerMeassagesError,
})

export const getCustomerMessagesSuccess = (state, { payload }) => ({
	...state,
	customerMessages: payload,
	getCustomerMessagesError: false,
	getCustomerMessagesLoading: false,
})

export const getCustomerMessagesFailure = (state, { payload }) => ({
	...state,
	getCustomerMessagesError: payload,
	getCustomerMessagesLoading: false,
})

export const getMessageByIdRequest = state => ({
	...state,
	getMessageByIdLoading: true,
	getMessageByIdError: initialState.getMessageByIdError,
})

export const getMessageByIdSuccess = (state, { payload }) => ({
	...state,
	messageById: payload,
	getMessageByIdError: false,
	getMessageByIdLoading: false,
})

export const getMessageByIdFailure = (state, { payload }) => ({
	...state,
	getMessageByIdError: payload,
	getMessageByIdLoading: false,
})

export const getChatSubjectsRequest = state => ({
	...state,
	getChatSubjectsLoading: true,
	getChatSubjectsError: initialState.getChatSubjectsError,
})

export const getChatSubjectsSuccess = (state, { payload }) => ({
	...state,
	chatSubjects: payload,
	getChatSubjectsError: false,
	getChatSubjectsLoading: false,
})

export const getChatSubjectsFailure = (state, { payload }) => ({
	...state,
	getChatSubjectsError: payload,
	getChatSubjectsLoading: false,
})

export const getMessagesBySubjectRequest = state => ({
	...state,
	getMessagesBySubjectLoading: true,
	getMessagesBySubjectError: initialState.getMessagesBySubjectError,
})

export const getMessagesBySubjectSuccess = (state, { payload }) => ({
	...state,
	messagesBySubject: payload,
	getMessagesBySubjectError: false,
	getMessagesBySubjectLoading: false,
})

export const getMessagesBySubjectFailure = (state, { payload }) => ({
	...state,
	getMessagesBySubjectError: payload,
	getMessagesBySubjectLoading: false,
})

export const sendMessageRequest = state => ({
	...state,
	sendMessageLoading: true,
	sendMessageError: initialState.sendMessageError,
})

export const sendMessageSuccess = (state, { payload }) => ({
	...state,
	sendMessageResponse: payload,
	sendMessageError: false,
	sendMessageLoading: false,
})

export const sendMessageFailure = (state, { payload }) => ({
	...state,
	sendMessageError: payload,
	sendMessageLoading: false,
})

export default initialState
