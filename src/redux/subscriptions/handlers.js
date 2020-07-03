const mockPlan = [
	{
		type: '',
		price: '',
	},
]

const initialState = {
	subscriptions: [],
	customerSubscriptions: [],
	subscriptionById: [],
	isSubscriptionLoading: false,
	isSubscriptionError: '',
	isCustomerSubscriptionLoading: false,
	isCustomerSubscriptionError: '',
	isSubscriptionByIdLoading: false,
	isSubscriptionByIdError: '',
	addSubscriptionLoading: false,
	addSubscriptionError: '',
	deleteItemError: '',
	modalPlan: mockPlan,
	setModalPlanLoading: false,
	setModalPlanError: '',
}

export const getSubscriptionRequest = state => ({
	...state,
	isSubscriptionLoading: true,
	isSubscriptionError: initialState.isSubscriptionError,
})

export const getSubscriptionSuccess = (state, { payload }) => ({
	...state,
	subscriptions: payload,
	isSubscriptionError: false,
	isSubscriptionLoading: false,
})

export const getSubscriptionFailure = (state, { payload }) => ({
	...state,
	isSubscriptionError: true,
	subscriptionError: payload,
	isSubscriptionLoading: false,
})

export const getCustomerSubscriptionRequest = state => ({
	...state,
	isCustomerSubscriptionLoading: true,
	isCustomerSubscriptionError: initialState.isCustomerSubscriptionError,
})

export const getCustomerSubscriptionSuccess = (state, { payload }) => ({
	...state,
	customerSubscriptions: payload,
	isCustomerSubscriptionError: false,
	isCustomerSubscriptionLoading: false,
})

export const getCustomerSubscriptionFailure = (state, { payload }) => ({
	...state,
	isCustomerSubscriptionError: true,
	customerSubscriptionError: payload,
	isCustomerSubscriptionLoading: false,
})

export const getSubscriptionByIdRequest = state => ({
	...state,
	isSubscriptionByIdLoading: true,
	isSubscriptionByIdError: initialState.isSubscriptionByIdError,
})

export const getSubscriptionByIdSuccess = (state, { payload }) => ({
	...state,
	subscriptionById: payload,
	isSubscriptionByIdError: false,
	isSubscriptionByIdLoading: false,
})

export const getSubscriptionByIdFailure = (state, { payload }) => ({
	...state,
	isSubscriptionByIdError: true,
	subscriptionByIdError: payload,
	isSubscriptionByIdLoading: false,
})

export const addSubscriptionRequest = state => ({
	...state,
	addSubscriptionLoading: true,
	addSubscriptionError: initialState.createOrderError,
})

export const addSubscriptionSuccess = state => ({
	...state,
	addSubscriptionLoading: false,
})

export const addSubscriptionFailure = (state, { payload }) => ({
	...state,
	addSubscriptionLoading: false,
	addSubscriptionError: payload,
})

export const deleteSubscriptionRequest = state => ({
	...state,
})

export const deleteSubscriptionSuccess = (state, { payload }) => ({
	...state,
	subscriptions: [...payload],
})

export const deleteSubscriptionFailure = (state, { payload }) => ({
	...state,
	deleteItemError: payload,
})

export const setModalPlanRequest = state => ({
	...state,
	setModalPlanLoading: true,
})

export const setModalPlanSuccess = (state, { payload }) => ({
	...state,
	modalPlan: payload,
	setModalPlanLoading: false,
})

export const setModalPlanFailure = (state, { payload }) => ({
	...state,
	setModalPlanError: payload,
	setModalPlanLoading: false,
})

export default initialState
