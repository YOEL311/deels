import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import { HomeScreen, DetailsScreen } from '../router/routers'
import { StyleSheet } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Entypo";
import { CustomDrawer } from './App2'

const RouteConfigs = {
  HomeScreen: {//Title
    screen: HomeScreen,
    navigationOptions: {
      drawerLabel: "אודות"
    }
  },
  DetailsScreen: { //Title
    screen: DetailsScreen,
    navigationOptions: {
      drawerLabel: "wwwww"
    }
  },
  Screen3: {
    screen: HomeScreen,
    navigationOptions: {
      drawerLabel: "הממליצים שנו"
    }
  },
  Screen4: {
    screen: HomeScreen,
    navigationOptions: {
      drawerLabel: "הרשמה לחבר מועדון"
    }
  },
  Screen5: {
    screen: HomeScreen,
    navigationOptions: {
      drawerLabel: "הרשמה לחבר "
    }
  },
  Screen6: {//Title
    screen: HomeScreen,
    navigationOptions: {
      drawerLabel: "הרשמה לחבר מועדון"
    }
  },
  Screen7: {//Title
    screen: HomeScreen,
    navigationOptions: {
      drawerLabel: "הרשמה לחבר מועדון"
    }
  },
}

const DrawerNavigatorConfig = {
  intialRouteName: 'DetailsScreen',
  navigationOptions: {

    headerStyle: { backgroundColor: '#E73536' },
    title: 'You are not logged in',
    headerTintColor: 'white',
    headerTitleStyle: {
      color: 'blue',
    },
  },
  drawerType: 'slide',
  drawerBackgroundColor: '#f4f5f8',
  // drawerWidth: 190,
  overlayColor: 0,
};

const styles = StyleSheet.create({
  icon: {
    width: 48,
    height: 48,
  },
});



const RouteConfigs2 = {
  HomeScreen: {//Title
    screen: HomeScreen,
    defaultNavigationOptions: {
      drawerLabel: "אודות"
    }
  },
  DetailsScreen: { //Title
    screen: DetailsScreen,
    defaultNavigationOptions: {
      drawerLabel: "wwwww"
    }
  },
}
const navigationOptionsHeader = ({ navigation }) => {
  return {
    headerRight: <Icon
      style={{ paddingLeft: 10 }}
      onPress={() => {
        navigation.toggleDrawer();
      }}
      name="menu"
      size={30}
    />
  }
}
const StackNavigatorConfig = {
  mode: 'modal',
  headerMode: 'float',
  contentComponent: CustomDrawer,
  defaultNavigationOptions: navigationOptionsHeader,

}


export const HomeStackNavigator = createStackNavigator(RouteConfigs2, StackNavigatorConfig);

const DrawerRouteConfigs = {
  Home: HomeStackNavigator
}

const DrawerNavigatorConfig2 = {
  contentComponent: CustomDrawer,

  drawerType: 'slide',
  initialRouteName: "Home",
  mode: 'modal'
}

const AppDrawer = createDrawerNavigator(DrawerRouteConfigs, DrawerNavigatorConfig2);

export default createAppContainer(AppDrawer);
