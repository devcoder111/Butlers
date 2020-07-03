import { handleActions, createActions } from 'redux-actions'

import initialState, * as handlers from './handlers'

export const actions = createActions({
	LOG_IN_REQUEST: undefined,
	LOG_IN_SUCCESS: undefined,
	LOG_IN_FAILURE: undefined,

	IS_AUTHENTICATED_REQUEST: undefined,
	IS_AUTHENTICATED_SUCCESS: undefined,
	IS_AUTHENTICATED_FAILURE: undefined,

	LOG_OUT_REQUEST: undefined,
	LOG_OUT_SUCCESS: undefined,
	LOG_OUT_FAILURE: undefined,

	SEND_EMAIL_FOR_CHANGING_PASSWORD_REQUEST: undefined,
	SEND_EMAIL_FOR_CHANGING_PASSWORD_SUCCESS: undefined,
	SEND_EMAIL_FOR_CHANGING_PASSWORD_FAILURE: undefined,

	RESET_PASSWORD_REQUEST: undefined,
	RESET_PASSWORD_SUCCESS: undefined,
	RESET_PASSWORD_FAILURE: undefined,

	UPDATE_CUSTOMER_DATA_REQUEST: undefined,
	UPDATE_CUSTOMER_DATA_SUCCESS: undefined,
	UPDATE_CUSTOMER_DATA_FAILURE: undefined,

	SET_VERIFIED_EMAIL_REQUEST: undefined,
	SET_VERIFIED_EMAIL_SUCCESS: undefined,
	SET_VERIFIED_EMAIL_FAILURE: undefined,

	SEND_VERIFY_SMS_REQUEST: undefined,
	SEND_VERIFY_SMS_SUCCESS: undefined,
	SEND_VERIFY_SMS_FAILURE: undefined,

	CHECK_VERIFY_SMS_REQUEST: undefined,
	CHECK_VERIFY_SMS_SUCCESS: undefined,
	CHECK_VERIFY_SMS_FAILURE: undefined,

	CHECK_INFORMATION_UPDATED_FLAG_REQUEST: undefined,
})

const reducer = handleActions(
	new Map([
		[actions.logInRequest, handlers.logInRequest],
		[actions.logInSuccess, handlers.logInSuccess],
		[actions.logInFailure, handlers.logInFailure],

		[actions.isAuthenticatedRequest, handlers.isAuthenticatedRequest],
		[actions.isAuthenticatedSuccess, handlers.isAuthenticatedSuccess],
		[actions.isAuthenticatedFailure, handlers.isAuthenticatedFailure],

		[actions.logOutRequest, handlers.logoutRequest],
		[actions.logOutSuccess, handlers.logoutSuccess],
		[actions.logOutFailure, handlers.logoutFailure],

		[actions.sendEmailForChangingPasswordRequest, handlers.sendEmailForChangingPasswordRequest],
		[actions.sendEmailForChangingPasswordSuccess, handlers.sendEmailForChangingPasswordSuccess],
		[actions.sendEmailForChangingPasswordFailure, handlers.sendEmailForChangingPasswordFailure],

		[actions.resetPasswordRequest, handlers.resetPasswordRequest],
		[actions.resetPasswordSuccess, handlers.resetPasswordSuccess],
		[actions.resetPasswordFailure, handlers.resetPasswordFailure],

		[actions.updateCustomerDataRequest, handlers.updateCustomerDataRequest],
		[actions.updateCustomerDataSuccess, handlers.updateCustomerDataSuccess],
		[actions.updateCustomerDataFailure, handlers.updateCustomerDataFailure],

		[actions.sendVerifySmsRequest, handlers.sendVerifySmsRequest],
		[actions.sendVerifySmsSuccess, handlers.sendVerifySmsSuccess],
		[actions.sendVerifySmsFailure, handlers.sendVerifySmsFailure],

		[actions.checkVerifySmsRequest, handlers.checkVerifySmsRequest],
		[actions.checkVerifySmsSuccess, handlers.checkVerifySmsSuccess],
		[actions.checkVerifySmsFailure, handlers.checkVerifySmsFailure],

		[actions.checkInformationUpdatedFlagRequest, handlers.checkInformationUpdatedFlagRequest],
	]),
	initialState,
)

export default reducer
