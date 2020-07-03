import { put, takeEvery, call } from 'redux-saga/effects'

import {
	getLocations,
	getLocationById,
	addCustomerLocation,
	getCustomerLocation,
	deleteCustomerLocation,
	updateCustomerLocation,
} from '../../services/http/locations'
import { actions as types } from './index'

function* getAllLocations() {
	try {
		const data = yield call(getLocations)

		yield put(types.getLocationsSuccess(data))
	} catch (error) {
		yield put(types.getLocationsFailure(error))
	}
}

function* getLocation({ payload }) {
	try {
		const id = payload
		const data = yield call(getLocationById, id)

		yield put(types.getLocationsByIdSuccess(data))
	} catch (error) {
		yield put(types.getLocationsByIdFailure(error))
	}
}

function* addSavedLocationSaga({ payload }) {
	try {
		const data = yield call(addCustomerLocation, payload)

		yield put(types.addSavedLocationSuccess(data))
	} catch (error) {
		yield put(types.addSavedLocationFailure(error))
	}
}

function* getSavedLocationSaga() {
	try {
		const data = yield call(getCustomerLocation)

		yield put(types.getSavedLocationSuccess(data))
	} catch (error) {
		yield put(types.getSavedLocationFailure(error))
	}
}

function* deleteSavedLocationSaga({ payload }) {
	try {
		const data = yield call(deleteCustomerLocation, payload)

		yield put(types.deleteSavedLocationSuccess(data))
	} catch (error) {
		yield put(types.deleteSavedLocationFailure(error))
	}
}

function* updateSavedLocationSaga({ payload }) {
	try {
		const data = yield call(updateCustomerLocation, payload)

		yield put(types.updateSavedLocationSuccess(data))
	} catch (error) {
		yield put(types.updateSavedLocationFailure(error))
	}
}

const locationsSagas = [
	takeEvery(types.getLocationsRequest, getAllLocations),
	takeEvery(types.getLocationsByIdRequest, getLocation),
	takeEvery(types.addSavedLocationRequest, addSavedLocationSaga),
	takeEvery(types.getSavedLocationRequest, getSavedLocationSaga),
	takeEvery(types.deleteSavedLocationRequest, deleteSavedLocationSaga),
	takeEvery(types.updateSavedLocationRequest, updateSavedLocationSaga),
]

export default locationsSagas
