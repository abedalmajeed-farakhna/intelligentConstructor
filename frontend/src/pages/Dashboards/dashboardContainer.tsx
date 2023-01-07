import React, { useState } from "react";
import { useSelector } from "react-redux";

import { IApplicationState } from "../../redux/ApplicationState";
import { IUser } from "../../types/types";
import { userTypeEnum } from "../../enums/userTypeEnum";

import AdminDashboard from "./Admin/adminDashboard";
import CraftsmanDashboard from "./Craftsman/craftsmanDashboard";
import ConstuctorDashboard from "./Constuctor/constuctorDashboard";

const DashboardContainer:React.FC<any> = ({children}) => {
  

  
  const user: IUser = useSelector((state: IApplicationState) => state.user);

  switch (user.type) {
    case userTypeEnum.ADMIN:
      return <AdminDashboard >{children}</AdminDashboard >;

    case userTypeEnum.CRAFTSMAN:
      return <CraftsmanDashboard >{children}</CraftsmanDashboard>;

    case userTypeEnum.CONSTRUCTOR:
      return <ConstuctorDashboard >{children}</ConstuctorDashboard >;
  }
};
export default DashboardContainer;
