import { handleActions, createActions } from 'redux-actions'

import initialState, * as handlers from './handlers'

export const actions = createActions({
	GET_LOCATIONS_REQUEST: undefined,
	GET_LOCATIONS_SUCCESS: undefined,
	GET_LOCATIONS_FAILURE: undefined,

	GET_LOCATIONS_BY_ID_REQUEST: undefined,
	GET_LOCATIONS_BY_ID_SUCCESS: undefined,
	GET_LOCATIONS_BY_ID_FAILURE: undefined,

	ADD_SAVED_LOCATION_REQUEST: undefined,
	ADD_SAVED_LOCATION_SUCCESS: undefined,
	ADD_SAVED_LOCATION_FAILURE: undefined,

	GET_SAVED_LOCATION_REQUEST: undefined,
	GET_SAVED_LOCATION_SUCCESS: undefined,
	GET_SAVED_LOCATION_FAILURE: undefined,

	DELETE_SAVED_LOCATION_REQUEST: undefined,
	DELETE_SAVED_LOCATION_SUCCESS: undefined,
	DELETE_SAVED_LOCATION_FAILURE: undefined,

	UPDATE_SAVED_LOCATION_REQUEST: undefined,
	UPDATE_SAVED_LOCATION_SUCCESS: undefined,
	UPDATE_SAVED_LOCATION_FAILURE: undefined,

	CLEAN_SAVED_LOCATION_REQUEST: undefined,
})

const reducer = handleActions(
	new Map([
		[actions.getLocationsRequest, handlers.getLocationsRequest],
		[actions.getLocationsSuccess, handlers.getLocationsSuccess],
		[actions.getLocationsFailure, handlers.getLocationsFailure],

		[actions.getLocationsByIdRequest, handlers.getLocationsByIdRequest],
		[actions.getLocationsByIdSuccess, handlers.getLocationsByIdSuccess],
		[actions.getLocationsByIdFailure, handlers.getLocationsByIdFailure],

		[actions.addSavedLocationRequest, handlers.addSavedLocationRequest],
		[actions.addSavedLocationSuccess, handlers.addSavedLocationSuccess],
		[actions.addSavedLocationFailure, handlers.addSavedLocationFailure],

		[actions.getSavedLocationRequest, handlers.getSavedLocationRequest],
		[actions.getSavedLocationSuccess, handlers.getSavedLocationSuccess],
		[actions.getSavedLocationFailure, handlers.getSavedLocationFailure],

		[actions.deleteSavedLocationRequest, handlers.deleteSavedLocationRequest],
		[actions.deleteSavedLocationSuccess, handlers.deleteSavedLocationSuccess],
		[actions.deleteSavedLocationFailure, handlers.deleteSavedLocationFailure],

		[actions.updateSavedLocationRequest, handlers.updateSavedLocationRequest],
		[actions.updateSavedLocationSuccess, handlers.updateSavedLocationSuccess],
		[actions.updateSavedLocationFailure, handlers.updateSavedLocationFailure],

		[actions.cleanSavedLocationRequest, handlers.cleanSavedLocationRequest],
	]),
	initialState,
)

export default reducer
