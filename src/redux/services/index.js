import { handleActions, createActions } from 'redux-actions'

import initialState, * as handlers from './handlers'

export const actions = createActions({
	GET_SERVICE_TYPES_REQUEST: undefined,
	GET_SERVICE_TYPES_SUCCESS: undefined,
	GET_SERVICE_TYPES_FAILURE: undefined,

	GET_SERVICE_BY_TYPE_ID_REQUEST: undefined,
	GET_SERVICE_BY_TYPE_ID_SUCCESS: undefined,
	GET_SERVICE_BY_TYPE_ID_FAILURE: undefined,

	SEARCH_ITEMS_REQUEST: undefined,
	SEARCH_ITEMS_SUCCESS: undefined,
	SEARCH_ITEMS_FAILURE: undefined,

	GET_SERVICE_BY_ID_REQUEST: undefined,
	GET_SERVICE_BY_ID_SUCCESS: undefined,
	GET_SERVICE_BY_ID_FAILURE: undefined,

	GET_TAGS_REQUEST: undefined,
	GET_TAGS_SUCCESS: undefined,
	GET_TAGS_FAILURE: undefined,

	GET_ALL_CATEGORIES_REQUEST: undefined,
	GET_ALL_CATEGORIES_SUCCESS: undefined,
	GET_ALL_CATEGORIES_FAILURE: undefined,

	GET_SERVICE_TYPES_WITH_REQUEST: undefined,
	GET_SERVICE_TYPES_WITH_SUCCESS: undefined,
	GET_SERVICE_TYPES_WITH_FAILURE: undefined,

	SEARCH_SERVICES_REQUEST: undefined,
	SEARCH_SERVICES_SUCCESS: undefined,
	SEARCH_SERVICES_FAILURE: undefined,
})

const reducer = handleActions(
	new Map([
		[actions.getServiceTypesRequest, handlers.getServiceTypesRequest],
		[actions.getServiceTypesSuccess, handlers.getServiceTypesSuccess],
		[actions.getServiceTypesFailure, handlers.getServiceTypesFailure],

		[actions.getServiceByTypeIdRequest, handlers.getServiceByTypeIdRequest],
		[actions.getServiceByTypeIdSuccess, handlers.getServiceByTypeIdSuccess],
		[actions.getServiceByTypeIdFailure, handlers.getServiceByTypeIdFailure],

		[actions.searchItemsRequest, handlers.searchItemsRequest],
		[actions.searchItemsSuccess, handlers.searchItemsSuccess],
		[actions.searchItemsFailure, handlers.searchItemsFailure],

		[actions.getServiceByIdRequest, handlers.getServiceByIdRequest],
		[actions.getServiceByIdSuccess, handlers.getServiceByIdSuccess],
		[actions.getServiceByIdFailure, handlers.getServiceByIdFailure],

		[actions.getTagsRequest, handlers.getTagsRequest],
		[actions.getTagsSuccess, handlers.getTagsSuccess],
		[actions.getTagsFailure, handlers.getTagsFailure],

		[actions.getAllCategoriesRequest, handlers.getAllCategoriesRequest],
		[actions.getAllCategoriesSuccess, handlers.getAllCategoriesSuccess],
		[actions.getAllCategoriesFailure, handlers.getAllCategoriesFailure],

		[actions.getServiceTypesWithRequest, handlers.getServiceTypesWithRequest],
		[actions.getServiceTypesWithSuccess, handlers.getServiceTypesWithSuccess],
		[actions.getServiceTypesWithFailure, handlers.getServiceTypesWithFailure],

		[actions.searchServicesRequest, handlers.searchServicesRequest],
		[actions.searchServicesSuccess, handlers.searchServicesSuccess],
		[actions.searchServicesFailure, handlers.searchServicesFailure],
	]),
	initialState,
)

export default reducer
