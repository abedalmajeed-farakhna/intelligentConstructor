import React from "react";
import AccountMenu from "../../../components/CoreComponents/AccountMenu/accountMenu.Index";
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
