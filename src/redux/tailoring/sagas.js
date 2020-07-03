import { put, takeEvery, select, call } from 'redux-saga/effects'

import { actions as types } from './index'
import {
	addTailoring,
	deleteTailoring,
	addMarker,
	deleteMarker,
	addComment,
	addCoordinate,
	addTailoringItems,
} from '../../helpers/tailoring'
import { getTailoringItems } from '../selectors'

function* addItem({ payload }) {
	try {
		const {
			tailoring: { tailoring },
		} = yield select()

		const data = addTailoring(tailoring, payload)

		yield put(types.addTailoringSuccess(data))
	} catch (error) {
		yield put(types.addTailoringFailure(error))
	}
}

function* deleteItem({ payload }) {
	try {
		const {
			tailoring: { tailoring },
		} = yield select()

		const data = deleteTailoring(tailoring, payload)

		yield put(types.deleteTailoringSuccess(data))
	} catch (error) {
		yield put(types.deleteTailoringFailure(error))
	}
}

function* addMarkers({ payload }) {
	try {
		const tailoringItems = yield select(getTailoringItems)
		const data = yield call(addMarker, tailoringItems, payload)
		yield put(types.addMarkerSuccess(data))
	} catch (error) {
		yield put(types.addMarkerFailure(error))
	}
}

function* deleteMarkers({ payload }) {
	try {
		const tailoringItems = yield select(getTailoringItems)
		const data = yield call(deleteMarker, tailoringItems, payload)

		yield put(types.deleteMarkerSuccess(data))
	} catch (error) {
		yield put(types.deleteMarkerFailure(error))
	}
}

function* addComments({ payload }) {
	try {
		const tailoringItems = yield select(getTailoringItems)
		const data = yield call(addComment, tailoringItems, payload)

		yield put(types.addCommentSuccess(data))
	} catch (error) {
		yield put(types.addCommentFailure(error))
	}
}

function* addCoordinates({ payload }) {
	try {
		const tailoringItems = yield select(getTailoringItems)
		const data = yield call(addCoordinate, tailoringItems, payload)

		yield put(types.addCoordinateSuccess(data))
	} catch (error) {
		yield put(types.addCoordinateFailure(error))
	}
}

function* addTailoringItemsSaga() {
	try {
		const {
			tailoring: { tailoring },
		} = yield select()
		const data = yield call(addTailoringItems, tailoring)

		yield put(types.addTailoringItemsSuccess(data))
	} catch (error) {
		yield put(types.addTailoringItemsFailure(error))
	}
}

const tailoringSagas = [
	takeEvery(types.addTailoringRequest, addItem),
	takeEvery(types.deleteTailoringRequest, deleteItem),
	takeEvery(types.addMarkerRequest, addMarkers),
	takeEvery(types.deleteMarkerRequest, deleteMarkers),
	takeEvery(types.addCommentRequest, addComments),
	takeEvery(types.addCoordinateRequest, addCoordinates),
	takeEvery(types.addTailoringItemsRequest, addTailoringItemsSaga),
]

export default tailoringSagas
