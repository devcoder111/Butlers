import { all } from 'redux-saga/effects'

import authSagas from './auth/sagas'
import registrationSagas from './registration/sagas'
import profileSagas from './profile/sagas'
import subscriptionsSagas from './subscriptions/sagas'
import basketSagas from './basket/sagas'
import servicesSagas from './services/sagas'
import tailoringSagas from './tailoring/sagas'
import favoritesSagas from './favorites/sagas'
import orderSagas from './orders/sagas'
import locationsSagas from './locations/sagas'
import chatSagas from './chat/sagas'

export default function* root() {
	yield all([
		...authSagas,
		...registrationSagas,
		...profileSagas,
		...subscriptionsSagas,
		...basketSagas,
		...servicesSagas,
		...tailoringSagas,
		...favoritesSagas,
		...orderSagas,
		...locationsSagas,
		...chatSagas,
	])
}
