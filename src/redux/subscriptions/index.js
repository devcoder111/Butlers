import { handleActions, createActions } from 'redux-actions'

import initialState, * as handlers from './handlers'

export const actions = createActions({
	GET_SUBSCRIPTION_REQUEST: undefined,
	GET_SUBSCRIPTION_SUCCESS: undefined,
	GET_SUBSCRIPTION_FAILURE: undefined,

	GET_SUBSCRIPTION_BY_ID_REQUEST: undefined,
	GET_SUBSCRIPTION_BY_ID_SUCCESS: undefined,
	GET_SUBSCRIPTION_BY_ID_FAILURE: undefined,

	GET_CUSTOMER_SUBSCRIPTION_REQUEST: undefined,
	GET_CUSTOMER_SUBSCRIPTION_SUCCESS: undefined,
	GET_CUSTOMER_SUBSCRIPTION_FAILURE: undefined,

	ADD_SUBSCRIPTION_REQUEST: undefined,
	ADD_SUBSCRIPTION_SUCCESS: undefined,
	ADD_SUBSCRIPTION_FAILURE: undefined,

	DELETE_SUBSCRIPTION_REQUEST: undefined,
	DELETE_SUBSCRIPTION_SUCCESS: undefined,
	DELETE_SUBSCRIPTION_FAILURE: undefined,

	SET_MODAL_PLAN_REQUEST: undefined,
	SET_MODAL_PLAN_SUCCESS: undefined,
	SET_MODAL_PLAN_FAILURE: undefined,
})

const reducer = handleActions(
	new Map([
		[actions.getSubscriptionRequest, handlers.getSubscriptionRequest],
		[actions.getSubscriptionSuccess, handlers.getSubscriptionSuccess],
		[actions.getSubscriptionFailure, handlers.getSubscriptionFailure],

		[actions.getCustomerSubscriptionRequest, handlers.getCustomerSubscriptionRequest],
		[actions.getCustomerSubscriptionSuccess, handlers.getCustomerSubscriptionSuccess],
		[actions.getCustomerSubscriptionFailure, handlers.getCustomerSubscriptionFailure],

		[actions.getSubscriptionByIdRequest, handlers.getSubscriptionByIdRequest],
		[actions.getSubscriptionByIdSuccess, handlers.getSubscriptionByIdSuccess],
		[actions.getSubscriptionByIdFailure, handlers.getSubscriptionByIdFailure],

		[actions.addSubscriptionRequest, handlers.addSubscriptionRequest],
		[actions.addSubscriptionSuccess, handlers.addSubscriptionSuccess],
		[actions.addSubscriptionFailure, handlers.addSubscriptionFailure],

		[actions.deleteSubscriptionRequest, handlers.deleteSubscriptionRequest],
		[actions.deleteSubscriptionSuccess, handlers.deleteSubscriptionSuccess],
		[actions.deleteSubscriptionFailure, handlers.deleteSubscriptionFailure],

		[actions.setModalPlanRequest, handlers.setModalPlanRequest],
		[actions.setModalPlanSuccess, handlers.setModalPlanSuccess],
		[actions.setModalPlanFailure, handlers.setModalPlanFailure],
	]),
	initialState,
)

export default reducer
