const initialState = {
	types: [],
	services: [],
	serviceTypesWith: [],
	service: [],
	searchText: '',
	isTypesLoading: false,
	isTypesError: false,
	typesError: '',
	isServicesLoading: false,
	isServicesError: false,
	isServiceLoading: false,
	serviceError: '',
	servicesError: '',
	searchItemsError: '',
	tags: [],
	tagsLoading: false,
	tagsError: '',
	categories: [],
	getAllCategoriesLoading: false,
	getAllCategoriesError: '',
	getServiceTypesWithLoading: false,
	getServiceTypesWithError: '',
	searchServices: [],
	searchServicesLoading: false,
	searchServicesError: false,
}

export const getServiceTypesRequest = state => ({
	...state,
	isTypesLoading: true,
	isTypesError: initialState.isTypesError,
})

export const getServiceTypesSuccess = (state, { payload }) => ({
	...state,
	types: payload,
	isTypesError: false,
	isTypesLoading: false,
})

export const getServiceTypesFailure = (state, { payload }) => ({
	...state,
	isTypesError: true,
	typesError: payload,
})

export const getServiceByTypeIdRequest = state => ({
	...state,
	isServicesLoading: true,
	isServicesError: initialState.isServicesError,
})

export const getServiceByTypeIdSuccess = (state, { payload }) => ({
	...state,
	services: payload,
	isServicesError: false,
	isServicesLoading: false,
})

export const getServiceByTypeIdFailure = (state, { payload }) => ({
	...state,
	isServicesError: true,
	servicesError: payload,
})

export const searchItemsRequest = state => ({
	...state,
	searchItemsError: initialState.searchItemsError,
})

export const searchItemsSuccess = (state, { payload }) => ({
	...state,
	searchText: payload,
})

export const searchItemsFailure = (state, { payload }) => ({
	...state,
	searchItemsError: payload.error,
})

export const getServiceByIdRequest = state => ({
	...state,
	isServiceLoading: true,
	serviceError: initialState.serviceError,
})

export const getServiceByIdSuccess = (state, { payload }) => ({
	...state,
	service: payload,
	isServiceLoading: false,
})

export const getServiceByIdFailure = (state, { payload }) => ({
	...state,
	isServiceLoading: false,
	serviceError: payload,
})

export const getTagsRequest = state => ({
	...state,
	tagsLoading: true,
	tagsError: initialState.serviceError,
})

export const getTagsSuccess = (state, { payload }) => ({
	...state,
	tags: payload,
	tagsLoading: false,
})

export const getTagsFailure = (state, { payload }) => ({
	...state,
	tagsLoading: false,
	tagsError: payload,
})

export const getAllCategoriesRequest = state => ({
	...state,
	getAllCategoriesLoading: true,
	getAllCategoriesError: initialState.serviceError,
})

export const getAllCategoriesSuccess = (state, { payload }) => ({
	...state,
	categories: payload,
	getAllCategoriesLoading: false,
})

export const getAllCategoriesFailure = (state, { payload }) => ({
	...state,
	getAllCategoriesLoading: false,
	getAllCategoriesError: payload,
})

export const getServiceTypesWithRequest = state => ({
	...state,
	getServiceTypesWithLoading: true,
	getServiceTypesWithError: initialState.serviceError,
})

export const getServiceTypesWithSuccess = (state, { payload }) => ({
	...state,
	serviceTypesWith: payload,
	getServiceTypesWithLoading: false,
})

export const getServiceTypesWithFailure = (state, { payload }) => ({
	...state,
	getServiceTypesWithLoading: false,
	getServiceTypesWithError: payload,
})
export const searchServicesRequest = state => ({
	...state,
	searchServicesLoading: true,
	searchServicesError: initialState.searchServicesError,
})

export const searchServicesSuccess = (state, { payload }) => ({
	...state,
	searchServices: payload,
	searchServicesLoading: false,
})

export const searchServicesFailure = (state, { payload }) => ({
	...state,
	searchServicesLoading: false,
	searchServicesError: payload,
})

export default initialState
