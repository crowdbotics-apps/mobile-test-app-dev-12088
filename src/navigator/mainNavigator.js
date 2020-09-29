import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen111349Navigator from '../features/CopyOfBlankScreen111349/navigator';
import BlankScreen111348Navigator from '../features/BlankScreen111348/navigator';
import BlankScreen011347Navigator from '../features/BlankScreen011347/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen111349: { screen: CopyOfBlankScreen111349Navigator },
BlankScreen111348: { screen: BlankScreen111348Navigator },
BlankScreen011347: { screen: BlankScreen011347Navigator },

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
