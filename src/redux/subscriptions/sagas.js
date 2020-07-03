import { put, takeEvery, call } from 'redux-saga/effects'

import {
	getSubscription,
	getCustomerSubscription,
	getSubscriptionById,
	addSubscriptions,
	deleteSubscriptions,
} from '../../services/http/subscriptions'
import { actions as types } from './index'

function* getAllSubscription() {
	try {
		const data = yield call(getSubscription)

		yield put(types.getSubscriptionSuccess(data))
	} catch (error) {
		yield put(types.getSubscriptionFailure(error))
	}
}

function* getAllCustomerSubscription() {
	try {
		const data = yield call(getCustomerSubscription)

		yield put(types.getCustomerSubscriptionSuccess(data))
	} catch (error) {
		yield put(types.getCustomerSubscriptionFailure(error))
	}
}

function* getAllSubscriptionById({ payload }) {
	try {
		const id = payload
		const data = yield call(getSubscriptionById, id)

		yield put(types.getSubscriptionByIdSuccess(data))
	} catch (error) {
		yield put(types.getSubscriptionByIdFailure(error))
	}
}

function* addSubscription({ payload }) {
	try {
		const subscription = yield call(addSubscriptions, payload)
		yield put(types.addSubscriptionSuccess(subscription))
	} catch (error) {
		yield put(types.addSubscriptionFailure(error))
	}
}

function* deleteSubscription({ payload }) {
	try {
		const data = yield call(deleteSubscriptions, payload)
		yield put(types.deleteSubscriptionSuccess(data))
	} catch (error) {
		yield put(types.deleteSubscriptionFailure(error))
	}
}

function* setModalPlan({ payload }) {
	try {
		yield put(types.setModalPlanSuccess(payload))
	} catch (error) {
		yield put(types.setModalPlanFailure(error))
	}
}

const subscriptionsSagas = [
	takeEvery(types.setModalPlanRequest, setModalPlan),
	takeEvery(types.getSubscriptionRequest, getAllSubscription),
	takeEvery(types.getCustomerSubscriptionRequest, getAllCustomerSubscription),
	takeEvery(types.getSubscriptionByIdRequest, getAllSubscriptionById),
	takeEvery(types.addSubscriptionRequest, addSubscription),
	takeEvery(types.deleteSubscriptionRequest, deleteSubscription),
]

export default subscriptionsSagas
