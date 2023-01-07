import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { IApplicationState } from "../../redux/ApplicationState";
import { IUser } from "../../types/types";

const RedirectToLogin: React.FC<any> = ({ children }) => {
  const user: IUser = useSelector((state: IApplicationState) => state.user);
  if (!user.username) {
    return <Navigate replace to="/login" />;
  }
  return children;
};
export default RedirectToLogin;