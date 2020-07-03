const initialState = {
	registeredUser: false,
	registeredUserLoading: false,
	registeredUserError: false,
	postcode: '',
	postcodeLoading: false,
	postcodeError: false,
	registrationType: '',
	registrationTypeLoading: false,
	registrationTypeError: '',
	firstName: '',
	lastName: '',
	initialsLoading: false,
	initalsError: false,
	birthday: '',
	birthdayLoading: false,
	birthdayError: false,
	phone: '',
	phoneLoading: false,
	phoneError: false,
	email: '',
	emailLoading: false,
	emailError: false,
	password: '',
	c_password: '',
	passwordLoading: false,
	passwordError: false,
	address: {
		address: '',
		houseNumber: '',
		floor: '',
		floorNumber: '',
		postalNumber: '',
	},
	addressLoading: false,
	addressError: false,
	companyId: '',
	companyIdLoading: false,
	companyidError: false,
	aboutUs: {
		email: false,
		friend: false,
		tv: false,
		radio: false,
		other: '',
	},
	aboutUsLoading: false,
	aboutUsError: false,
	sendEmailLoading: false,
	sendEmailError: false,
	checkEmailUsedLoading: false,
	checkEmailUsedResponse: '',
	checkEmailUsedError: '',
	checkPostCodeResponse: '',
	checkPostCodeLoading: false,
	checkPostCodeError: false,
	clearPostCodeCheckingError: false,
	checkOfficeCodeResponse: '',
	checkOfficeCodeLoading: false,
	checkOfficeCodeError: false,
}

export const registerUserRequest = state => ({
	...state,
	registeredUserLoading: true,
	registeredUserError: initialState.registeredUserError,
})

export const registerUserSuccess = (state, { payload }) => ({
	...state,
	registeredUser: payload,
	registeredUserLoading: false,
})

export const registerUserFailure = (state, { payload }) => ({
	...state,
	registeredUserLoading: false,
	registeredUserError: payload,
})

export const addPostcodeRequest = state => ({
	...state,
	postcodeLoading: true,
	postCodeError: initialState.postCodeError,
})

export const addPostcodeSuccess = (state, { payload }) => ({
	...state,
	postcode: payload,
	postcodeLoading: false,
})

export const addPostcodeFailure = (state, { payload }) => ({
	...state,
	postcodeLoading: false,
	postcodeError: payload,
})

export const addRegistrationTypeRequest = state => ({
	...state,
	registrationTypeLoading: true,
	registrationTypeError: initialState.registrationTypeError,
})

export const addRegistrationTypeSuccess = (state, { payload }) => ({
	...state,
	registrationType: payload,
	registrationTypeLoading: false,
})

export const addRegistrationTypeFailure = (state, { payload }) => ({
	...state,
	registrationTypeLoading: false,
	registrationTypeError: payload,
})

export const addInitialsRequest = state => ({
	...state,
	initialsLoading: true,
	initialsError: initialState.initialsError,
})

export const addInitialsSuccess = (state, { payload }) => ({
	...state,
	firstName: payload.firstName,
	lastName: payload.lastName,
	initialsLoading: false,
})

export const addInitialsFailure = (state, { payload }) => ({
	...state,
	initialsLoading: false,
	initialsError: payload,
})

export const addBirthdayRequest = state => ({
	...state,
	birthdayLoading: true,
	birthdayError: initialState.birthdayError,
})

export const addBirthdaySuccess = (state, { payload }) => ({
	...state,
	birthday: payload,
	birthdayLoading: false,
})

export const addBirthdayFailure = (state, { payload }) => ({
	...state,
	birthdayLoading: false,
	birthdayError: payload,
})

export const addPhoneRequest = state => ({
	...state,
	phoneLoading: true,
	phoneError: initialState.phoneError,
})

export const addPhoneSuccess = (state, { payload }) => ({
	...state,
	phone: payload,
	phoneLoading: false,
})

export const addPhoneFailure = (state, { payload }) => ({
	...state,
	phoneLoading: false,
	phoneError: payload,
})

export const addEmailRequest = state => ({
	...state,
	emailLoading: true,
	emailError: initialState.emailError,
})

export const addEmailSuccess = (state, { payload }) => ({
	...state,
	email: payload,
	emailLoading: false,
})

