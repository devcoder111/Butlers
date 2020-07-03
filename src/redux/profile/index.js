import { handleActions, createActions } from 'redux-actions'

import initialState, * as handlers from './handlers'

export const actions = createActions({
	GET_CARDS_REQUEST: undefined,
	GET_CARDS_SUCCESS: undefined,
	GET_CARDS_FAILURE: undefined,

	GET_CARD_REQUEST: undefined,
	GET_CARD_SUCCESS: undefined,
	GET_CARD_FAILURE: undefined,

	ADD_CARD_REQUEST: undefined,
	ADD_CARD_SUCCESS: undefined,
	ADD_CARD_FAILURE: undefined,

	UPDATE_CARD_REQUEST: undefined,
	UPDATE_CARD_SUCCESS: undefined,
	UPDATE_CARD_FAILURE: undefined,

	DELETE_CARD_REQUEST: undefined,
	DELETE_CARD_SUCCESS: undefined,
	DELETE_CARD_FAILURE: undefined,

	GET_FAQ_REQUEST: undefined,
	GET_FAQ_SUCCESS: undefined,
	GET_FAQ_FAILURE: undefined,

	GET_REFER_LINK_REQUEST: undefined,
	GET_REFER_LINK_SUCCESS: undefined,
	GET_REFER_LINK_FAILURE: undefined,

	GET_APP_SETTINGS_REQUEST: undefined,
	GET_APP_SETTINGS_SUCCESS: undefined,
	GET_APP_SETTINGS_FAILURE: undefined,

	GET_BONUSES_REQUEST: undefined,
	GET_BONUSES_SUCCESS: undefined,
	GET_BONUSES_FAILURE: undefined,

	GET_CUSTOMER_DATA_REQUEST: undefined,
	GET_CUSTOMER_DATA_SUCCESS: undefined,
	GET_CUSTOMER_DATA_FAILURE: undefined,

	SAVE_CARD_REQUEST: undefined,
	SAVE_CARD_SUCCESS: undefined,
	SAVE_CARD_FAILURE: undefined,

	SET_PRIMARY_CARD_REQUEST: undefined,
	SET_PRIMARY_CARD_SUCCESS: undefined,
	SET_PRIMARY_CARD_FAILURE: undefined,

	CLEAN_PRIMARY_REQUEST: undefined,

	CLEAN_CARDS_REQUEST: undefined,

	UPDATE_AVATAR_REQUEST: undefined,
	UPDATE_AVATAR_SUCCESS: undefined,
	UPDATE_AVATAR_FAILURE: undefined,

	UPDATE_USER_DATA_REQUEST: undefined,
	UPDATE_USER_DATA_SUCCESS: undefined,
	UPDATE_USER_DATA_FAILURE: undefined,

	CLIENT_MESSAGE_REQUEST: undefined,
	CLIENT_MESSAGE_SUCCESS: undefined,
	CLIENT_MESSAGE_FAILURE: undefined,

	SUBJECT_CHAT_REQUEST: undefined,
	SUBJECT_CHAT_SUCCESS: undefined,
	SUBJECT_CHAT_FAILURE: undefined,

	ORDER_ID_REQUEST: undefined,
	ORDER_ID_SUCCESS: undefined,
	ORDER_ID_FAILURE: undefined,

	GET_CUSTOMER_GROUP_REQUEST: undefined,
	GET_CUSTOMER_GROUP_SUCCESS: undefined,
	GET_CUSTOMER_GROUP_FAILURE: undefined,

	SEND_GDPR_REQUEST: undefined,
	SEND_GDPR_SUCCESS: undefined,
	SEND_GDPR_FAILURE: undefined,

	DELETE_GDPR_REQUEST: undefined,
	DELETE_GDPR_SUCCESS: undefined,
	DELETE_GDPR_FAILURE: undefined,

	SEND_GDPR_CODE_REQUEST: undefined,
	SEND_GDPR_CODE_SUCCESS: undefined,
	SEND_GDPR_CODE_FAILURE: undefined,

	GET_MESSAGES_REQUEST: undefined,
	GET_MESSAGES_SUCCESS: undefined,
	GET_MESSAGES_FAILURE: undefined,

	GET_SUBJECTS_REQUEST: undefined,
	GET_SUBJECTS_SUCCESS: undefined,
	GET_SUBJECTS_FAILURE: undefined,

	SEND_MESSAGE_REQUEST: undefined,
	SEND_MESSAGE_SUCCESS: undefined,
	SEND_MESSAGE_FAILURE: undefined,

	UPDATE_MESSAGE_REQUEST: undefined,
	UPDATE_MESSAGE_SUCCESS: undefined,
	UPDATE_MESSAGE_FAILURE: undefined,

	DELETE_MESSAGE_REQUEST: undefined,
	DELETE_MESSAGE_SUCCESS: undefined,
	DELETE_MESSAGE_FAILURE: undefined,

	GET_NOTIFICATION_OPTIONS_REQUEST: undefined,
	GET_NOTIFICATION_OPTIONS_SUCCESS: undefined,
	GET_NOTIFICATION_OPTIONS_FAILURE: undefined,

	SET_NOTIFICATION_OPTIONS_REQUEST: undefined,
	SET_NOTIFICATION_OPTIONS_SUCCESS: undefined,
	SET_NOTIFICATION_OPTIONS_FAILURE: undefined,
})

