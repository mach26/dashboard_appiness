import { FECTH_EMPLOYEE_LIST } from "../types"

export function fetchEmployeeList(payload) {
    return {
        type: FECTH_EMPLOYEE_LIST,
        payload
    }
}