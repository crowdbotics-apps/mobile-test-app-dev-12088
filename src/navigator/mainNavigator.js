import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen011363Navigator from '../features/CopyOfBlankScreen011363/navigator';
import BlankScreen011361Navigator from '../features/BlankScreen011361/navigator';
import CopyOfBlankScreen011359Navigator from '../features/CopyOfBlankScreen011359/navigator';
import BlankScreen011358Navigator from '../features/BlankScreen011358/navigator';
import BlankScreen111356Navigator from '../features/BlankScreen111356/navigator';
import BlankScreen011355Navigator from '../features/BlankScreen011355/navigator';
import CopyOfBlankScreen011353Navigator from '../features/CopyOfBlankScreen011353/navigator';
import BlankScreen011352Navigator from '../features/BlankScreen011352/navigator';
import BlankScreen011350Navigator from '../features/BlankScreen011350/navigator';
import CopyOfBlankScreen111349Navigator from '../features/CopyOfBlankScreen111349/navigator';
import BlankScreen011347Navigator from '../features/BlankScreen011347/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen011363: { screen: CopyOfBlankScreen011363Navigator },
BlankScreen011361: { screen: BlankScreen011361Navigator },
CopyOfBlankScreen011359: { screen: CopyOfBlankScreen011359Navigator },
BlankScreen011358: { screen: BlankScreen011358Navigator },
BlankScreen111356: { screen: BlankScreen111356Navigator },
BlankScreen011355: { screen: BlankScreen011355Navigator },
CopyOfBlankScreen011353: { screen: CopyOfBlankScreen011353Navigator },
BlankScreen011352: { screen: BlankScreen011352Navigator },
BlankScreen011350: { screen: BlankScreen011350Navigator },
CopyOfBlankScreen111349: { screen: CopyOfBlankScreen111349Navigator },
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
