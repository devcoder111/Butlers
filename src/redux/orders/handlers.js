const initialState = {
	orders: [],
	order: {
		// pick_up_time: null,
		// delivery_time: null,
		// pickup_location_id: null,
		// delivery_location_id: null,
		bonus_id: null,
		comment: '',

		order_items: [],
	},
	orderById: [],
	isOrderByIdLoading: false,
	iisOrderByIdError: '',
	isOrdersLoading: false,
	isOrdersError: '',
	createOrderLoading: false,
	createOrderError: '',
	updateOrderLoading: false,
	updateOrderError: '',
	notifyStoreLoading: false,
	notifyStoreError: '',
	doneOrder: {},
	paymentLoading: false,
	paymentError: '',
	paymentResponse: '',
}

export const getOrdersRequest = state => ({
	...state,
	isOrdersLoading: true,
	isOrdersError: initialState.isOrdersError,
	orders: [],
})

export const getOrdersSuccess = (state, { payload }) => ({
	...state,
	orders: payload,
	isOrdersError: false,
	isOrdersLoading: false,
})

export const getOrdersFailure = (state, { payload }) => ({
	...state,
	isOrdersError: true,
	ordersError: payload,
	isOrdersLoading: false,
})

export const getOrderByIdRequest = state => ({
	...state,
	isOrderByIdLoading: true,
})

export const getOrderByIdSuccess = (state, { payload }) => ({
	...state,
	doneOrder: payload,
	isOrderByIdLoading: false,
})

export const getOrderByIdFailure = (state, { payload }) => ({
	...state,
	iisOrderByIdError: payload,
	isOrderByIdLoading: false,
})

export const createOrderRequest = state => ({
	...state,
	createOrderLoading: true,
	createOrderError: initialState.createOrderError,
})

export const createOrderSuccess = (state, { payload }) => ({
	...state,
	doneOrder: payload,
	createOrderLoading: false,
})

export const createOrderFailure = (state, { payload }) => ({
	...state,
	createOrderLoading: false,
	createOrderError: payload,
})

export const addInfoToOrderRequest = state => ({
	...state,
})

export const addInfoToOrderSuccess = (state, { payload }) => ({
	...state,
	order: { ...payload },
})

export const addInfoToOrderFailure = state => ({
	...state,
})

export const paymentWithNewCardRequest = state => ({
	...state,
	paymentLoading: true,
})

export const paymentWithNewCardSuccess = (state, { payload }) => ({
	...state,
	paymentResponse: payload,
	paymentLoading: false,
})

export const paymentWithNewCardFailure = (state, { payload }) => ({
	...state,
	paymentLoading: false,
	paymentError: payload,
})

export const paymentWithSavedCardRequest = state => ({
	...state,
	paymentLoading: true,
})

export const paymentWithSavedCardSuccess = (state, { payload }) => ({
	...state,
	paymentResponse: payload,
	paymentLoading: false,
})

export const paymentWithSavedCardFailure = (state, { payload }) => ({
	...state,
	paymentLoading: false,
	paymentError: payload,
})

export const updateOrderRequest = state => ({
	...state,
	updateOrderLoading: true,
})

export const updateOrderSuccess = (state, { payload }) => ({
	...state,
	updateOrderLoading: false,
	doneOrder: payload,
})

export const updateOrderFailure = (state, { payload }) => ({
	...state,
	updateOrderLoading: false,
	updateOrderError: payload,
})

export const notifyStoreRequest = state => ({
	...state,
	notifyStoreLoading: true,
})

export const notifyStoreSuccess = state => ({
	...state,
	notifyStoreLoading: false,
})

export const notifyStoreFailure = (state, { payload }) => ({
	...state,
	notifyStoreLoading: false,
	notifyStoreError: payload,
})

export default initialState
