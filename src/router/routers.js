import HomeScreen from '../screens/HomeScreen'
import DetailsScreen from '../screens/DetailsScreen'
import SettingScreen from '../screens/SettingScreen'
import DeelScreen from '../screens/DellsScreen'

export default RouteConfigs = {
    HomeScreen: {//Title
        screen: DeelScreen,
        navigationOptions: {
            drawerLabel: "הדילים שלנו"
        }
    },
    DetailsScreen: { //Title
        screen: DetailsScreen,
        navigationOptions: {
            drawerLabel: "לקוחות ממליצים"
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
            drawerLabel: "שלחו לנו ההודעה"
        }
    },
    Screen6: {
        screen: HomeScreen,
        navigationOptions: {
            drawerLabel: "אודותינו"
        }
    },
    Screen7: {
        screen: HomeScreen,
        navigationOptions: {
            drawerLabel: "תקנון"
        }
    },
    SettingScreen: {
        screen: SettingScreen,
        navigationOptions: {
            drawerLabel: "הגדרות"
        }
    },
};