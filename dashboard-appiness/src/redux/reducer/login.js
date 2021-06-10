import { ON_LOGIN } from "../types";

const initialState = {
    userName: "",
    is_authenticated: false,
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case ON_LOGIN:
            return {
                ...state, "userName": action.payload,
                "is_authenticated": true
            }
        default:
            return state;
    }
}