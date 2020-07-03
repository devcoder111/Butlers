const mockProduct = [
	{
		id: 1,
		title: 'Folded Shirt',
		price: 400,
	},
	{
		id: 2,
		title: 'Fake shirt',
		price: 300,
	},
	{
		id: 3,
		title: 'Hi shirt',
		price: 100,
	},
	{
		id: 4,
		title: 'Lol shirt',
		price: 500,
	},
]

const initialState = {
	basket: [],
	product: mockProduct,
	promocodes: [],
	getPromocodesLoading: false,
	getPromocodesError: '',
	addItemError: '',
	deleteItemError: '',
	applyPromoCodeResponse: '',
	applyPromoCodeError: '',
	comment: '',
	promocode: '',
}

export const addItemRequest = state => ({
	...state,
})

export const addItemSuccess = (state, { payload }) => ({
	...state,
	basket: [...payload],
})

export const addItemFailure = (state, { payload }) => ({
	...state,
	addItemError: payload,
})

export const deleteItemRequest = state => ({
	...state,
})

export const deleteItemSuccess = (state, { payload }) => ({
	...state,
	basket: [...payload],
})

export const deleteItemFailure = (state, { payload }) => ({
	...state,
	deleteItemError: payload,
})

export const cleanBasketRequest = state => ({
	...state,
	basket: [],
})

export const setCommentRequest = (state, { payload }) => ({
	...state,
	comment: payload.comment,
	promocode: payload.promoCode,
})

export const applyPromoCodeRequest = state => ({
	...state,
})

export const applyPromoCodeSuccess = (state, { payload }) => ({
	...state,
	applyPromoCodeError: '',
	applyPromoCodeResponse: payload,
})

export const applyPromoCodeFailure = (state, { payload }) => ({
	...state,
	applyPromoCodeResponse: '',
	applyPromoCodeError: payload,
})

export const getPromocodesRequest = state => ({
	...state,
	getPromocodesLoading: true,
})

export const getPromocodesSuccess = (state, { payload }) => ({
	...state,
	promocodes: payload,
	getPromocodesLoading: false,
})

export const getPromocodesFailure = (state, { payload }) => ({
	...state,
	getPromocodesError: payload,
	getPromocodesLoading: false,
})

export default initialState
