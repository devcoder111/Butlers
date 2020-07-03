import { handleActions, createActions } from 'redux-actions'

import initialState, * as handlers from './handlers'

export const actions = createActions({
	ADD_TAILORING_REQUEST: undefined,
	ADD_TAILORING_SUCCESS: undefined,
	ADD_TAILORING_FAILURE: undefined,

	DELETE_TAILORING_REQUEST: undefined,
	DELETE_TAILORING_SUCCESS: undefined,
	DELETE_TAILORING_FAILURE: undefined,

	ADD_MARKER_REQUEST: undefined,
	ADD_MARKER_SUCCESS: undefined,
	ADD_MARKER_FAILURE: undefined,

	DELETE_MARKER_REQUEST: undefined,
	DELETE_MARKER_SUCCESS: undefined,
	DELETE_MARKER_FAILURE: undefined,

	ADD_COMMENT_REQUEST: undefined,
	ADD_COMMENT_SUCCESS: undefined,
	ADD_COMMENT_FAILURE: undefined,

	ADD_COORDINATE_REQUEST: undefined,
	ADD_COORDINATE_SUCCESS: undefined,
	ADD_COORDINATE_FAILURE: undefined,

	ADD_TAILORING_ITEMS_REQUEST: undefined,
	ADD_TAILORING_ITEMS_SUCCESS: undefined,
	ADD_TAILORING_ITEMS_FAILURE: undefined,

	CLEAN_TAILORING_REQUEST: undefined,
})

const reducer = handleActions(
	new Map([
		[actions.addTailoringRequest, handlers.addTailoringRequest],
		[actions.addTailoringSuccess, handlers.addTailoringSuccess],
		[actions.addTailoringFailure, handlers.addTailoringFailure],

		[actions.deleteTailoringRequest, handlers.deleteTailoringRequest],
		[actions.deleteTailoringSuccess, handlers.deleteTailoringSuccess],
		[actions.deleteTailoringFailure, handlers.deleteTailoringFailure],

		[actions.addMarkerRequest, handlers.addMarkerRequest],
		[actions.addMarkerSuccess, handlers.addMarkerSuccess],
		[actions.addMarkerFailure, handlers.addMarkerFailure],

		[actions.deleteMarkerRequest, handlers.deleteMarkerRequest],
		[actions.deleteMarkerSuccess, handlers.deleteMarkerSuccess],
		[actions.deleteMarkerFailure, handlers.deleteMarkerFailure],

		[actions.addCommentRequest, handlers.addCommentRequest],
		[actions.addCommentSuccess, handlers.addCommentSuccess],
		[actions.addCommentFailure, handlers.addCommentFailure],

		[actions.addCoordinateRequest, handlers.addCoordinateRequest],
		[actions.addCoordinateSuccess, handlers.addCoordinateSuccess],
		[actions.addCoordinateFailure, handlers.addCoordinateFailure],

		[actions.addTailoringItemsRequest, handlers.addTailoringItemsRequest],
		[actions.addTailoringItemsSuccess, handlers.addTailoringItemsSuccess],
		[actions.addTailoringItemsFailure, handlers.addTailoringItemsFailure],

		[actions.cleanTailoringRequest, handlers.cleanTailoringRequest],
	]),
	initialState,
)

export default reducer
