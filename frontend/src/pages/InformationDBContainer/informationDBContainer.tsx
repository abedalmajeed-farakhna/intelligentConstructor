import React, { useState } from "react";
import { useSelector } from "react-redux";
import { userTypeEnum } from "../../enums/userTypeEnum";
import { IApplicationState } from "../../redux/ApplicationState";
import { IUser } from "../../types/types";
import InformationConstuctor from "../Constuctor/InformationConstuctor/informationConstuctor.index";
import CraftsmanInformation from "../Craftsman/InformationPage/craftsmanInformation.index";
import GuestInformation from "../Guest/InformationDB/guestInformation.index";


const InformationDBContainer: React.FC<any> = ({ children }) => {
  const user: IUser = useSelector((state: IApplicationState) => state.user);

  switch (user.type) {
    case userTypeEnum.CRAFTSMAN:
      return <CraftsmanInformation />;

    case userTypeEnum.GUEST:
        return <GuestInformation />;

    case userTypeEnum.CONSTRUCTOR:
          return <InformationConstuctor />;
  
  }
  return(<></>)
};
export default InformationDBContainer;
