import { Box, Container } from "@mui/material";
import React from "react";
import AccountMenu from "../../components/AccountMenu/accountMenu.Index";
import Navbar from "../../components/Navbar/navbar.index";
import DashboardContainer from "./dashboardContainer";

const MainDashboard: React.FC<any> = ({ children }) => {
  return (
    <>
      <AccountMenu />
      <DashboardContainer>{children}</DashboardContainer>
    </>
  );
};
export default MainDashboard;
