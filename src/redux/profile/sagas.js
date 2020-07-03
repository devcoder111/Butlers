import { put, takeEvery, call } from 'redux-saga/effects'

import { actions as types } from './index'

import {
	createCard,
	editCard,
	removeCard,
	getAllFaq,
	generateLink,
	getSettings,
	getBonuses,
	getCustomer,
	getAllCards,
	saveCard,
	setPrimaryCard,
	getSubject,
	getMessage,
	sendMessage,
	updateMessage,
	deleteMessage,
	getCardById,
	updateAvatar,
	getCustomerGroup,
	sendGdprOnMail,
	deletePeronalInfo,
	sendGdprCodeOnMail,
	getCustomerSettings,
	setCustomerSettings,
} from '../../services/http/profile'
import { createFormData, createMessageImageData } from '../../helpers/profile/index'
import { getCustomerInfo } from '../../services/http/auth'

function* getCards({ payload }) {
	try {
		const data = yield call(getAllCards, payload)
		// yield delay(2000)
		yield put(types.getCardsSuccess(data))
	} catch (error) {
		yield put(types.getCardsFailure(error))
	}
}

function* getCard({ payload }) {
	try {
		const config = { id: payload }
		const data = yield call(getCardById, config)
		yield put(types.getCardSuccess(data))
	} catch (error) {
		yield put(types.getCardFailure(error))
	}
}

function* addCard({ payload }) {
	try {
		yield call(createCard, payload)

		yield put(types.addCardSuccess())
	} catch (error) {
		yield put(types.addCardFailure(error))
	}
}

function* updateCard({ payload }) {
	try {
		yield call(editCard, payload)
		yield put(types.updateCardSuccess())
	} catch (error) {
		yield put(types.updateCardFailure(error))
	}
}

function* deleteCard({ payload }) {
	try {
		const data = yield call(removeCard, payload)
		yield put(types.deleteCardSuccess(data))
	} catch (error) {
		yield put(types.deleteCardFailure(error))
	}
}

function* getFaq() {
	try {
		const data = yield call(getAllFaq)

		yield put(types.getFaqSuccess(data))
	} catch (error) {
		yield put(types.getFaqFailure(error))
	}
}

function* getReferLink() {
	try {
		const data = yield call(generateLink)

		yield put(types.getReferLinkSuccess(data))
	} catch (error) {
		yield put(types.getReferLinkFailure(error))
	}
}

function* getAppSettings() {
	try {
		const data = yield call(getSettings)

		yield put(types.getAppSettingsSuccess(data))
	} catch (error) {
		yield put(types.getAppSettingsFailure(error))
	}
}

function* getCustomerBonuses() {
	try {
		const data = yield call(getBonuses)

		yield put(types.getBonusesSuccess(data))
	} catch (error) {
		yield put(types.getBonusesFailure(error))
	}
}

function* getCustomerData() {
	try {
		const data = yield call(getCustomer)

		yield put(types.getCustomerDataSuccess(data))
	} catch (error) {
		yield put(types.getCustomerDataFailure(error))
	}
}

function* setPrimaryCardSaga({ payload }) {
	try {
		const config = { id: payload }
		const data = yield call(setPrimaryCard, config)

		yield put(types.setPrimaryCardSuccess(data))
	} catch (error) {
		yield put(types.setPrimaryCardFailure(error))
	}
}

function* addSavedCard({ payload }) {
	try {
		const data = yield call(saveCard, payload)
		yield put(types.saveCardSuccess(data))
	} catch (error) {
		yield put(types.saveCardFailure(error))
	}
}

function* updateAvatarSaga({ payload }) {
	try {
		const data = yield call(createFormData, payload)

		const image = yield call(updateAvatar, data)
		yield put(types.updateAvatarSuccess(image))
	} catch (error) {
		yield put(types.updateAvatarFailure(error))
	}
}

function* getCustomerInfoSaga() {
	try {
		const info = yield call(getCustomerInfo)
		yield put(types.updateUserDataSuccess(info.data))
	} catch (error) {
		yield put(types.updateUserDataFailure(error))
	}
}

function* addClientMessage({ payload }) {
	try {
		yield put(types.clientMessageSuccess(payload))
	} catch (error) {
		yield put(types.clientMessageFailure(error))
	}
}

function* addSubjectChat({ payload }) {
	try {
		yield put(types.subjectChatSuccess(payload))
	} catch (error) {
		yield put(types.subjectChatFailure(error))
	}
}

function* addOrderId({ payload }) {
	try {
		yield put(types.orderIdSuccess(payload))
	} catch (error) {
		yield put(types.orderIdFailure(error))
	}
}
function* getCustomerGroupOfCustomer() {
	try {
		const data = yield call(getCustomerGroup)
		yield put(types.getCustomerGroupSuccess(data))
	} catch (error) {
		yield put(types.getCustomerGroupFailure(error))
	}
}

