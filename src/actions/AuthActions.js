import {
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    LOGOUT_USER,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_FAIL
} from "./types";
import firebase from "react-native-firebase";
// import { Actions } from "react-native-router-flux";
export const logOUtUser = () => {
    return dispatch => {
        // dispatch({ type: LOGOUT_USER });
        firebase.
            auth().signOut().then(() => {
                console.log("logout user success");
                logoutUserSuccess(dispatch)
            })
            .catch(error => {
                console.log(error);
                logoutUserFail(dispatch);
            })

    }
}


export const loginUser = ({ email, password }) => {
    console.log("login");
    console.log(email, password);
    return dispatch => {
        console.log(dispatch);
        dispatch({ type: LOGIN_USER });
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(user => {
                console.log("login");
                loginUserSuccess(dispatch, user);
            })
            .catch(error => {
                console.log("er sign", error);
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then(user => {
                        console.log("succes create", user);
                        loginUserSuccess(dispatch, user)
                    })
                    .catch(() => {
                        console.log("error create");
                        loginUserFail(dispatch)
                    });
            });
    };
};

const loginUserFail = dispatch => {
    dispatch({ type: LOGIN_USER_FAIL });
};

const logoutUserFail = dispatch => {
    dispatch({ type: LOGOUT_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {

    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
};

const logoutUserSuccess = (dispatch) => {
    console.log("logout user Action");
    // return { type: LOGOUT_USER_SUCCESS }
    dispatch({
        type: LOGOUT_USER_SUCCESS,
    });
};
