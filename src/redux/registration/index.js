import { handleActions, createActions } from 'redux-actions'

import initialState, * as handlers from './handlers'

export const actions = createActions({
	REGISTER_USER_REQUEST: undefined,
	REGISTER_USER_SUCCESS: undefined,
	REGISTER_USER_FAILURE: undefined,

	ADD_POSTCODE_REQUEST: undefined,
	ADD_POSTCODE_SUCCESS: undefined,
	ADD_POSTCODE_FAILURE: undefined,

	ADD_REGISTRATION_TYPE_REQUEST: undefined,
	ADD_REGISTRATION_TYPE_SUCCESS: undefined,
	ADD_REGISTRATION_TYPE_FAILURE: undefined,

	ADD_INITIALS_REQUEST: undefined,
	ADD_INITIALS_SUCCESS: undefined,
	ADD_INITIALS_FAILURE: undefined,

	ADD_BIRTHDAY_REQUEST: undefined,
	ADD_BIRTHDAY_SUCCESS: undefined,
	ADD_BIRTHDAY_FAILURE: undefined,

	ADD_PHONE_REQUEST: undefined,
	ADD_PHONE_SUCCESS: undefined,
	ADD_PHONE_FAILURE: undefined,

	ADD_EMAIL_REQUEST: undefined,
	ADD_EMAIL_SUCCESS: undefined,
	ADD_EMAIL_FAILURE: undefined,

	ADD_PASSWORD_REQUEST: undefined,
	ADD_PASSWORD_SUCCESS: undefined,
	ADD_PASSWORD_FAILURE: undefined,

	ADD_ADDRESS_REQUEST: undefined,
	ADD_ADDRESS_SUCCESS: undefined,
	ADD_ADDRESS_FAILURE: undefined,

	ADD_COMPANY_ID_REQUEST: undefined,
	ADD_COMPANY_ID_SUCCESS: undefined,
	ADD_COMPANY_ID_FAILURE: undefined,

	ADD_ABOUT_US_REQUEST: undefined,
	ADD_ABOUT_US_SUCCESS: undefined,
	ADD_ABOUT_US_FAILURE: undefined,

	SEND_EMAIL_REQUEST: undefined,
	SEND_EMAIL_SUCCESS: undefined,
	SEND_EMAIL_FAILURE: undefined,

	CHECK_EMAIL_USED_REQUEST: undefined,
	CHECK_EMAIL_USED_SUCCESS: undefined,
	CHECK_EMAIL_USED_FAILURE: undefined,

	CHECK_POST_CODE_REQUEST: undefined,
	CHECK_POST_CODE_SUCCESS: undefined,
	CHECK_POST_CODE_FAILURE: undefined,

	CLEAR_POST_CODE_CHECKING_REQUEST: undefined,
	CLEAR_POST_CODE_CHECKING_SUCCESS: undefined,
	CLEAR_POST_CODE_CHECKING_FAILURE: undefined,

	CHECK_OFFICE_CODE_REQUEST: undefined,
	CHECK_OFFICE_CODE_SUCCESS: undefined,
	CHECK_OFFICE_CODE_FAILURE: undefined,

	CLEAN_EMAIL_CHECKER: undefined,
})

const reducer = handleActions(
	new Map([
		[actions.registerUserRequest, handlers.registerUserRequest],
		[actions.registerUserSuccess, handlers.registerUserSuccess],
		[actions.registerUserFailure, handlers.registerUserFailure],

		[actions.addPostcodeRequest, handlers.addPostcodeRequest],
		[actions.addPostcodeSuccess, handlers.addPostcodeSuccess],
		[actions.addPostcodeFailure, handlers.addPostcodeFailure],

		[actions.addRegistrationTypeRequest, handlers.addRegistrationTypeRequest],
		[actions.addRegistrationTypeSuccess, handlers.addRegistrationTypeSuccess],
		[actions.addRegistrationTypeFailure, handlers.addRegistrationTypeFailure],

		[actions.addInitialsRequest, handlers.addInitialsRequest],
		[actions.addInitialsSuccess, handlers.addInitialsSuccess],
		[actions.addInitialsFailure, handlers.addInitialsFailure],

		[actions.addBirthdayRequest, handlers.addBirthdayRequest],
		[actions.addBirthdaySuccess, handlers.addBirthdaySuccess],
		[actions.addBirthdayFailure, handlers.addBirthdayFailure],

		[actions.addPhoneRequest, handlers.addPhoneRequest],
		[actions.addPhoneSuccess, handlers.addPhoneSuccess],
		[actions.addPhoneFailure, handlers.addPhoneFailure],

		[actions.addEmailRequest, handlers.addEmailRequest],
		[actions.addEmailSuccess, handlers.addEmailSuccess],
		[actions.addEmailFailure, handlers.addEmailFailure],

		[actions.addPasswordRequest, handlers.addPasswordRequest],
		[actions.addPasswordSuccess, handlers.addPasswordSuccess],
		[actions.addPasswordFailure, handlers.addPasswordFailure],

		[actions.addAddressRequest, handlers.addAddressRequest],
		[actions.addAddressSuccess, handlers.addAddressSuccess],
		[actions.addAddressFailure, handlers.addAddressFailure],

		[actions.addCompanyIdRequest, handlers.addCompanyIdRequest],
		[actions.addCompanyIdSuccess, handlers.addCompanyIdSuccess],
		[actions.addCompanyIdFailure, handlers.addCompanyIdFailure],

		[actions.addAboutUsRequest, handlers.addAboutUsRequest],
		[actions.addAboutUsSuccess, handlers.addAboutUsSuccess],
		[actions.addAboutUsFailure, handlers.addAboutUsFailure],

		[actions.sendEmailRequest, handlers.sendEmailRequest],
		[actions.sendEmailSuccess, handlers.sendEmailSuccess],
		[actions.sendEmailFailure, handlers.sendEmailFailure],

		[actions.checkEmailUsedRequest, handlers.checkEmailUsedRequest],
		[actions.checkEmailUsedSuccess, handlers.checkEmailUsedSuccess],
		[actions.checkEmailUsedFailure, handlers.checkEmailUsedFailure],

		[actions.checkPostCodeRequest, handlers.checkPostCodeRequest],
		[actions.checkPostCodeSuccess, handlers.checkPostCodeSuccess],
		[actions.checkPostCodeFailure, handlers.checkPostCodeFailure],

		[actions.clearPostCodeCheckingRequest, handlers.clearPostCodeCheckingRequest],
		[actions.clearPostCodeCheckingSuccess, handlers.clearPostCodeCheckingSuccess],
		[actions.clearPostCodeCheckingFailure, handlers.clearPostCodeCheckingFailure],

		[actions.checkOfficeCodeRequest, handlers.checkOfficeCodeRequest],
		[actions.checkOfficeCodeSuccess, handlers.checkOfficeCodeSuccess],
		[actions.checkOfficeCodeFailure, handlers.checkOfficeCodeFailure],

		[actions.cleanEmailChecker, handlers.cleanEmailChecker],
	]),
	initialState,
)

export default reducer
