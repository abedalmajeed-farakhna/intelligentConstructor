import { Box, Toolbar } from "@mui/material";
import React from "react";
import GuestSidebar from "../../../components/commonComponent/Guest/Sidebar/guestSidebar.index";
import MainDashboard from "../../Constuctor/MainDashboard/mainDashboard.index";
import useStyles from "./guestDashboard.style";

const GuestDashboard: React.FC<any> = ({ children }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <GuestSidebar />

      <Box className={classes.main}>

      {children ? children : <MainDashboard />}
      </Box>
    </Box>
  );
};
export default GuestDashboard;