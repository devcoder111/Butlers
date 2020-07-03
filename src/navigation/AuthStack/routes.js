import Neighborhood from '../../screens/Auth/Registration/Intro/Neighborhood'
import WrongArea from '../../screens/Auth/Registration/Intro/WrongArea'
import SubscribeArea from '../../screens/Auth/Registration/Intro/SubscribeArea'
import StoreLocationsRegist from '../../screens/Auth/Registration/Intro/StoreLocations/StoreLocationsContainer'
import SearchStoreRegist from '../../screens/Auth/Registration/Intro/StoreLocations/SearchStore/StoreSearchContainer'
import NearestStoresRegist from '../../screens/Auth/Registration/Intro/StoreLocations/NearestStores/NearestStoresContainer'
import StoreInfoRegist from '../../screens/Auth/Registration/Intro/StoreLocations/StoreInfo/StoreInfo'
import SignUp from '../../screens/Auth/Registration/Intro/SignUp'
import Login from '../../screens/Auth/Login/LoginContainer'

import DeliverNow from '../../screens/Auth/Registration/shared/DeliverNow'
import Initials from '../../screens/Auth/Registration/shared/Initials'
import ConditionData from '../../screens/Auth/Registration/shared/Initials/ConditionData/ConditionData'
import Birthday from '../../screens/Auth/Registration/shared/Birthday'
import PhoneNumber from '../../screens/Auth/Registration/shared/PhoneNumber'
import Email from '../../screens/Auth/Registration/shared/Email'
import Address from '../../screens/Auth/Registration/shared/Address'
import Office from '../../screens/Auth/Registration/shared/Office'
import AboutUs from '../../screens/Auth/Registration/shared/AboutUs'
import Password from '../../screens/Auth/Registration/shared/Password'

import LoginEmail from '../../screens/Auth/Login/LoginEmail/LoginEmailContainer'
import RecoverPassword from '../../screens/Auth/PasswordRecovery/PasswordRecoveryContainer'
import RecoveryLink from '../../screens/Auth/PasswordRecovery/RecoveryLinkModal/RecoveryLinkModal'
import CreatePassword from '../../screens/Auth/PasswordRecovery/CreatePassword/CratePasswordContainer'

import SmsCode from '../../screens/Auth/Registration/viaPhone/SmsCode'
import Facebook from '../../screens/Auth/Registration/viaFacebook'
import Welcome from '../../screens/Auth/Registration/shared/Welcome/WelcomeContainer'

import WhiteLayoutHOC from '../../hoc/WhiteLayoutHOC'

const Routes = {
	Neighborhood: {
		screen: WhiteLayoutHOC(Neighborhood),
		params: { route: 'SignUp' },
	},
	WrongArea: {
		screen: WhiteLayoutHOC(WrongArea),
		params: { route: 'SignUp' },
	},
	SubscribeArea: {
		screen: WhiteLayoutHOC(SubscribeArea),
		params: { route: 'SubscribeArea' },
	},
	StoreLocationsRegist: {
		screen: WhiteLayoutHOC(StoreLocationsRegist),
		params: { route: 'StoreLocationsRegist' },
	},
	SearchStoreRegist: {
		screen: WhiteLayoutHOC(SearchStoreRegist),
	},
	NearestStoresRegist: {
		screen: WhiteLayoutHOC(NearestStoresRegist),
	},
	StoreInfoRegist: {
		screen: WhiteLayoutHOC(StoreInfoRegist),
	},
	SignUp: {
		screen: WhiteLayoutHOC(SignUp),
	},
	Initials: {
		screen: WhiteLayoutHOC(Initials),
		params: { route: 'Email' },
	},
	ConditionData: {
		screen: WhiteLayoutHOC(ConditionData),
	},
	Birthday: {
		screen: WhiteLayoutHOC(Birthday),
		params: {  viaPhone: 'Office' },
	},
	PhoneNumber: {
		screen: WhiteLayoutHOC(PhoneNumber),
		params: { viaPhone: 'SmsCode' },
	},
	SmsCode: {
		screen: WhiteLayoutHOC(SmsCode),
		params: { route: 'Birthday' },
	},
	Email: {
		screen: WhiteLayoutHOC(Email),
		params: { viaPhone: 'PhoneNumber' },
		// params: { route: 'Password', viaPhone: 'Password' },
	},
	Password: {
		screen: WhiteLayoutHOC(Password),
		params: { route: 'AboutUs' },
	},
	Address: {
		screen: WhiteLayoutHOC(Address),
		params: { viaPhone: 'Office' },
	},
	Office: {
		screen: WhiteLayoutHOC(Office),
		params: { route: 'Password', viaPhone: 'Password' }
		// params: { route: 'AboutUs' },
	},
	AboutUs: {
		screen: WhiteLayoutHOC(AboutUs),
		params: { route: 'Welcome' },
	},
	Facebook: {
		screen: WhiteLayoutHOC(Facebook),
		params: { route: 'Office' },
	},
	Login: {
		screen: WhiteLayoutHOC(Login),
	},
	LoginEmail: {
		screen: WhiteLayoutHOC(LoginEmail),
	},
	RecoverPassword: {
		screen: WhiteLayoutHOC(RecoverPassword),
	},
	RecoveryLink: {
		screen: WhiteLayoutHOC(RecoveryLink),
	},
	CreatePassword: {
		screen: WhiteLayoutHOC(CreatePassword),
	},
	Welcome: {
		screen: Welcome,
	},
	DeliverNow: {
		screen: WhiteLayoutHOC(DeliverNow),
	}
}

export default Routes
