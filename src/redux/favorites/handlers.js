const initialState = {
	favorites: [],
	isFavoritesLoading: false,
	isFavoritesError: false,
	favoritesError: '',
	addSuccess: '',
	deleteSuccess: '',
}

export const getFavoritesRequest = state => ({
	...state,
	isFavoritesLoading: true,
	isFavoritesError: initialState.isTypesError,
})

export const getFavoritesSuccess = (state, { payload }) => ({
	...state,
	favorites: payload,
	isFavoritesError: false,
	isFavoritesLoading: false,
})

export const getFavoritesFailure = (state, { payload }) => ({
	...state,
	isFavoritesError: true,
	favoritesError: payload,
	isFavoritesLoading: false,
})

export const addFavoriteRequest = state => ({
	...state,
	isFavoritesLoading: true,
	isFavoritesError: initialState.isServicesError,
})

export const addFavoriteSuccess = (state, { payload }) => ({
	...state,
	addSuccess: payload,
	isFavoritesError: false,
	isFavoritesLoading: false,
})

export const addFavoriteFailure = (state, { payload }) => ({
	...state,
	favoritesError: true,
	isFavoritesError: payload,
	isFavoritesLoading: false,
})

export const deleteFavoriteRequest = state => ({
	...state,

	isFavoritesError: initialState.isServicesError,
})

export const deleteFavoriteSuccess = (state, { payload }) => ({
	...state,
	deleteSuccess: payload,
	isFavoritesError: false,
})

export const deleteFavoriteFailure = (state, { payload }) => ({
	...state,
	favoritesError: true,
	isFavoritesError: payload,
})

export default initialState
