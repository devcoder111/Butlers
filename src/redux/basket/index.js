import { handleActions, createActions } from 'redux-actions'

import initialState, * as handlers from './handlers'

export const actions = createActions({
	ADD_ITEM_REQUEST: undefined,
	ADD_ITEM_SUCCESS: undefined,
	ADD_ITEM_FAILURE: undefined,

	DELETE_ITEM_REQUEST: undefined,
	DELETE_ITEM_SUCCESS: undefined,
	DELETE_ITEM_FAILURE: undefined,

	CLEAN_BASKET_REQUEST: undefined,

	SET_COMMENT_REQUEST: undefined,

	APPLY_PROMO_CODE_REQUEST: undefined,
	APPLY_PROMO_CODE_SUCCESS: undefined,
	APPLY_PROMO_CODE_FAILURE: undefined,

	GET_PROMOCODES_REQUEST: undefined,
	GET_PROMOCODES_SUCCESS: undefined,
	GET_PROMOCODES_FAILURE: undefined,
})

const reducer = handleActions(
	new Map([
		[actions.addItemRequest, handlers.addItemRequest],
		[actions.addItemSuccess, handlers.addItemSuccess],
		[actions.addItemFailure, handlers.addItemFailure],

		[actions.deleteItemRequest, handlers.deleteItemRequest],
		[actions.deleteItemSuccess, handlers.deleteItemSuccess],
		[actions.deleteItemFailure, handlers.deleteItemFailure],

		[actions.cleanBasketRequest, handlers.cleanBasketRequest],

		[actions.setCommentRequest, handlers.setCommentRequest],

		[actions.applyPromoCodeRequest, handlers.applyPromoCodeRequest],
		[actions.applyPromoCodeSuccess, handlers.applyPromoCodeSuccess],
		[actions.applyPromoCodeFailure, handlers.applyPromoCodeFailure],

		[actions.getPromocodesRequest, handlers.getPromocodesRequest],
		[actions.getPromocodesSuccess, handlers.getPromocodesSuccess],
		[actions.getPromocodesFailure, handlers.getPromocodesFailure],
	]),
	initialState,
)

export default reducer
