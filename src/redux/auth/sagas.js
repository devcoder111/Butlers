import { put, takeEvery, call } from 'redux-saga/effects'

import { getToken, setUser, deleteUser, updateUser, getUser } from '../../helpers/storage/auth'

import {
	authenticate,
	sendEmail,
	changePassword,
	refreshToken,
	getCustomerInfo,
	smsVerification,
	checkSmsVerification,
} from '../../services/http/auth'

import { getCustomer, updateCustomer } from '../../services/http/profile'

import { actions as types } from './index'

function* logIn({ payload }) {
	try {
		const data = yield call(authenticate, payload)
		const user = {
			user: data.customer,
			token: data.access_token,
		}
		yield call(setUser, user.user, user.token)
		yield put(types.logInSuccess(user))
	} catch (error) {
		yield put(types.logInFailure({ message: error.response.data.error }))
	}
}

function* isAuthenticated() {
	try {
		const isToken = yield call(getToken)
		if (isToken) {
			const user = yield call(getUser)
			console.log(user)
			const token = yield call(refreshToken)
			const data = { user, token }

			yield call(setUser, data.user, data.token)
			const updatedUser = yield call(getCustomerInfo)
			const config = { user: updatedUser.data, token }
			yield call(setUser, config.user, config.token)
			yield put(types.isAuthenticatedSuccess(config))
		} else yield put(types.isAuthenticatedFailure())
	} catch (error) {
		yield put(types.isAuthenticatedFailure())
	}
}

function* logOut() {
	try {
		yield call(deleteUser)
		yield put(types.logOutSuccess())
	} catch (error) {
		yield put(types.logOutFailure(error.message))
	}
}

function* sendEmailForChangingPassword({ payload }) {
	try {
		const { success } = yield call(sendEmail, payload)
		yield put(types.sendEmailForChangingPasswordSuccess(success))
	} catch (error) {
		yield put(types.sendEmailForChangingPasswordFailure(error.response.data.error))
	}
}

function* resetPassword({ payload }) {
	try {
		const { success } = yield call(changePassword, payload)
		yield put(types.resetPasswordSuccess(success))
	} catch (error) {
		yield put(types.resetPasswordFailure(error.response.data.error))
	}
}

function* updateCustomerData({ payload }) {
	try {
		yield call(updateCustomer, payload)
		const customer = yield call(getCustomer)
		yield call(updateUser, customer)
		yield put(types.updateCustomerDataSuccess(customer))
	} catch (error) {
		yield put(types.updateCustomerDataFailure(error))
	}
}

function* sendSMSVerification({ payload }) {
	try {
		const sms = yield call(smsVerification, payload)
		yield put(types.sendVerifySmsSuccess(sms))
	} catch (error) {
		yield put(types.sendVerifySmsFailure(error.response.data))
	}
}

function* checkSMSVerification({ payload }) {
	try {
		const sms = yield call(checkSmsVerification, payload)
		yield put(types.checkVerifySmsSuccess(sms))
	} catch (error) {
		yield put(types.checkVerifySmsFailure(error))
	}
}

const authSagas = [
	takeEvery(types.logInRequest, logIn),
	takeEvery(types.isAuthenticatedRequest, isAuthenticated),
	takeEvery(types.logOutRequest, logOut),
	takeEvery(types.sendEmailForChangingPasswordRequest, sendEmailForChangingPassword),
	takeEvery(types.resetPasswordRequest, resetPassword),
	takeEvery(types.updateCustomerDataRequest, updateCustomerData),
	takeEvery(types.sendVerifySmsRequest, sendSMSVerification),
	takeEvery(types.checkVerifySmsRequest, checkSMSVerification),
]

export default authSagas
