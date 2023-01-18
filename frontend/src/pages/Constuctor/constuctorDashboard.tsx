import React, { useState } from "react";
import { IUser } from "../../types/types";
import { useSelector } from "react-redux";
import { IApplicationState } from "../../redux/ApplicationState";

const ConstuctorDashboard:React.FC<any> = () => {
  const user: IUser = useSelector((state: IApplicationState) => state.user);
  //console.log(queryString.parse(location.search),"location")

  return (
    <>


    Constructo
        <div>Full Name : {user.fullName}</div>
        <div>UserName : {user.username}</div>
        <div>Type {user.type}</div>
        </>
      
  );
};
export default ConstuctorDashboard;