const reducer = handleActions(
	new Map([
		[actions.getCardsRequest, handlers.getCardsRequest],
		[actions.getCardsSuccess, handlers.getCardsSuccess],
		[actions.getCardsFailure, handlers.getCardsFailure],

		[actions.getCardRequest, handlers.getCardRequest],
		[actions.getCardSuccess, handlers.getCardSuccess],
		[actions.getCardFailure, handlers.getCardFailure],

		[actions.getCardRequest, handlers.addCardRequest],
		[actions.addCardSuccess, handlers.addCardSuccess],
		[actions.addCardFailure, handlers.addCardFailure],

		[actions.updateCardRequest, handlers.updateCardRequest],
		[actions.updateCardSuccess, handlers.updateCardSuccess],
		[actions.updateCardFailure, handlers.updateCardFailure],

		[actions.deleteCardRequest, handlers.deleteCardRequest],
		[actions.deleteCardSuccess, handlers.deleteCardSuccess],
		[actions.deleteCardFailure, handlers.deleteCardFailure],

		[actions.getFaqRequest, handlers.getFaqRequest],
		[actions.getFaqSuccess, handlers.getFaqSuccess],
		[actions.getFaqFailure, handlers.getFaqFailure],

		[actions.getReferLinkRequest, handlers.getReferLinkRequest],
		[actions.getReferLinkSuccess, handlers.getReferLinkSuccess],
		[actions.getReferLinkFailure, handlers.getReferLinkFailure],

		[actions.getAppSettingsRequest, handlers.getAppSettingsRequest],
		[actions.getAppSettingsSuccess, handlers.getAppSettingsSuccess],
		[actions.getAppSettingsFailure, handlers.getAppSettingsFailure],

		[actions.getBonusesRequest, handlers.getBonusesRequest],
		[actions.getBonusesSuccess, handlers.getBonusesSuccess],
		[actions.getBonusesFailure, handlers.getBonusesFailure],

		[actions.getCustomerDataRequest, handlers.getCustomerDataRequest],
		[actions.getCustomerDataSuccess, handlers.getCustomerDataSuccess],
		[actions.getCustomerDataFailure, handlers.getCustomerDataFailure],

		[actions.saveCardRequest, handlers.saveCardRequest],
		[actions.saveCardSuccess, handlers.saveCardSuccess],
		[actions.saveCardFailure, handlers.saveCardFailure],

		[actions.setPrimaryCardRequest, handlers.setPrimaryCardRequest],
		[actions.setPrimaryCardSuccess, handlers.setPrimaryCardSuccess],
		[actions.setPrimaryCardFailure, handlers.setPrimaryCardFailure],

		[actions.cleanPrimaryRequest, handlers.cleanPrimaryRequest],

		[actions.cleanCardsRequest, handlers.cleanCardsRequest],

		[actions.updateAvatarRequest, handlers.updateAvatarRequest],
		[actions.updateAvatarSuccess, handlers.updateAvatarSuccess],
		[actions.updateAvatarFailure, handlers.updateAvatarFailure],

		[actions.updateUserDataRequest, handlers.updateUserDataRequest],
		[actions.updateUserDataSuccess, handlers.updateUserDataSuccess],
		[actions.updateUserDataFailure, handlers.updateUserDataFailure],

		[actions.clientMessageRequest, handlers.clientMessageRequest],
		[actions.clientMessageSuccess, handlers.clientMessageSuccess],
		[actions.clientMessageFailure, handlers.clientMessageFailure],

		[actions.subjectChatRequest, handlers.subjectChatRequest],
		[actions.subjectChatSuccess, handlers.subjectChatSuccess],
		[actions.subjectChatFailure, handlers.subjectChatFailure],

		[actions.orderIdRequest, handlers.orderIdRequest],
		[actions.orderIdSuccess, handlers.orderIdSuccess],
		[actions.orderIdFailure, handlers.orderIdFailure],

		[actions.getCustomerGroupRequest, handlers.getCustomerGroupRequest],
		[actions.getCustomerGroupSuccess, handlers.getCustomerGroupSuccess],
		[actions.getCustomerGroupFailure, handlers.getCustomerGroupFailure],

		[actions.sendGdprRequest, handlers.sendGdprRequest],
		[actions.sendGdprSuccess, handlers.sendGdprSuccess],
		[actions.sendGdprFailure, handlers.sendGdprFailure],

		[actions.deleteGdprRequest, handlers.deleteGdprRequest],
		[actions.deleteGdprSuccess, handlers.deleteGdprSuccess],
		[actions.deleteGdprFailure, handlers.deleteGdprFailure],

		[actions.sendGdprCodeRequest, handlers.sendGdprCodeRequest],
		[actions.sendGdprCodeSuccess, handlers.sendGdprCodeSuccess],
		[actions.sendGdprCodeFailure, handlers.sendGdprCodeFailure],

		[actions.getMessagesRequest, handlers.getMessagesRequest],
		[actions.getMessagesSuccess, handlers.getMessagesSuccess],
		[actions.getMessagesFailure, handlers.getMessagesFailure],

		[actions.getSubjectsRequest, handlers.getSubjectsRequest],
		[actions.getSubjectsSuccess, handlers.getSubjectsSuccess],
		[actions.getSubjectsFailure, handlers.getSubjectsFailure],

		[actions.sendMessageRequest, handlers.sendMessageRequest],
		[actions.sendMessageSuccess, handlers.sendMessageSuccess],
		[actions.sendMessageFailure, handlers.sendMessageFailure],

		[actions.updateMessageRequest, handlers.updateMessageRequest],
		[actions.updateMessageSuccess, handlers.updateMessageSuccess],
		[actions.updateMessageFailure, handlers.updateMessageFailure],

		[actions.deleteMessageRequest, handlers.deleteMessageRequest],
		[actions.deleteMessageSuccess, handlers.deleteMessageSuccess],
		[actions.deleteMessageFailure, handlers.deleteMessageFailure],

		[actions.getNotificationOptionsRequest, handlers.getNotificationOptionsRequest],
		[actions.getNotificationOptionsSuccess, handlers.getNotificationOptionsSuccess],
		[actions.getNotificationOptionsFailure, handlers.getNotificationOptionsFailure],

		[actions.setNotificationOptionsRequest, handlers.setNotificationOptionsRequest],
		[actions.setNotificationOptionsSuccess, handlers.setNotificationOptionsSuccess],
		[actions.setNotificationOptionsFailure, handlers.setNotificationOptionsFailure],
	]),
	initialState,
)

export default reducer
