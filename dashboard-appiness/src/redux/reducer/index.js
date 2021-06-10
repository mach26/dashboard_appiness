
import { combineReducers } from "redux";
import employee from "./employee";
import login from "./login";

const rooReducer = combineReducers({
    login,
    employee
});

export default rooReducer;