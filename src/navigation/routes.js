import AuthStack from './AuthStack'
import AppTabs from './AppTabs'
import Loading from '../screens/Auth/Loading'

const Routes = {
	Loading: {
		screen: Loading,
	},
	App: {
		screen: AppTabs,
	},
	Auth: {
		screen: AuthStack,
	},
}

export default Routes
