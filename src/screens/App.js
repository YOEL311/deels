import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import { HomeScreen, DetailsScreen } from '../router/routers'
import { StyleSheet } from 'react-native'



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


// const Navigator = createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig);
// export default createAppContainer(Navigator);

// HomeScreen:
// DetailsScreen:



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
// import { DrawerNavigatorItems } from 'react-navigation-drawer';

const CustomDrawer = props => {
  return (
    <View style={{ flex: 1, }}>
      <Icon
        style={{ paddingLeft: 10 }}
        onPress={() => props.navigation.closeDrawer()}
        name="close"
        size={30}
      />
      <DrawerNavigatorItems {...props} />
    </View>
  );

};


const StackNavigatorConfig = {
  mode: 'modal',
  headerMode: 'float',
  // contentComponent: CustomDrawer,
  defaultNavigationOptions: {
    // headerL: "ssss",
    header: <Icon
      style={{ paddingLeft: 10 }}
      name="menu"
      size={30}
    />,
    title: 'jkhkjons',
    headerTitle: 'jhjtions',
    // headerLeft: (
    //   <Icon
    //     style={{ paddingLeft: 10 }}
    //     name="menu"
    //     size={30}
    //   />
    // ),
    // header: props => <AppBar {...props} searchable />,
    // headerLeft:                <Icon name="rocket1" size={30} color="#900" />,
    headerStyle: {
      backgroundColor: "blue"
    },
  },
}


export const HomeStackNavigator = createStackNavigator(RouteConfigs2, StackNavigatorConfig);

const DrawerRouteConfigs = {
  Home: HomeStackNavigator
}

const DrawerNavigatorConfig2 = {
  // contentComponent: (props) => <AppDrawer {...props} />,
  // contentComponent: CustomDrawer,
  drawerType: 'slide',
  initialRouteName: "Home",
  mode: 'modal'
}

const AppDrawer = createDrawerNavigator(DrawerRouteConfigs, DrawerNavigatorConfig2);

export default createAppContainer(AppDrawer);
