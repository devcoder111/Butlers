const initialState = {
	tailoring: [],
	addItemError: '',
	deleteItemError: '',
	addCommentError: '',
	addCoordinateError: '',
	tailoringItems: [],
	addTailoringItemsError: '',
}

export const addTailoringRequest = state => ({
	...state,
})

export const addTailoringSuccess = (state, { payload }) => ({
	...state,
	tailoring: [...payload],
})

export const addTailoringFailure = (state, { payload }) => ({
	...state,
	addItemError: payload,
})

export const deleteTailoringRequest = state => ({
	...state,
})

export const deleteTailoringSuccess = (state, { payload }) => ({
	...state,
	tailoring: [...payload],
})

export const deleteTailoringFailure = (state, { payload }) => ({
	...state,
	deleteItemError: payload,
})
export const addMarkerRequest = state => ({
	...state,
})

export const addMarkerSuccess = (state, { payload }) => ({
	...state,
	tailoringItems: payload,
})

export const addMarkerFailure = (state, { payload }) => ({
	...state,
	addItemError: payload,
})

export const deleteMarkerRequest = state => ({
	...state,
})

export const deleteMarkerSuccess = (state, { payload }) => ({
	...state,
	tailoringItems: [...payload],
})

export const deleteMarkerFailure = (state, { payload }) => ({
	...state,
	deleteItemError: payload,
})

export const addCommentRequest = state => ({
	...state,
})

export const addCommentSuccess = (state, { payload }) => ({
	...state,
	tailoringItems: [...payload],
})

export const addCommentFailure = (state, { payload }) => ({
	...state,
	addCommentError: payload,
})

export const addCoordinateRequest = state => ({
	...state,
})

export const addCoordinateSuccess = (state, { payload }) => ({
	...state,
	tailoringItems: [...payload],
})

export const addCoordinateFailure = (state, { payload }) => ({
	...state,
	addCoordinateError: payload,
})

export const addTailoringItemsRequest = state => ({
	...state,
})

export const addTailoringItemsSuccess = (state, { payload }) => ({
	...state,
	tailoringItems: payload,
})

export const addTailoringItemsFailure = (state, { payload }) => ({
	...state,
	addTailoringItemsError: payload,
})

export const cleanTailoringRequest = state => ({
	...state,
	tailoring: [],
	tailoringItems: [],
})

export default initialState
