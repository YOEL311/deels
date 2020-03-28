/**
 * @format
 */

import 'react-native';
import React from 'react';
// import App from '../src/screens/App';

// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';

jest.mock('react-native-reanimated', () =>
  jest.requireActual('../node_modules/react-native-reanimated/mock'),
);
jest.mock('react-native-simple-toast', () => ({
  SHORT: jest.fn(),
}));
jest.mock('react-native-firebase', () => ({
  messaging: jest.fn(() => ({
    hasPermission: jest.fn(() => Promise.resolve(true)),
    subscribeToTopic: jest.fn(),
    unsubscribeFromTopic: jest.fn(),
    requestPermission: jest.fn(() => Promise.resolve(true)),
    getToken: jest.fn(() => Promise.resolve('myMockToken')),
  })),
  notifications: jest.fn(() => ({
    onNotification: jest.fn(),
    onNotificationDisplayed: jest.fn(),
  })),
  analytics: jest.fn(() => ({
    logEvent: jest.fn(),
  })),
}));
jest.mock('react-native-localize', () => ({
  getLocales: () => [
    {countryCode: 'GB', languageTag: 'en-GB', languageCode: 'en', isRTL: false},
    {countryCode: 'US', languageTag: 'en-US', languageCode: 'en', isRTL: false},
    {countryCode: 'FR', languageTag: 'fr-FR', languageCode: 'fr', isRTL: false},
  ],

  getNumberFormatSettings: () => ({
    decimalSeparator: '.',
    groupingSeparator: ',',
  }),

  getCalendar: () => 'gregorian', // or "japanese", "buddhist"
  getCountry: () => 'US', // the country code you want
  getCurrencies: () => ['USD', 'EUR'], // can be empty array
  getTemperatureUnit: () => 'celsius', // or "fahrenheit"
  getTimeZone: () => 'Europe/Paris', // the timezone you want
  uses24HourClock: () => true,
  usesMetricSystem: () => true,

  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
}));
jest.mock('react-navigation-drawer', () => {
  return {
    createDrawerNavigator: jest.fn().mockImplementation(nav => {
      return {};
    }),
  };
});
global.console.warn = message => {};

global.console.error = message => {};

// jest.spyOn(console, 'log').mockImplementation(() => {});

// jest.mock('native-base-shoutem-theme', () =>
//   jest.requireActual('../node_modules/native-base-shoutem-theme/mock'),
// );
jest.mock('react-navigation', () => ({
  withNavigation: Component => props => (
    <Component navigation={{navigate: jest.fn()}} {...props} />
  ),
  SafeAreaView: ({children}) => <>{children}</>,
}));

// jest.mock('react-navigation-stack', () => {
//   return {
//     createStackNavigator: jest.fn().mockImplementation(nav => {
//       return {};
//     }),
//   };
// });
jest.mock('react-navigation', () => {
  return {
    createAppContainer: jest
      .fn()
      .mockReturnValue(function NavigationContainer(props) {
        return null;
      }),
    createDrawerNavigator: jest.fn(),
    createMaterialTopTabNavigator: jest.fn(),
    createStackNavigator: jest.fn(),
    StackActions: {
      push: jest
        .fn()
        .mockImplementation(x => ({...x, type: 'Navigation/PUSH'})),
      replace: jest
        .fn()
        .mockImplementation(x => ({...x, type: 'Navigation/REPLACE'})),
      reset: jest.fn(),
    },
    NavigationActions: {navigate: jest.fn().mockImplementation(x => x)},
  };
});
jest.mock('react-navigation-stack', () => {
  return {
    // createAppContainer: jest
    //   .fn()
    //   .mockReturnValue(function NavigationContainer(props) {
    //     return null;
    //   }),

    createDrawerNavigator: jest.fn(),
    createMaterialTopTabNavigator: jest.fn(),
    createStackNavigator: jest.fn(),
    StackActions: {
      push: jest
        .fn()
        .mockImplementation(x => ({...x, type: 'Navigation/PUSH'})),
      replace: jest
        .fn()
        .mockImplementation(x => ({...x, type: 'Navigation/REPLACE'})),
      reset: jest.fn(),
    },
    NavigationActions: {
      navigate: jest.fn().mockImplementation(x => x),
    },
  };
});
// jest.mock('react-navigation-stack', () => {
//   return {Header: () => 'whatever'};
// });
// it('renders correctly', () => {
//   renderer.create(<App />);
// });
