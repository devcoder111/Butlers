import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Routes from './routes';
import RouterConfig from './routerConfig';

export default createMaterialBottomTabNavigator(Routes, RouterConfig);
