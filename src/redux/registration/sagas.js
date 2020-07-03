import { put, takeEvery, call, select } from 'redux-saga/effects'

import {
	smsVerification,
	register,
	sendVerifyEmail,
	checkEmailUsed,
	checkPostCode,
	checkAgreementNumberValid,
} from '../../services/http/auth'
import { actions as types } from './index'

import * as selectors from '../selectors'
import createDate from '../../helpers/registration/createData'

function* registerUser() {
	try {
		const type = yield select(selectors.getRegistrationType)
		const registrationData = yield call(createDate, type)
		const data = yield call(register, registrationData)
		yield put(types.registerUserSuccess(data))
	} catch (error) {
		yield put(types.registerUserFailure(error.response.data))
	}
}

function* addPostcode({ payload }) {
	try {
		yield put(types.addPostcodeSuccess(payload))
	} catch (error) {
		yield put(types.addPostcodeFailure(error.response.data))
	}
}

function* addRegistrationType({ payload }) {
	try {
		yield put(types.addRegistrationTypeSuccess(payload))
	} catch (error) {
		yield put(types.addRegistrationTypeFailure(error.response.data))
	}
}

function* addInitials({ payload }) {
	try {
		yield put(types.addInitialsSuccess(payload))
	} catch (error) {
		yield put(types.addInitialsFailure(error.response.data))
	}
}

function* addBirthday({ payload }) {
	try {
		yield put(types.addBirthdaySuccess(payload))
	} catch (error) {
		yield put(types.addBirthdayFailure(error.response.data))
	}
}

function* addPhone({ payload }) {
	try {
		yield put(types.addPhoneSuccess(payload))
	} catch (error) {
		yield put(types.addPhoneFailure(error.response.data))
	}
}

function* addEmail({ payload }) {
	try {
		yield put(types.addEmailSuccess(payload))
	} catch (error) {
		yield put(types.addEmailFailure(error.response.data))
	}
}

function* addPassword({ payload }) {
	try {
		yield put(types.addPasswordSuccess(payload))
	} catch (error) {
		yield put(types.addPasswordFailure(error.response.data))
	}
}

function* addAddress({ payload }) {
	try {
		yield put(types.addAddressSuccess(payload))
	} catch (error) {
		yield put(types.addAddressFailure(error.response.data))
	}
}

function* addCompanyId({ payload }) {
	try {
		yield put(types.addCompanyIdSuccess(payload))
	} catch (error) {
		yield put(types.addCompanyIdFailure(error.response.data))
	}
}

function* addAboutUs({ payload }) {
	try {
		yield put(types.addAboutUsSuccess(payload))
	} catch (error) {
		yield put(types.addAboutUsFailure(error.response.data))
	}
}

function* sendEmail({ payload }) {
	try {
		const data = yield call(sendVerifyEmail, payload)
		yield put(types.sendEmailSuccess(data))
	} catch (error) {
		yield put(types.sendEmailFailure(error.response.data))
	}
}

function* checkEmailUsedSaga({ payload }) {
	try {
		const data = yield call(checkEmailUsed, payload)
		console.log(payload)
		payload.email ? yield put(types.checkEmailUsedSuccess({ email: data, phone: false })) : yield put(types.checkEmailUsedSuccess({email: false, phone: data}))
	} catch (error) {
		yield put(types.checkEmailUsedFailure(error.response.data))
	}
}

function* checkPostCodes({ payload }) {
	try {
		const postCode = yield call(checkPostCode, payload)
		yield put(types.checkPostCodeSuccess(postCode))
	} catch (error) {
		yield put(types.checkPostCodeFailure(error.response.data))
	}
}

function* checkOfficeCode({ payload }) {
	try {
		const config = {
			agreement_number: payload,
		}
		const postCode = yield call(checkAgreementNumberValid, config)
		yield put(types.checkOfficeCodeSuccess(postCode))
	} catch (error) {
		yield put(types.checkOfficeCodeFailure(error.response.data))
	}
}

function* clearPostCodeChecking() {
	try {
		yield put(types.clearPostCodeCheckingSuccess())
	} catch (error) {
		yield put(types.clearPostCodeCheckingFailure(error.response.data))
	}
}

const authSagas = [
	takeEvery(types.registerUserRequest, registerUser),
	takeEvery(types.addPostcodeRequest, addPostcode),
	takeEvery(types.addRegistrationTypeRequest, addRegistrationType),
	takeEvery(types.addInitialsRequest, addInitials),
	takeEvery(types.addBirthdayRequest, addBirthday),
	takeEvery(types.addPhoneRequest, addPhone),
	takeEvery(types.addEmailRequest, addEmail),
	takeEvery(types.addPasswordRequest, addPassword),
	takeEvery(types.addAddressRequest, addAddress),
	takeEvery(types.addCompanyIdRequest, addCompanyId),
	takeEvery(types.addAboutUsRequest, addAboutUs),
	takeEvery(types.sendEmailRequest, sendEmail),
	takeEvery(types.checkEmailUsedRequest, checkEmailUsedSaga),
	takeEvery(types.checkPostCodeRequest, checkPostCodes),
	takeEvery(types.clearPostCodeCheckingRequest, clearPostCodeChecking),
	takeEvery(types.checkOfficeCodeRequest, checkOfficeCode),
]

export default authSagas
