const initialState = {
	locations: [],
	currentLocation: {},
	isOrdersLoading: false,
	isOrdersError: false,
	ordersError: '',
	addSavedLocationLoading: false,
	addSavedLocationError: '',
	addSavedLocationresponse: '',
	getSavedLocationResponse: [],
	getSavedLocationLoading: false,
	getSavedLocationError: '',
	deleteSavedLocationResponse: '',
	deleteSavedLocationLoading: false,
	deleteSavedLocationError: '',
	updateSavedLocationResponse: '',
	updateSavedLocationLoading: false,
	updateSavedLocationError: '',
}

export const getLocationsRequest = state => ({
	...state,
	isOrdersLoading: true,
	isOrdersError: initialState.isOrdersError,
})

export const getLocationsSuccess = (state, { payload }) => ({
	...state,
	locations: payload,
	isOrdersError: false,
	isOrdersLoading: false,
})

export const getLocationsFailure = (state, { payload }) => ({
	...state,
	isOrdersError: true,
	ordersError: payload,
	isOrdersLoading: false,
})

export const getLocationsByIdRequest = state => ({
	...state,
	isOrdersLoading: true,
	isOrdersError: initialState.isOrdersError,
})

export const getLocationsByIdSuccess = (state, { payload }) => ({
	...state,
	currentLocation: payload,
	isOrdersError: false,
	isOrdersLoading: false,
})

export const getLocationsByIdFailure = (state, { payload }) => ({
	...state,
	isOrdersError: true,
	ordersError: payload,
	isOrdersLoading: false,
})

export const addSavedLocationRequest = state => ({
	...state,
	addSavedLocationLoading: true,
	addSavedLocationError: initialState.addSavedLocationError,
})

export const addSavedLocationSuccess = (state, { payload }) => ({
	...state,
	addSavedLocationResponse: payload,
	addSavedLocationError: false,
	addSavedLocationLoading: false,
})

export const addSavedLocationFailure = (state, { payload }) => ({
	...state,
	addSavedLocationError: payload,
	addSavedLocationLoading: false,
})

export const getSavedLocationRequest = state => ({
	...state,
	getSavedLocationLoading: true,
	getSavedLocationError: initialState.getSavedLocationError,
})

export const getSavedLocationSuccess = (state, { payload }) => ({
	...state,
	getSavedLocationResponse: payload,
	getSavedLocationError: false,
	getSavedLocationLoading: false,
})

export const getSavedLocationFailure = (state, { payload }) => ({
	...state,
	getSavedLocationError: payload,
	getSavedLocationLoading: false,
})

export const deleteSavedLocationRequest = state => ({
	...state,
	deleteSavedLocationLoading: true,
	deleteSavedLocationError: initialState.deleteSavedLocationError,
})

export const deleteSavedLocationSuccess = (state, { payload }) => ({
	...state,
	deleteSavedLocationResponse: payload,
	deleteSavedLocationError: false,
	deleteSavedLocationLoading: false,
})

export const deleteSavedLocationFailure = (state, { payload }) => ({
	...state,
	deleteSavedLocationError: payload,
	deleteSavedLocationLoading: false,
})

export const updateSavedLocationRequest = state => ({
	...state,
	updateSavedLocationLoading: true,
	updateSavedLocationError: initialState.updateSavedLocationError,
})

export const updateSavedLocationSuccess = (state, { payload }) => ({
	...state,
	updateSavedLocationResponse: payload,
	updateSavedLocationError: false,
	updateSavedLocationLoading: false,
})

export const updateSavedLocationFailure = (state, { payload }) => ({
	...state,
	updateSavedLocationError: payload,
	updateSavedLocationLoading: false,
})

export const cleanSavedLocationRequest = state => ({
	...state,
	getSavedLocationResponse: [],
})

export default initialState
