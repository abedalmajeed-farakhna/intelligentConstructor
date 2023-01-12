import { Box, CssBaseline, Toolbar } from "@mui/material";
import React, { useState } from "react";
import CraftsmanSidebar from "../../../components/commonComponent/Craftsman/SideBar/craftsmanSidebar.index";

import useStyles from "./craftsmanDashboard.style";

const CraftsmanDashboard :React.FC<any>= ({children}) => {
  const classes = useStyles();
console.log("CraftsmanDashboard")

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <CraftsmanSidebar />
      
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${200}px)` },
        }}
      >
        <Toolbar />
       {children}
      </Box>
    </Box>
  );
};
export default CraftsmanDashboard;
