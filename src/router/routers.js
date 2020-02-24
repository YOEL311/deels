import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import SettingScreen from '../screens/SettingScreen';
import DeelScreen from '../screens/DellsScreen';
import SignScreen from '../screens/user/Sign';
import RegistarScreen from '../screens/user/Registar';
import ForgotPasswordScreen from '../screens/user/ForgotPassword';

import {store} from '../screens/App';

const getLabelIsLogin = label =>
  function aFunction() {
    let user = store?.getState().auth.user;
    let result = user === null ? () => null : label;
    return result;
  };

const RouteConfigs = {
  HomeScreen: {
    //Title
    screen: DeelScreen,
    navigationOptions: {
      drawerLabel: 'הדילים שלנו',
    },
  },
  DetailsScreen: {
    //Title
    screen: DetailsScreen,
    navigationOptions: {
      drawerLabel: 'לקוחות ממליצים',
    },
  },
  Screen4: {
    screen: HomeScreen,
    navigationOptions: {
      drawerLabel: 'הרשמה לחבר מועדון',
    },
  },
  Screen5: {
    screen: HomeScreen,
    navigationOptions: {
      drawerLabel: 'שלחו לנו ההודעה',
    },
  },
  Screen6: {
    screen: HomeScreen,
    navigationOptions: {
      drawerLabel: 'אודותינו',
    },
  },
  Screen7: {
    screen: HomeScreen,
    navigationOptions: {
      drawerLabel: 'תקנון',
    },
  },
  SettingScreen: {
    screen: SettingScreen,
    navigationOptions: {
      drawerLabel: 'הגדרות',
    },
  },

  SignScreen: {
    screen: SignScreen,
    navigationOptions: {
      drawerLabel: getLabelIsLogin('כניסה'),
      // drawerLabel: 'כניסה 1',
    },
  },

  RegistarScreen: {
    screen: RegistarScreen,
    navigationOptions: {
      drawerLabel: () => null,
    },
  },

  ForgotPasswordScreen: {
    screen: ForgotPasswordScreen,
    navigationOptions: {
      drawerLabel: () => null,
    },
  },
};
export default RouteConfigs;
