import {
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from "./types";
import firebase from "react-native-firebase";
import { Actions } from "react-native-router-flux";

export const loginUser = ({ email, password }) => {
    console.log("login");
    console.log(email, password);
    return dispatch => {
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

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
    // console.log("success");
    Actions.main();
    // console.log("after");
};
