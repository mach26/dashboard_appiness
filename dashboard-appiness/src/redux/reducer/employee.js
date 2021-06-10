import { FECTH_EMPLOYEE_LIST } from "../types";

const initialState = {
  employeeList: []
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case FECTH_EMPLOYEE_LIST:
        return {...state,"employeeList":action.payload}
    default:
      return state;
  }
}