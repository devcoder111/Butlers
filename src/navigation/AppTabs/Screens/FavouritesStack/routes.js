import FavouritesHome from '../../../../screens/App/Favourites/FavouritesHome'

import WhiteLayoutHOC from '../../../../hoc/WhiteLayoutHOC/WhiteLayoutHOC'

const Routes = {
	FavouritesHome: {
		screen: WhiteLayoutHOC(FavouritesHome),
	},
}

export default Routes
