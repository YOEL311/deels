/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
// import AppContainer from './src/screens/test';
import App from './src/screens/App';
// import App from './src/screens/App2';
// import {HomeScreen} from './src/router/routers';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
