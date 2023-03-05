import { Box, Container, Typography } from "@mui/material";
import { Login as LoginIcon, Person } from "@mui/icons-material";
import React, { useState } from "react";
import axios from "axios";
//import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { IUser } from "../../../types/types";
import { useDispatch } from "react-redux";

//import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { setUser } from "../../../reducers/reducers/userReducer";
import { Formik, Form } from "formik";
import { loginInitialValues, loginSchema } from "./login.utils";
import { PATH_NAMES } from "../../../constants/route";
import TextInput from "../../../components/CoreComponents/TextInput/textInput.index";
import CustomLink from "../../../components/CoreComponents/CustomLink/customLink.index";
import CustomButton from "../../../components/CoreComponents/CustomButton/customButton.index";
import ErrorMessage from "../../../components/CoreComponents/Alerts/Error/errorMessage.index";
import Navbar from "../../../components/CoreComponents/Navbar/navbar.index";
import useStyles from "./login.style";

const Login: React.FC<any> = ({}) => {
  const classes = useStyles();

  const [error, setError] = useState("");
  const dispatch: Dispatch<any> = useDispatch();
  const navigate = useNavigate();

  const onHandleSubmit = (values) => {
    console.log(values, "values");
    axios.post(`/Account/Login`, values).then((res) => {
      const data = res.data;
      if (data.isAuthontecated) {
        const user: IUser = {
          username: values.username,
          type: data.userType,
          fullName: data.fullName,
          profileImage: data.profileImage,
        };

        dispatch(setUser(user));

        navigate(`/dashboard`); //TODO save name in redux
      } else {
        setError("invalid username or pawword");
      }
    })
    .catch((error) => {
      setError("invalid username or pawword");
    });;
  };

  return (
    <div className={classes.root}>
      <Navbar />
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Formik
          initialValues={loginInitialValues}
          validationSchema={loginSchema}
          onSubmit={(values) => {
            // same shape as initial values
            onHandleSubmit(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className={classes.root}>
                <Box sx={{ textAlign: "center" }}>
                  <Box
                    className={classes.profileIcon}
                    sx={{
                      borderRadius: "50%",
                    }}
                  >
                    <Person />
                  </Box>
                  <Typography>Login</Typography>
                </Box>

                <TextInput
                  name={"username"}
                  placeholder={"Username"}
                  type={"email"}
                  error={touched.username && errors.username}
                  label="Username"
                />

                <TextInput
                  name="password"
                  placeholder="password"
                  type="password"
                  error={touched.password && errors.password}
                  label="Password"
                />

                <CustomButton icon={<LoginIcon />} text={"Login"} />
                <ErrorMessage  className={classes.error} error={error} />
                <Box>
                  <Typography>
                    Does not hava an account{" "}
                    <CustomLink
                      className={classes.signUp}
                      path={PATH_NAMES.SIGNUP}
                      text={"Sign up"}
                    />
                  </Typography>
                </Box>
              </div>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
};

export default Login;
