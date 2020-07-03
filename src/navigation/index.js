import { createSwitchNavigator } from 'react-navigation'

import Routes from './routes'
import RouterConfig from './routerConfig'

export default createSwitchNavigator(Routes, RouterConfig)
