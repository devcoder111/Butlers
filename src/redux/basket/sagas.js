import { put, takeEvery, select, call } from 'redux-saga/effects'

import { actions as types } from './index'
import { addItemToBasket, deleteItemFromBasket } from '../../helpers/basket'
import { applyPromoCodes, getPromocodes } from '../../services/http/basket'

function* addItem({ payload }) {
	try {
		const {
			basket: { basket },
		} = yield select()

		const data = addItemToBasket(basket, payload)

		yield put(types.addItemSuccess(data))
	} catch (error) {
		yield put(types.addItemFailure(error))
	}
}

function* deleteItem({ payload }) {
	try {
		const {
			basket: { basket },
		} = yield select()

		const data = deleteItemFromBasket(basket, payload)

		yield put(types.deleteItemSuccess(data))
	} catch (error) {
		yield put(types.deleteItemFailure(error))
	}
}

function* applyPromoCode({ payload }) {
	try {
		const promocode = yield call(applyPromoCodes, payload)
		yield put(types.applyPromoCodeSuccess(promocode))
	} catch (error) {
		yield put(types.applyPromoCodeFailure(error))
	}
}

function* getPromocode({ payload }) {
	try {
		const data = yield call(getPromocodes, payload)
		yield put(types.getPromocodesSuccess(data))
	} catch (error) {
		yield put(types.getPromocodesFailure(error))
	}
}

const basketSagas = [
	takeEvery(types.addItemRequest, addItem),
	takeEvery(types.deleteItemRequest, deleteItem),
	takeEvery(types.applyPromoCodeRequest, applyPromoCode),
	takeEvery(types.getPromocodesRequest, getPromocode),
]

export default basketSagas
