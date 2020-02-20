import React from 'react';
import {StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import RouteConfigs from '../router/routers';
import Icon from 'react-native-vector-icons/Entypo';
import CustomDrawer from './Drawer';

const navigationOptionsHeader = ({navigation}) => {
  return {
    drawerBackgroundColor: '#f4f5f8',
    headerTitle: () => null,
    headerStyle: {
      backgroundColor: '#3c7fbf',
    },

    headerTitleStyle: {
      fontWeight: 'bold',
    },

    headerTintColor: 'black',

    headerLeft: () => (
      <Icon
        style={{padding: 10}}
        onPress={() => {
          navigation.toggleDrawer();
        }}
        color={'white'}
        name="menu"
        size={30}
      />
    ),
  };
};

const DrawerNavigatorConfig = {
  contentComponent: CustomDrawer,
  drawerBackgroundColor: '#f4f5f8',
  mode: 'modal',
  // drawerPosition: 'right',
  drawerType: 'slide',
  headerMode: 'float',
  // paddingBottom: 30,

  // intialRouteName: 'DetailsScreen',
  intialRouteName: 'HomeScreen',
  drawerType: 'slide',
  // drawerWidth: 190,
  // overlayColor: 0,
};

const HomeDrawerNavigator = createDrawerNavigator(
  RouteConfigs,
  DrawerNavigatorConfig,
);
const StackRouteConfigs = {
  HomeStackNavigator: {
    screen: HomeDrawerNavigator,
  },
};

const StackNavigatorConfig2 = {
  defaultNavigationOptions: navigationOptionsHeader,
};

const AppStack = createStackNavigator(StackRouteConfigs, StackNavigatorConfig2);
// export default createAppContainer(AppStack);

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import reducer from '../Reducers';
import ReduxThunk from 'redux-thunk';

export const store = createStore(reducer, applyMiddleware(ReduxThunk));
const AppContainer = createAppContainer(AppStack);

export default RNRedux = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);
