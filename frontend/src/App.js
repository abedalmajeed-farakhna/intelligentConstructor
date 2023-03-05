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
import CraftsmanBySector from "./pages/CraftsmanBySector/craftsmanBySector.index";
import CraftsmanProfile from "./pages/Guest/CraftsmanProfile/craftsmanProfile.index";
import RequestList from "./pages/Guest/RequestList/requestList.index";
import ConstuctorRequestList from "./pages/Constuctor/RequestList/constuctorRequestList.index";
import ProjectDashboard from "./pages/Constuctor/ProjectDashboard/projectDashboard.index";
import ProjectList from "./pages/Constuctor/ProjectList/projectList.index";
import ProjectDetails from "./pages/Constuctor/ProjectDetails/projectDetails.index";
import CraftsmanRequestList from "./pages/Craftsman/CraftsmanRequestList/craftsmanRequestList.index";
import AddProjectCraftsmanPage from "./pages/Constuctor/ProjectDashboard/AddProjectCraftsmanPage/addProjectCraftsmanPage.index";
import RequestDetails from "./pages/Constuctor/RequestDetails/requestDetails.index";
import GalleryDB from "./pages/Constuctor/GalleryDB/galleryDB.index";
//import CraftsmanProfile from "./pages/Guest/craftsmanProfile.index";


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <RedirectToHome>
                <Login />
              </RedirectToHome>
            }
          />

          <Route
          index
            path={PATH_NAMES.LOGIN}
            element={
                <Login />
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
            path={PATH_NAMES.REQUEST}
            element={
              <RedirectToLogin>
                <MainDashboard>
                <RequestList />
                </MainDashboard>
              </RedirectToLogin>
            }
          />
           <Route
            path={PATH_NAMES.CRAFTSMAN_BY_SECTOR}
            element={
              <RedirectToLogin>
              <MainDashboard>
             <CraftsmanBySector/>
             </MainDashboard>
             </RedirectToLogin>
            }
          />
           <Route
            path={`${PATH_NAMES.CRAFTSMAN_INFORMATION }/:id`}
            element={
              <RedirectToLogin>
              <MainDashboard>
             <CraftsmanProfile/>
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
            <Route
            path={PATH_NAMES.CONSTUCTOR_REQUEST}
            element={
              <RedirectToLogin>
              <MainDashboard>
             <ConstuctorRequestList/>
             </MainDashboard>
             </RedirectToLogin>
            }
          />


            <Route
            path={PATH_NAMES.PROJECT}
            element={
              <RedirectToLogin>
              <MainDashboard>
             <ProjectDashboard/>
             </MainDashboard>
             </RedirectToLogin>
            }
          />
          
          
          <Route
            path={`${PATH_NAMES.AddProjectCraftsman}/:id`}
            element={
              <RedirectToLogin>
              <MainDashboard>
             <AddProjectCraftsmanPage/>
             </MainDashboard>
             </RedirectToLogin>
            }
          />
          
          
          <Route
            path={`${PATH_NAMES.RequestDetails}/:id`}
            element={
              <RedirectToLogin>
              <MainDashboard>
             <RequestDetails/>
             </MainDashboard>
             </RedirectToLogin>
            }
          />
   
           <Route
            path={PATH_NAMES.PROJECT_LIST}
            element={
              <RedirectToLogin>
              <MainDashboard>
             <ProjectList/>
             </MainDashboard>
             </RedirectToLogin>
            }
          />


           <Route
            path={PATH_NAMES.PROJECT_DETAILS}
            element={
              <RedirectToLogin>
              <MainDashboard>
             <ProjectDetails/>
             </MainDashboard>
             </RedirectToLogin>
            }
          />
          

          <Route
            path={PATH_NAMES.CRAFTSMAN_REQUEST_LISt}
            element={
              <RedirectToLogin>
              <MainDashboard>
             <CraftsmanRequestList/>
             </MainDashboard>
             </RedirectToLogin>
            }
          />
          
          <Route
            path={`${PATH_NAMES.Gallery}/:id`}
            element={
              <RedirectToLogin>
              <MainDashboard>
             <GalleryDB/>
             </MainDashboard>
             </RedirectToLogin>
            }
          />


        </Routes>


      
            
      </BrowserRouter>
    </ThemeProvider>


        
  );
};

export default App;
