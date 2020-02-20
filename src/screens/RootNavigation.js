import {NavigationActions} from 'react-navigation';

let navigator;

// nav is coming from react navigation
export const setNavigator = navRef => {
  console.log('navigation ref', navRef);
  // set navigator
  navigator = navRef;
};

export const navigate = (routeName, params) => {
  console.log('[navigate dispatch] navigator', navigator);
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
};
