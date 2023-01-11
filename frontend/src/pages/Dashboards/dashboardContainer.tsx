import React, { useState } from "react";
import { useSelector } from "react-redux";

import { IApplicationState } from "../../redux/ApplicationState";
import { IUser } from "../../types/types";
import { userTypeEnum } from "../../enums/userTypeEnum";

import AdminDashboard from "./Admin/adminDashboard";
import CraftsmanDashboard from "./Craftsman/craftsmanDashboard";
import ConstuctorDashboard from "./Constuctor/constuctorDashboard";
import GuestDashboard from "./Guest/Dashboard/guestDashboard.index";

const DashboardContainer:React.FC<any> = ({children}) => {
  

  
  const user: IUser = useSelector((state: IApplicationState) => state.user);
console.log(user.type,"user.type")
  switch (user.type) {
    case userTypeEnum.ADMIN:
      return <AdminDashboard >{children}</AdminDashboard >;

    case userTypeEnum.CRAFTSMAN:
      return <CraftsmanDashboard >{children}</CraftsmanDashboard>;

    case userTypeEnum.CONSTRUCTOR:
      return <ConstuctorDashboard >{children}</ConstuctorDashboard >;
     
    case userTypeEnum.GUEST:
        return <GuestDashboard >{children}</GuestDashboard >;
  }
};
export default DashboardContainer;