export const addEmailFailure = (state, { payload }) => ({
	...state,
	emailLoading: false,
	emailError: payload,
})

export const addPasswordRequest = state => ({
	...state,
	passwordLoading: true,
	passwordError: initialState.passwordError,
})

export const addPasswordSuccess = (state, { payload }) => ({
	...state,
	password: payload.password,
	c_password: payload.passwordConfirmation,
	passwordLoading: false,
})

export const addPasswordFailure = (state, { payload }) => ({
	...state,
	passwordLoading: false,
	passwordError: payload,
})

export const addAddressRequest = state => ({
	...state,
	addressLoading: true,
	addressError: initialState.addressError,
})

export const addAddressSuccess = (state, { payload }) => ({
	...state,
	address: {
		address: payload.address,
		houseNumber: payload.houseNumber,
		floor: payload.floor,
		floorNumber: payload.floorNumber,
		postalNumber: payload.postalNumber,
	},
	addressLoading: false,
})

export const addAddressFailure = (state, { payload }) => ({
	...state,
	addressLoading: false,
	addressError: payload,
})

export const addCompanyIdRequest = state => ({
	...state,
	companyIdLoading: true,
	companyIdError: initialState.companyIdError,
})

export const addCompanyIdSuccess = (state, { payload }) => ({
	...state,
	companyId: payload,
	companyIdLoading: false,
})

export const addCompanyIdFailure = (state, { payload }) => ({
	...state,
	companyIdLoading: false,
	companyIdError: payload,
})

export const addAboutUsRequest = state => ({
	...state,
	aboutUsLoading: true,
	aboutUsError: initialState.aboutUsError,
})

export const addAboutUsSuccess = (state, { payload }) => ({
	...state,
	aboutUs: {
		email: payload.email,
		friend: payload.friend,
		tv: payload.tv,
		radio: payload.radio,
		other: payload.other,
	},
	aboutUsLoading: false,
})

export const addAboutUsFailure = (state, { payload }) => ({
	...state,
	aboutUsLoading: false,
	aboutUsError: payload,
})

export const sendEmailRequest = state => ({
	...state,
	sendEmailLoading: true,
	sendEmailError: initialState.companyIdError,
})

export const sendEmailSuccess = state => ({
	...state,
	sendEmailLoading: false,
})

export const sendEmailFailure = (state, { payload }) => ({
	...state,
	sendEmailLoading: false,
	sendEmailError: payload,
})

export const checkEmailUsedRequest = state => ({
	...state,
	checkEmailUsedLoading: true,
})

export const checkEmailUsedSuccess = (state, { payload }) => ({
	...state,
	checkEmailUsedLoading: false,
	checkEmailUsedResponse: payload,
})

export const checkEmailUsedFailure = (state, { payload }) => ({
	...state,
	checkEmailUsedLoading: false,
	checkEmailUsedError: payload,
})

export const checkPostCodeRequest = state => ({
	...state,
	checkPostCodeLoading: false,
})

export const checkPostCodeSuccess = (state, { payload }) => ({
	...state,
	checkPostCodeResponse: payload,
	checkPostCodeLoading: false,
})

export const checkPostCodeFailure = state => ({
	...state,
	checkPostCodeError: true,
	checkPostCodeLoading: false,
})

export const clearPostCodeCheckingRequest = state => ({
	...state,
	clearPostCodeCheckingError: initialState.clearPostCodeCheckingError,
})

export const clearPostCodeCheckingSuccess = state => ({
	...state,
	checkPostCodeResponse: '',
})

export const clearPostCodeCheckingFailure = (state, { payload }) => ({
	...state,
	clearPostCodeCheckingError: payload,
})

export const checkOfficeCodeRequest = state => ({
	...state,
	checkOfficeCodeLoading: false,
})

export const checkOfficeCodeSuccess = (state, { payload }) => ({
	...state,
	checkOfficeCodeResponse: payload,
	checkOfficeCodeLoading: false,
})

export const checkOfficeCodeFailure = state => ({
	...state,
	checkOfficeCodeError: true,
	checkOfficeCodeLoading: false,
})

export const cleanEmailChecker = state => ({
	...state,
	checkEmailUsedResponse: '',
	checkEmailUsedLoading: false,
	checkEmailUsedError: '',
})

export default initialState
