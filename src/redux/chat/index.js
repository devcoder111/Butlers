import { handleActions, createActions } from 'redux-actions'

import initialState, * as handlers from './handlers'

export const actions = createActions({
	GET_CUSTOMER_MESSAGES_REQUEST: undefined,
	GET_CUSTOMER_MESSAGES_SUCCESS: undefined,
	GET_CUSTOMER_MESSAGES_FAILURE: undefined,

	GET_MESSAGE_BY_ID_REQUEST: undefined,
	GET_MESSAGE_BY_ID_SUCCESS: undefined,
	GET_MESSAGE_BY_ID_FAILURE: undefined,

	GET_CHAT_SUBJECTS_REQUEST: undefined,
	GET_CHAT_SUBJECTS_SUCCESS: undefined,
	GET_CHAT_SUBJECTS_FAILURE: undefined,

	GET_MESSAGES_BY_SUBJECT_REQUEST: undefined,
	GET_MESSAGES_BY_SUBJECT_SUCCESS: undefined,
	GET_MESSAGES_BY_SUBJECT_FAILURE: undefined,

	SEND_MESSAGE_REQUEST: undefined,
	SEND_MESSAGE_SUCCESS: undefined,
	SEND_MESSAGE_FAILURE: undefined,
})

const reducer = handleActions(
	new Map([
		[actions.getCustomerMessagesRequest, handlers.getCustomerMessagesRequest],
		[actions.getCustomerMessagesSuccess, handlers.getCustomerMessagesSuccess],
		[actions.getCustomerMessagesFailure, handlers.getCustomerMessagesFailure],

		[actions.getMessageByIdRequest, handlers.getMessageByIdRequest],
		[actions.getMessageByIdSuccess, handlers.getMessageByIdSuccess],
		[actions.getMessageByIdFailure, handlers.getMessageByIdFailure],

		[actions.getChatSubjectsRequest, handlers.getChatSubjectsRequest],
		[actions.getChatSubjectsSuccess, handlers.getChatSubjectsSuccess],
		[actions.getChatSubjectsFailure, handlers.getChatSubjectsFailure],

		[actions.getMessagesBySubjectRequest, handlers.getMessagesBySubjectRequest],
		[actions.getMessagesBySubjectSuccess, handlers.getMessagesBySubjectSuccess],
		[actions.getMessagesBySubjectFailure, handlers.getMessagesBySubjectFailure],

		[actions.sendMessageRequest, handlers.sendMessageRequest],
		[actions.sendMessageSuccess, handlers.sendMessageSuccess],
		[actions.sendMessageFailure, handlers.sendMessageFailure],
	]),
	initialState,
)

export default reducer