function* sendGdpr() {
	try {
		const data = yield call(sendGdprOnMail)
		yield put(types.sendGdprSuccess(data))
	} catch (error) {
		yield put(types.sendGdprFailure(error))
	}
}

function* deleteGdpr({ payload }) {
	try {
		const data = yield call(deletePeronalInfo, payload)
		yield put(types.deleteGdprSuccess(data))
	} catch (error) {
		yield put(types.deleteGdprFailure(error))
	}
}

function* sendGdprCode() {
	try {
		const data = yield call(sendGdprCodeOnMail)
		yield put(types.sendGdprCodeSuccess(data))
	} catch (error) {
		yield put(types.sendGdprCodeFailure(error))
	}
}

function* getMessages({ payload }) {
	try {
		const data = yield call(getMessage, payload)
		yield put(types.getMessagesSuccess(data))
	} catch (error) {
		yield put(types.getMessagesFailure(error))
	}
}

function* getSubjects({ payload }) {
	try {
		const data = yield call(getSubject, payload)
		yield put(types.getSubjectsSuccess(data))
	} catch (error) {
		yield put(types.getSubjectsFailure(error))
	}
}

function* sendMessages({ payload }) {
	try {
		if (payload.file) {
			const data = yield call(createMessageImageData, payload)
			yield call(sendMessage, data)
		} else {
			yield call(sendMessage, payload)
		}

		yield put(types.sendMessageSuccess(payload.message))
	} catch (error) {
		yield put(types.sendMessageFailure(error))
	}
}

function* updateMessages({ payload }) {
	try {
		yield call(updateMessage, payload)
		yield put(types.updateMessageSuccess())
	} catch (error) {
		yield put(types.updateMessageFailure(error))
	}
}

function* deleteMessages({ payload }) {
	try {
		yield call(deleteMessage, payload)
		yield put(types.deleteMessageSuccess())
	} catch (error) {
		yield put(types.deleteMessageFailure(error))
	}
}

function* getNotificationOptionsSaga() {
	try {
		const data = yield call(getCustomerSettings)
		yield put(types.getNotificationOptionsSuccess(data))
	} catch (error) {
		yield put(types.getNotificationOptionsFailure(error))
	}
}

function* setNotificationOptionsSaga({ payload }) {
	try {
		const data = yield call(setCustomerSettings, payload)
		yield put(types.setNotificationOptionsSuccess(data))
	} catch (error) {
		yield put(types.setNotificationOptionsFailure(error))
	}
}

const profileSagas = [
	takeEvery(types.getCardsRequest, getCards),
	takeEvery(types.getCardRequest, getCard),
	takeEvery(types.addCardRequest, addCard),
	takeEvery(types.updateCardRequest, updateCard),
	takeEvery(types.deleteCardRequest, deleteCard),
	takeEvery(types.getFaqRequest, getFaq),
	takeEvery(types.getReferLinkRequest, getReferLink),
	takeEvery(types.getAppSettingsRequest, getAppSettings),
	takeEvery(types.getBonusesRequest, getCustomerBonuses),
	takeEvery(types.getCustomerDataRequest, getCustomerData),
	takeEvery(types.saveCardRequest, addSavedCard),
	takeEvery(types.setPrimaryCardRequest, setPrimaryCardSaga),
	takeEvery(types.updateAvatarRequest, updateAvatarSaga),
	takeEvery(types.updateUserDataRequest, getCustomerInfoSaga),
	takeEvery(types.clientMessageRequest, addClientMessage),
	takeEvery(types.subjectChatRequest, addSubjectChat),
	takeEvery(types.orderIdRequest, addOrderId),
	takeEvery(types.getCustomerGroupRequest, getCustomerGroupOfCustomer),
	takeEvery(types.sendGdprRequest, sendGdpr),
	takeEvery(types.deleteGdprRequest, deleteGdpr),
	takeEvery(types.sendGdprCodeRequest, sendGdprCode),
	takeEvery(types.subjectChatRequest, addSubjectChat),
	takeEvery(types.orderIdRequest, addOrderId),
	takeEvery(types.getMessagesRequest, getMessages),
	takeEvery(types.getSubjectsRequest, getSubjects),
	takeEvery(types.sendMessageRequest, sendMessages),
	takeEvery(types.updateMessageRequest, updateMessages),
	takeEvery(types.deleteMessageRequest, deleteMessages),
	takeEvery(types.getNotificationOptionsRequest, getNotificationOptionsSaga),
	takeEvery(types.setNotificationOptionsRequest, setNotificationOptionsSaga),
]

export default profileSagas
