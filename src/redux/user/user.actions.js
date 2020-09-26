import {UserActionTypes} from "./user.types.js";

export const setCurrentUser = (user) => {
    return {
        type: UserActionTypes.SET_CURRENT_USER,
        payload: user
    }
}