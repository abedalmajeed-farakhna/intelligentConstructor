import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import { IApplicationState } from "../../../redux/ApplicationState";
import { IUser } from "../../../types/types";
import useStyles from "./mainDashboard.style";
import ConstuctorSidebar from "../../../components/commonComponent/Constuctor/Sidebar/constuctorSidebar.index";
import GridLayout from "react-grid-layout";
import Widget from "../../../components/CoreComponents/Widget/widget.index";


const MainDashboard: React.FC<any> = ({ children }) => {
 
    const data =[{path:"path",element:"element"}]

  return (
   <>
   <Widget title={"Last 5 Project"} data={data}/>   </>
  );
};
export default MainDashboard;