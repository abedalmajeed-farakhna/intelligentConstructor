import { Box, Toolbar } from "@mui/material";
import React from "react";
import GuestSidebar from "../../../components/commonComponent/Guest/Sidebar/guestSidebar.index";
import useStyles from "./guestDashboard.style";

const GuestDashboard: React.FC<any> = ({ children }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <GuestSidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${200}px)` },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
export default GuestDashboard;