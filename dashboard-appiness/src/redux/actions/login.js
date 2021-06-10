import { ON_LOGIN } from "../types"

export function onLogin(payload) {
    return {
        type: ON_LOGIN,
        payload
    }
}