import { getToken, getUser } from '../../helpers/storage/auth'

const storageUser = getUser()
const storageToken = getToken()

const initialState = {
	authenticated: false,
	token: storageToken || '',
	user: storageUser || {},
	isLoginLoading: false,
	isLoginError: false,
	isAuthenticatedLoading: true,
	isAuthenticatedError: false,
	registered: false,
	registerError: '',
	isRegisterLoading: false,
	emailSendError: '',
	emailSendLoading: false,
	resetPasswordError: '',
	resetPasswordLoading: false,
	updateCustomerDataLoading: false,
	updateCustomerDataError: '',
	updateCustomerDataSuccess: false,
	sendSMSResponse: '',
	sendSMSLoading: false,
	sendSMSError: '',
	checkSMSResponse: '',
	checkSMSLoading: false,
	checkSMSError: false,
}

export const logInRequest = state => ({
	...state,
	authenticated: false,
	isLoginError: initialState.isLoginError,
	isLoginLoading: true,
})

export const logInSuccess = (state, { payload }) => ({
	...state,
	authenticated: true,
	token: payload.token,
	user: payload.user,
	isLoginLoading: false,
})

export const logInFailure = (state, { payload }) => ({
	...state,
	authenticated: false,
	isLoginError: payload,
	isLoginLoading: false,
})

export const isAuthenticatedRequest = state => ({
	...state,
})

export const isAuthenticatedSuccess = (state, { payload }) => ({
	...state,
	authenticated: true,
	token: payload.token,
	user: payload.user,
	isAuthenticatedLoading: false,
})

export const isAuthenticatedFailure = (state, { payload }) => ({
	...state,
	authenticated: false,
	isAuthenticatedError: payload,
	isAuthenticatedLoading: false,
})

export const logoutRequest = state => ({
	...state,
	error: initialState.error,
	isLoading: true,
})

export const logoutSuccess = () => ({
	...initialState,
	authenticated: false,
	isAuthenticatedLoading: false,
	isLoading: false,
})

export const logoutFailure = (state, { payload }) => ({
	...state,
	error: payload,
	isEmailSendLoading: false,
})

export const sendEmailForChangingPasswordRequest = state => ({
	...state,
	emailSendError: initialState.emailSendError,
	emailSendLoading: true,
})

export const sendEmailForChangingPasswordSuccess = (state, { payload }) => ({
	...state,
	emailSendError: payload,
	emailSendLoading: false,
})

export const sendEmailForChangingPasswordFailure = (state, { payload }) => ({
	...state,
	error: payload,
	emailSendError: payload,
	emailSendLoading: false,
})

export const resetPasswordRequest = state => ({
	...state,
	resetPasswordLoading: true,
})

export const resetPasswordSuccess = (state, { payload }) => ({
	...state,
	resetPasswordError: payload,
	resetPasswordLoading: false,
})

export const resetPasswordFailure = (state, { payload }) => ({
	...state,
	resetPasswordError: payload,
	resetPasswordLoading: false,
})

export const updateCustomerDataRequest = state => ({
	...state,
	updateCustomerDataLoading: true,
})

export const updateCustomerDataSuccess = (state, { payload }) => ({
	...state,
	user: payload,
	updateCustomerDataSuccess: true,
	updateCustomerDataLoading: false,
})

export const updateCustomerDataFailure = (state, { payload }) => ({
	...state,
	updateCustomerDataError: payload,
	updateCustomerDataLoading: false,
})

export const sendVerifySmsRequest = state => ({
	...state,
	sendSMSLoading: true,
})

export const sendVerifySmsSuccess = (state, { payload }) => ({
	...state,
	sendSMSResponse: payload,
	sendSMSLoading: false,
})

export const sendVerifySmsFailure = (state, { payload }) => ({
	...state,
	sendSMSError: payload,
	sendSMSLoading: false,
})

export const checkVerifySmsRequest = state => ({
	...state,
	checkSMSLoading: true,
})

export const checkVerifySmsSuccess = (state, { payload }) => ({
	...state,
	checkSMSResponse: payload,
	checkSMSLoading: false,
})

export const checkVerifySmsFailure = state => ({
	...state,
	checkSMSError: true,
	checkSMSLoading: false,
})

export const checkInformationUpdatedFlagRequest = state => ({
	...state,
	updateCustomerDataSuccess: false,
})

export default initialState
