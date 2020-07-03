import Icon from '../../../assets/index'
import { colors } from '../../../styles'

import Main from './MainStack'
import Favourites from './FavouritesStack'
import Orders from './OredersStack'
import Profile from './ProfileStack'

const Routes = {
	Main: {
		screen: Main,
		navigationOptions: {
			tabBarColor: colors.white,
			tabBarIcon: ({ tintColor }) => Icon('Main', tintColor),
		},
	},
	Favourites: {
		screen: Favourites,
		navigationOptions: {
			tabBarColor: colors.white,
			tabBarIcon: ({ tintColor }) => Icon('Favorites', tintColor),
		},
	},
	Orders: {
		screen: Orders,
		navigationOptions: {
			tabBarColor: colors.white,
			tabBarIcon: ({ tintColor }) => Icon('Orders', tintColor),
		},
	},
	Profile: {
		screen: Profile,
		navigationOptions: {
			tabBarColor: colors.white,
			tabBarIcon: ({ tintColor }) => Icon('Account', tintColor),
		},
	},
}

export default Routes
