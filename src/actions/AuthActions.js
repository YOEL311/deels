import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAIL,
} from './types';
import firebase from 'react-native-firebase';
import Toast from 'react-native-simple-toast';
import * as RootNavigation from '../../src/screens/RootNavigation';

export const logOUtUser = navigation => {
  return dispatch => {
    // dispatch({ type: LOGOUT_USER });
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log('logout user success');
        logoutUserSuccess(dispatch, navigation);
      })
      .catch(error => {
        console.log(error);
        logoutUserFail(dispatch);
      });
  };
};

export const registarUser = (email, password, name) => {
  console.log('registar');
  console.log(email, password, name);
  return dispatch => {
    // console.log(dispatch);
    // dispatch({type: LOGIN_USER});
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() =>
        firebase.auth().currentUser.updateProfile({
          displayName: name,
        }),
      )
      .then(() => {
        const newUser = firebase.auth().currentUser;
        console.log('then3', newUser);
        registerUserSuccess(dispatch, newUser);
      })
      .catch(er => {
        console.log('error create', er);
        loginUserFail(dispatch);
      });
  };
};
export const loginUser = (email, password, name) => {
  console.log('login');
  console.log(email, password);
  return dispatch => {
    // console.log(dispatch);
    dispatch({type: LOGIN_USER});
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        console.log('then2', user);
        loginUserSuccess(dispatch, user);
      })
      .catch(error => {
        console.log('error create');
        loginUserFail(dispatch);
      });
  };
};

const loginUserFail = dispatch => {
  dispatch({type: LOGIN_USER_FAIL});
};

const logoutUserFail = dispatch => {
  dispatch({type: LOGOUT_USER_FAIL});
};

const loginUserSuccess = (dispatch, user) => {
  // console.log('reducer', user);
  RootNavigation.navigate('HomeScreen');
  Toast.show('login success', Toast.LONG);
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user,
  });
};

const registerUserSuccess = (dispatch, user) => {
  // console.log('reducer', user);
  RootNavigation.navigate('HomeScreen');
  Toast.show('registaer success', Toast.LONG);
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user,
  });
};

const logoutUserSuccess = (dispatch, navigation) => {
  console.log('logout user Action');
  navigation.closeDrawer();
  Toast.show('logOut success', Toast.LONG);
  dispatch({
    type: LOGOUT_USER_SUCCESS,
  });
};
