import { combineReducers } from 'redux';

const INITIAL_STATE = { a: "ss", b: "jhihjk" }
const friendReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_FRIEND': {
            return INITIAL_STATE;
        }
        default:
            return state;
    }
};

export default combineReducers({
    friends: friendReducer,
});