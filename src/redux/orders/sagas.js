import { put, takeEvery, call } from 'redux-saga/effects'

import {
	getOrders,
	createNewOrder,
	payByNewCard,
	payBySavedCard,
	updateOrders,
	getOrderById,
	notifyStore,
} from '../../services/http/orders'
import { actions as types } from './index'

function* getAllOrders() {
	try {
		const data = yield call(getOrders)

		yield put(types.getOrdersSuccess(data))
	} catch (error) {
		yield put(types.getOrdersFailure(error.response.data))
	}
}

function* getOrdersById({ payload }) {
	try {
		const data = yield call(getOrderById, payload)

		yield put(types.getOrderByIdSuccess(data))
	} catch (error) {
		yield put(types.getOrderByIdFailure(error))
	}
}

function* addInfoToOrder({ payload }) {
	try {
		yield put(types.addInfoToOrderSuccess(payload))
	} catch (error) {
		yield put(types.addInfoToOrderFailure(payload))
	}
}

function* createOrder({ payload }) {
	try {
		const order = yield call(createNewOrder, payload)
		yield put(types.createOrderSuccess(order.order))
	} catch (error) {
		yield put(types.createOrderFailure(error))
	}
}

function* payWithNewCard({ payload }) {
	try {
		const response = yield call(payByNewCard, payload)
		yield put(types.paymentWithNewCardSuccess(response))
	} catch (error) {
		yield put(types.paymentWithNewCardFailure(payload))
	}
}

function* payWithSavedCard({ payload }) {
	try {
		const response = yield call(payBySavedCard, payload)
		yield put(types.paymentWithSavedCardSuccess(response))
	} catch (error) {
		yield put(types.paymentWithSavedCardFailure(payload))
	}
}

function* updateOrder({ payload }) {
	try {
		const data = yield call(updateOrders, payload)
		yield put(types.updateOrderSuccess(data.order))
	} catch (error) {
		yield put(types.updateOrderFailure(error.response.data))
	}
}

function* notifyStoreSaga({ payload }) {
	try {
		const data = yield call(notifyStore, payload)
		yield put(types.notifyStoreSuccess(data))
	} catch (error) {
		yield put(types.notifyStoreFailure(error))
	}
}

const orderSagas = [
	takeEvery(types.getOrdersRequest, getAllOrders),
	takeEvery(types.addInfoToOrderRequest, addInfoToOrder),
	takeEvery(types.createOrderRequest, createOrder),
	takeEvery(types.paymentWithNewCardRequest, payWithNewCard),
	takeEvery(types.paymentWithSavedCardRequest, payWithSavedCard),
	takeEvery(types.updateOrderRequest, updateOrder),
	takeEvery(types.getOrderByIdRequest, getOrdersById),
	takeEvery(types.notifyStoreRequest, notifyStoreSaga),
]

export default orderSagas
