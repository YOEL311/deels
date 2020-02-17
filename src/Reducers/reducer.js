import { combineReducers } from 'redux';
import {
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from "../actions/types";

const INITIAL_STATE = {
    email: "",
    password: "",
    user: null,
    loading: false,
    error: ""
};

// const INITIAL_STATE = { isLogin: false }
const loginReducer = (state = INITIAL_STATE, action) => {
    console.log("reducer", action.type);
    switch (action.type) {
        case 'LOGIN': {
            return INITIAL_STATE;
        }
        default:
            return state;
    }
};

export default loginReducer;