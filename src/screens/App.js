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


// const Navigator = createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig);
// export default createAppContainer(Navigator);




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
    headerTitle:'dddd',
    headerStyle: {
      backgroundColor: 'blue',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      color: 'gray',
      backgroundColor: 'black',

    },

    headerRight: () => <Icon
      style={{ paddingLeft: 10 }}
      onPress={() => {
        navigation.toggleDrawer();
      }}
      name="menu"
      size={30}
    />,
  }
}
const StackNavigatorConfig = {
  contentComponent: CustomDrawer,

  mode: 'modal',
  headerMode: 'float',
  intialRouteName: 'DetailsScreen',
}
const HomeStackNavigator = createDrawerNavigator(RouteConfigs2, StackNavigatorConfig);
const DrawerRouteConfigs = {
  // Home: HomeStackNavigator,

  DetailsScreen: { //Title
    screen: HomeStackNavigator,
    defaultNavigationOptions: {
      drawerLabel: "wwwww"
    }
  },

}

const DrawerNavigatorConfig2 = {
  defaultNavigationOptions: navigationOptionsHeader,
  mode: 'modal',
  intialRouteName: 'DetailsScreen',
  drawerType: 'slide',
}
const AppDrawer = createStackNavigator(DrawerRouteConfigs, DrawerNavigatorConfig2);
export default createAppContainer(AppDrawer);
