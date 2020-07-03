import { handleActions, createActions } from 'redux-actions'

import initialState, * as handlers from './handlers'

export const actions = createActions({
	GET_FAVORITES_REQUEST: undefined,
	GET_FAVORITES_SUCCESS: undefined,
	GET_FAVORITES_FAILURE: undefined,

	ADD_FAVORITE_REQUEST: undefined,
	ADD_FAVORITE_SUCCESS: undefined,
	ADD_FAVORITE_FAILURE: undefined,

	DELETE_FAVORITE_REQUEST: undefined,
	DELETE_FAVORITE_SUCCESS: undefined,
	DELETE_FAVORITE_FAILURE: undefined,
})

const reducer = handleActions(
	new Map([
		[actions.getFavoritesRequest, handlers.getFavoritesRequest],
		[actions.getFavoritesSuccess, handlers.getFavoritesSuccess],
		[actions.getFavoritesFailure, handlers.getFavoritesFailure],

		[actions.addFavoriteRequest, handlers.addFavoriteRequest],
		[actions.addFavoriteSuccess, handlers.addFavoriteSuccess],
		[actions.addFavoriteFailure, handlers.addFavoriteFailure],

		[actions.deleteFavoriteRequest, handlers.deleteFavoriteRequest],
		[actions.deleteFavoriteSuccess, handlers.deleteFavoriteSuccess],
		[actions.deleteFavoriteFailure, handlers.deleteFavoriteFailure],
	]),
	initialState,
)

export default reducer
