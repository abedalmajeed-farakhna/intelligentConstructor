import { combineReducers } from "redux";
import { IApplicationState } from "../redux/ApplicationState";
import userReducer from "./reducers/userReducer";


export const rootReducer = combineReducers<IApplicationState>({
    user: userReducer,
});