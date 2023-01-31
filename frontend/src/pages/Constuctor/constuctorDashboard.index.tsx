import React, { useState } from "react";
import { IUser } from "../../types/types";
import { useSelector } from "react-redux";
import { IApplicationState } from "../../redux/ApplicationState";
import { Box } from "@mui/material";
import useStyles from "./constuctorDashboard.style";
import ConstuctorSidebar from "../../components/commonComponent/Constuctor/Sidebar/constuctorSidebar.index";

const ConstuctorDashboard: React.FC<any> = ({ children }) => {
  const user: IUser = useSelector((state: IApplicationState) => state.user);
  //console.log(queryString.parse(location.search),"location")
  const classes = useStyles();
  return (
    <Box  className={classes.root}>
      <ConstuctorSidebar />

      <Box   className={classes.main}>{children} </Box>
    </Box>
  );
};
export default ConstuctorDashboard;