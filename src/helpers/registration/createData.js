/* eslint-disable camelcase */
import { select } from 'redux-saga/effects'

import {
	getFirstName,
	getLastName,
	getBirthday,
	getPhone,
	getEmail,
	getAboutUs,
	getAddress,
	getPassword,
	getPasswordConfirmation,
	getCompanyId,
} from '../../redux/selectors'

export default function* createData(type) {
	switch (type) {
		case 'viaEmail': {
			const first_name = yield select(getFirstName)
			const last_name = yield select(getLastName)
			const birthday = yield select(getBirthday)
			const phone = yield select(getPhone)
			const email = yield select(getEmail)
			const address = yield select(getAddress)
			const companyId = yield select(getCompanyId)
			const aboutUs = yield select(getAboutUs)
			const typeR = 'viaEmail'
			const password = yield select(getPassword)
			const c_password = yield select(getPasswordConfirmation)

			return {
				first_name,
				last_name,
				phone,
				email,
				as_office_client: 0,
				password,
				c_password,
			}
		}
		case 'viaPhone': {
			const first_name = yield select(getFirstName)
			const last_name = yield select(getLastName)
			const birth_date = yield select(getBirthday)
			const phone = yield select(getPhone)
			const email = yield select(getEmail)
			const address = yield select(getAddress)
			const agreement_number = yield select(getCompanyId)
			const aboutUs = yield select(getAboutUs)
			const typeR = 'viaPhone'
			const password = yield select(getPassword)
			const c_password = yield select(getPasswordConfirmation)

			return {
				first_name,
				last_name,
				phone,
				email,
				as_office_client: agreement_number ? 1 : 0,
				password,
				c_password,
				agreement_number,
				aboutUs,
				birth_date,
			}
		}
		case 'viaFacebook': {
			const phone = yield select(getPhone)
			const email = yield select(getEmail)
			const address = yield select(getAddress)
			const typeR = 'viaFacebook'

			return {
				typeR,
				phone,
				email,
				address,
			}
		}
		default:
			return ''
	}
}
