import { put, takeEvery, call } from 'redux-saga/effects'

import {
	getTypes,
	getServicesByTypeId,
	getServiceById,
	getAllTags,
	getServiceTypesWithService,
	searchServicesByTag,
} from '../../services/http/services'
import { actions as types } from './index'

function* getAllTypes() {
	try {
		const data = yield call(getTypes)

		yield put(types.getServiceTypesSuccess(data))
	} catch (error) {
		yield put(types.getServiceTypesFailure(error))
	}
}

function* getServiceTypesWith() {
	try {
		const data = yield call(getServiceTypesWithService)

		yield put(types.getServiceTypesWithSuccess(data))
	} catch (error) {
		yield put(types.getServiceTypesWithFailure(error))
	}
}

function* getServices({ payload }) {
	try {
		const id = payload
		const data = yield call(getServicesByTypeId, id)

		yield put(types.getServiceByTypeIdSuccess(data))
	} catch (error) {
		yield put(types.getServiceByTypeIdFailure(error))
	}
}

function* searchItems({ payload }) {
	try {
		yield put(types.searchItemsSuccess(payload))
	} catch (error) {
		yield put(types.searchItemsFailure(error))
	}
}

function* getService({ payload }) {
	try {
		const data = yield call(getServiceById, payload)

		yield put(types.getServiceByIdSuccess(data))
	} catch (error) {
		yield put(types.getServiceByIdFailure(error))
	}
}

function* getTags() {
	try {
		const data = yield call(getAllTags)

		yield put(types.getTagsSuccess(data))
	} catch (error) {
		yield put(types.getTagsFailure(error))
	}
}

function* searchServices({ payload }) {
	try {
		const data = yield call(searchServicesByTag, payload)
		yield put(types.searchServicesSuccess(data))
	} catch (error) {
		yield put(types.searchServicesFailure(error))
	}
}

const servicesSagas = [
	takeEvery(types.getServiceTypesRequest, getAllTypes),
	takeEvery(types.getServiceByTypeIdRequest, getServices),
	takeEvery(types.searchItemsRequest, searchItems),
	takeEvery(types.getServiceByIdRequest, getService),
	takeEvery(types.getTagsRequest, getTags),
	takeEvery(types.getAllCategoriesRequest, getAllTypes),
	takeEvery(types.getServiceTypesWithRequest, getServiceTypesWith),
	takeEvery(types.searchServicesRequest, searchServices),
]

export default servicesSagas
