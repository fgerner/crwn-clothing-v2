import {createAction} from "../../utils/reducer/reducer.utils";
import {USER_ACION_TYPES} from "./user.types";

export const setCurrentUser = (user) => createAction(USER_ACION_TYPES.SET_CURRENT_USER, user)