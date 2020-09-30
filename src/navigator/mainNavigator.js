import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps118026Navigator from '../features/Maps118026/navigator';
import ArticleList118021Navigator from '../features/ArticleList118021/navigator';
import Maps118008Navigator from '../features/Maps118008/navigator';
import ArticleList117980Navigator from '../features/ArticleList117980/navigator';
import Maps117967Navigator from '../features/Maps117967/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps118026: { screen: Maps118026Navigator },
ArticleList118021: { screen: ArticleList118021Navigator },
Maps118008: { screen: Maps118008Navigator },
ArticleList117980: { screen: ArticleList117980Navigator },
Maps117967: { screen: Maps117967Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
