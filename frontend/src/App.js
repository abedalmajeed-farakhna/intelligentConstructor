import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";

import RedirectToLogin from "./utils/Redirections/redirectToLogin";
import RedirectToHome from "./utils/Redirections/redirectToHome";
import { PATH_NAMES } from "./constants/route";
import Logout from "./pages/Authentication/Logout/logout.index";
import { theme } from "./theme/themeProvider";
import Login from "./pages/Authentication/Login/Login.tsx"
import InformationDBContainer from "./pages/InformationDBContainer/informationDBContainer";
import CraftsmanList from "./pages/Guest/CraftsmanList/craftsmanList.index";
import MainDashboard from "./pages/Containers/Dashboards/mainDashboard";
import SignUp from "./pages/Authentication/SignUp/SignUp";
import Main from "./pages/Main/Main";


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <RedirectToHome>
                <Main />
              </RedirectToHome>
            }
          />

          <Route
            path={PATH_NAMES.LOGIN}
            element={
              <RedirectToHome>
                <Login />
              </RedirectToHome>
            }
          />

          <Route path={PATH_NAMES.SIGNUP} element={<SignUp />} />

          <Route
            path="/dashboard"
            element={
              <RedirectToLogin>
                <MainDashboard />
              </RedirectToLogin>
            }
          />

          <Route
            path={PATH_NAMES.INFORMATION}
            element={
              <RedirectToLogin>
                <MainDashboard>
                  <InformationDBContainer />
                </MainDashboard>
              </RedirectToLogin>
            }
          />
           <Route
            path={PATH_NAMES.CRAFTSMAN}
            element={
              <RedirectToLogin>
                <MainDashboard>
                  <CraftsmanList />
                </MainDashboard>
              </RedirectToLogin>
            }
          />

          <Route
            path={PATH_NAMES.Logout}
            element={
              <Logout>
                <Login />
              </Logout>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
