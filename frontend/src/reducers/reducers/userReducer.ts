import { createAction, createReducer } from "redux-act";
import { IUser } from "../../types/types";
import { userTypeEnum } from "../../enums/userTypeEnum";

export const setUser = createAction<IUser>("set IUser");

export const userInitialSate: IUser = {
  fullName: "",
  type: userTypeEnum.NONE,
  username: "",
  id:0
};

const UserReducer = createReducer<IUser>({}, userInitialSate);

UserReducer.on(setUser, (state, payload) => ({ ...state, ...payload }));

export default UserReducer;