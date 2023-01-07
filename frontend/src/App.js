import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import Main from "./pages/Main/Main.tsx";
import React from "react";
import Login from "./pages/Authentication/Login/Login.tsx";
import SignUp from "./pages/Authentication/SignUp/SignUp.tsx";

import MainDashboard from "./pages/Dashboards/mainDashboard";
import RedirectToLogin from "./utils/Redirections/redirectToLogin";
import RedirectToHome from "./utils/Redirections/redirectToHome";
import { PATH_NAMES } from "./constants/route";
import CraftsmanInformation from "./pages/CraftsmanInformation/craftsmanInformation.index";
import Logout from "./pages/Authentication/Logout/logout.index";
import { theme } from "./theme/themeProvider";

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
                  <CraftsmanInformation />
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
