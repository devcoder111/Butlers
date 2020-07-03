import { handleActions, createActions } from 'redux-actions'

import initialState, * as handlers from './handlers'

export const actions = createActions({
	GET_ORDERS_REQUEST: undefined,
	GET_ORDERS_SUCCESS: undefined,
	GET_ORDERS_FAILURE: undefined,

	ADD_INFO_TO_ORDER_REQUEST: undefined,
	ADD_INFO_TO_ORDER_SUCCESS: undefined,
	ADD_INFO_TO_ORDER_FAILURE: undefined,

	CREATE_ORDER_REQUEST: undefined,
	CREATE_ORDER_SUCCESS: undefined,
	CREATE_ORDER_FAILURE: undefined,

	PAYMENT_WITH_NEW_CARD_REQUEST: undefined,
	PAYMENT_WITH_NEW_CARD_SUCCESS: undefined,
	PAYMENT_WITH_NEW_CARD_FAILURE: undefined,

	PAYMENT_WITH_SAVED_CARD_REQUEST: undefined,
	PAYMENT_WITH_SAVED_CARD_SUCCESS: undefined,
	PAYMENT_WITH_SAVED_CARD_FAILURE: undefined,

	UPDATE_ORDER_REQUEST: undefined,
	UPDATE_ORDER_SUCCESS: undefined,
	UPDATE_ORDER_FAILURE: undefined,

	GET_ORDER_BY_ID_REQUEST: undefined,
	GET_ORDER_BY_ID_SUCCESS: undefined,
	GET_ORDER_BY_ID_FAILURE: undefined,

	NOTIFY_STORE_REQUEST: undefined,
	NOTIFY_STORE_SUCCESS: undefined,
	NOTIFY_STORE_FAILURE: undefined,
})

const reducer = handleActions(
	new Map([
		[actions.getOrdersRequest, handlers.getOrdersRequest],
		[actions.getOrdersSuccess, handlers.getOrdersSuccess],
		[actions.getOrdersFailure, handlers.getOrdersFailure],

		[actions.addInfoToOrderRequest, handlers.addInfoToOrderRequest],
		[actions.addInfoToOrderSuccess, handlers.addInfoToOrderSuccess],
		[actions.addInfoToOrderFailure, handlers.addInfoToOrderFailure],

		[actions.createOrderRequest, handlers.createOrderRequest],
		[actions.createOrderSuccess, handlers.createOrderSuccess],
		[actions.createOrderFailure, handlers.createOrderFailure],

		[actions.paymentWithNewCardRequest, handlers.paymentWithNewCardRequest],
		[actions.paymentWithNewCardSuccess, handlers.paymentWithNewCardSuccess],
		[actions.paymentWithNewCardFailure, handlers.paymentWithNewCardFailure],

		[actions.paymentWithSavedCardRequest, handlers.paymentWithSavedCardRequest],
		[actions.paymentWithSavedCardSuccess, handlers.paymentWithSavedCardSuccess],
		[actions.paymentWithSavedCardFailure, handlers.paymentWithSavedCardFailure],

		[actions.updateOrderRequest, handlers.updateOrderRequest],
		[actions.updateOrderSuccess, handlers.updateOrderSuccess],
		[actions.updateOrderFailure, handlers.updateOrderFailure],

		[actions.getOrderByIdRequest, handlers.getOrderByIdRequest],
		[actions.getOrderByIdSuccess, handlers.getOrderByIdSuccess],
		[actions.getOrderByIdFailure, handlers.getOrderByIdFailure],

		[actions.notifyStoreRequest, handlers.notifyStoreRequest],
		[actions.notifyStoreSuccess, handlers.notifyStoreSuccess],
		[actions.notifyStoreFailure, handlers.notifyStoreFailure],
	]),
	initialState,
)

export default reducer
