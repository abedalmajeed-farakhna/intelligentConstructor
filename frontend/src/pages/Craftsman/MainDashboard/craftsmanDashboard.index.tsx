import { Box, CssBaseline, Toolbar } from "@mui/material";
import React, { useState } from "react";
import CraftsmanSidebar from "../../../components/commonComponent/Craftsman/SideBar/craftsmanSidebar.index";

import useStyles from "./craftsmanDashboard.style";

const CraftsmanDashboard: React.FC<any> = ({ children }) => {
  const classes = useStyles();
  console.log("CraftsmanDashboard");

  return (
    <Box className={classes.root}>
      <CraftsmanSidebar />
      
      <Box  className={classes.main}
        component="main"
      
      >
       {children}
      </Box>
    </Box>
  );
};
export default CraftsmanDashboard;
