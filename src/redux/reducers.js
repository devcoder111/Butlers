import { combineReducers } from 'redux'

import auth from './auth'
import registration from './registration'
import profile from './profile'
import subscriptions from './subscriptions'
import basket from './basket'
import services from './services'
import tailoring from './tailoring'
import favorites from './favorites'
import orders from './orders'
import locations from './locations'
import chat from './chat'

const rootReducer = combineReducers({
	auth,
	registration,
	profile,
	subscriptions,
	basket,
	services,
	tailoring,
	favorites,
	orders,
	locations,
	chat,
})

export default rootReducer
