import { Box, CssBaseline, Toolbar } from "@mui/material";
import React, { useState } from "react";
import GuestSidebar from "../../../components/commonComponent/Guest/Sidebar/guestSidebar.index";
import useStyles from "./guestDashboard.style";

const GuestDashboard: React.FC<any> = ({ children }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <GuestSidebar />

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
export default GuestDashboard;
