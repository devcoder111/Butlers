import http from '..'

export const getFavoritesItems = () => http.post('/getFavoriteServices').then(res => res.data)

export const addFavoriteItem = data =>
	http.post(`/addFavoriteService/${data}`).then(res => res.data)

export const deleteFavoriteItem = data =>
	http.post(`/deleteFavoriteService/${data}`).then(res => res.data)
