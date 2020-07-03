import { put, takeEvery, call } from 'redux-saga/effects'

import {
	getCustomerMessages,
	getMessageById,
	getMessageSubjects,
	sendMessage,
} from '../../services/http/chat'
import { actions as types } from './index'

function* getCustomerMessagesSaga() {
	try {
		const data = yield call(getCustomerMessages)

		yield put(types.getCustomerMessagesSuccess(data))
	} catch (error) {
		yield put(types.getCustomerMessagesFailure(error))
	}
}

function* getMessageByIdSaga({ payload }) {
	try {
		const data = yield call(getMessageById, payload)

		yield put(types.getMessageByIdSuccess(data))
	} catch (error) {
		yield put(types.getMessageByIdFailure(error))
	}
}

function* getChatSubjectsSaga() {
	try {
		const data = yield call(getMessageSubjects)

		yield put(types.getChatSubjectsSuccess(data))
	} catch (error) {
		yield put(types.getChatSubjectsFailure(error))
	}
}

function* getMessagesBySubjectSaga({ payload }) {
	try {
		const config = {
			subject: payload,
		}
		const data = yield call(getMessageSubjects, config)

		yield put(types.getMessagesBySubjectSuccess(data))
	} catch (error) {
		yield put(types.getMessagesBySubjectFailure(error))
	}
}

function* sendMessageSaga({ payload }) {
	try {
		const config = {
			subject: payload,
		}
		const data = yield call(sendMessage, config)

		yield put(types.sendMessageSuccess(data))
	} catch (error) {
		yield put(types.sendMessageFailure(error))
	}
}

const favoritesSagas = [
	takeEvery(types.getCustomerMessagesRequest, getCustomerMessagesSaga),
	takeEvery(types.getMessageByIdRequest, getMessageByIdSaga),
	takeEvery(types.getChatSubjectsRequest, getChatSubjectsSaga),
	takeEvery(types.getMessagesBySubjectRequest, getMessagesBySubjectSaga),
	takeEvery(types.sendMessageRequest, sendMessageSaga),
]

export default favoritesSagas
