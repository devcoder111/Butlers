import OrdersHome from '../../../../screens/App/Orders/OrdersHome/OrdersHomeContainer'
import Order from '../../../../screens/App/Orders/Order/Order'

import WhiteLayoutHOC from '../../../../hoc/WhiteLayoutHOC'

const Routes = {
	OrdersHome: {
		screen: WhiteLayoutHOC(OrdersHome),
	},
	Order: {
		screen: WhiteLayoutHOC(Order),
	},
}

export default Routes
