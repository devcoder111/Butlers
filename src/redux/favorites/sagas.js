import { put, takeEvery, call } from 'redux-saga/effects'

import {
	getFavoritesItems,
	addFavoriteItem,
	deleteFavoriteItem,
} from '../../services/http/favorites'
import { actions as types } from './index'

function* getFavorites() {
	try {
		const data = yield call(getFavoritesItems)

		yield put(types.getFavoritesSuccess(data))
	} catch (error) {
		yield put(types.getFavoritesFailure(error))
	}
}

function* addFavorite({ payload }) {
	try {
		const data = yield call(addFavoriteItem, payload)
		yield call(getFavorites)

		yield put(types.addFavoriteSuccess(data))
	} catch (error) {
		yield put(types.addFavoriteFailure(error))
	}
}

function* deleteFavorite({ payload }) {
	try {
		const data = yield call(deleteFavoriteItem, payload)
		yield call(getFavorites)

		yield put(types.deleteFavoriteSuccess(data))
	} catch (error) {
		yield put(types.deleteFavoriteFailure(error))
	}
}

const favoritesSagas = [
	takeEvery(types.getFavoritesRequest, getFavorites),
	takeEvery(types.addFavoriteRequest, addFavorite),
	takeEvery(types.deleteFavoriteRequest, deleteFavorite),
]

export default favoritesSagas
