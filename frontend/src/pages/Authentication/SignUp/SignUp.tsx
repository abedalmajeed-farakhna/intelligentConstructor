import React, { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import axios from "axios";
import { Person } from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";

import { userTypeEnum } from "../../../enums/userTypeEnum";
import TextInput from "../../../components/CoreComponents/TextInput/textInput.index";
import SelectInput from "../../../components/CoreComponents/SelectInput/selectInput.index";
import CustomLink from "../../../components/CoreComponents/CustomLink/customLink.index";
import { PATH_NAMES } from "../../../constants/route";
import Navbar from "../../../components/CoreComponents/Navbar/navbar.index";
import CustomButton from "../../../components/CoreComponents/CustomButton/customButton.index";
import { IUser } from "../../../types/types";
import { setUser } from "../../../reducers/reducers/userReducer";


import { signUpInitialValues, signUpSchema } from "./signUp.utils";

const SignUp: React.FC<any> = ({}) => {
  const dispatch: Dispatch<any> = useDispatch();
  const navigate = useNavigate();

  const onHandleSubmit = (values) => {
    let data = {
      username: values.username,
      password: values.password,
      fullName: values.fullName,
      userType: parseInt(values.userType),
      phoneNumber: values.phoneNumber,
    };
    axios.post(`/Account/SignUp`, data).then((res) => {
      if (res.data) {
        const loginData = {
          Username: values.username,
          Password: values.password,
        };
        axios.post(`/Account/Login`, loginData).then((res) => {
          const user: IUser = {
            username: values.username,
            type: parseInt(values.userType),
            fullName: values.fullName,
          };

          dispatch(setUser(user));

          navigate(`/dashboard`);
        });
      }
    });
  };

  return (
    <Box>
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
          initialValues={signUpInitialValues}
          validationSchema={signUpSchema}
          onSubmit={(values) => {
            // same shape as initial values
            onHandleSubmit(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Box
                sx={{
                  margin: "1em 0",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  boxShadow: "0 0 3px #023047",
                  gap: "1em",
                  padding: "1em",
                  minWidth: "600px",
                  borderRadius: "5px",
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <Box
                    sx={{
                      padding: "1em",
                      borderRadius: "50%",
                      border: "1px solid #757ce8",
                    }}
                  >
                    <Person />
                  </Box>
                  <Typography>Sign up</Typography>
                </Box>

                <TextInput
                  name="username"
                  placeholder="User name"
                  type="string"
                  error={touched.username && errors.username}
                  label="User Name"
                />

                <TextInput
                  name="fullName"
                  placeholder="Full Name"
                  type="string"
                  error={touched.fullName && errors.fullName}
                  label="Full Name"
                />

                <TextInput
                  name="password"
                  placeholder="Password"
                  type="password"
                  error={touched.password && errors.password}
                  label="Password"
                />
                <TextInput
                  name="repeatPassword"
                  placeholder="Repeat Password"
                  type="password"
                  error={touched.repeatPassword && errors.repeatPassword}
                  label="Repeat Password"
                />
                <TextInput
                  name="phoneNumber"
                  placeholder="Phone Number"
                  type="string"
                  error={touched.phoneNumber && errors.phoneNumber}
                  label="Phone Number"
                />
                <SelectInput
                  name="userType"
                  options={[
                    { name: "Constructor", value: userTypeEnum.CONSTRUCTOR },
                    { name: "Craftman", value: userTypeEnum.CRAFTSMAN },
                    { name: "Guest", value: userTypeEnum.GUEST },
                  ]}
                />
                <CustomButton text={"Sign up"} />
                <Box>
                  <Typography>
                    Already have an account
                    <CustomLink path={PATH_NAMES.LOGIN} text={"Login"} />
                  </Typography>
                </Box>
              </Box>
            </Form>
          )}
        </Formik>
      </Container>
    </Box>
  );
};

export default SignUp;