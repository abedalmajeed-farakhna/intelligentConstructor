import { Person } from "@mui/icons-material";
import { Box, Button, Container, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import Navbar from "../../../components/Navbar/navbar.index";
import { userTypeEnum } from "../../../enums/userTypeEnum";
import { Formik, Form } from "formik";
import { signUpInitialValues, signUpSchema } from "./signUp.utils";
import TextInput from "../../../components/CoreComponents/TextInput/textInput.index";
import SelectInput from "../../../components/CoreComponents/SelectInput/selectInput.index";
import CustomLink from "../../../components/CoreComponents/CustomLink/customLink.index";
import { PATH_NAMES } from "../../../constants/route";

const SignUp: React.FC<any> = ({}) => {
  const onHandleSubmit = (values) => {
    console.log(values,"values");
    let data = {
      username: values.username,
      password: values.password,
      fullName: values.fullName,
      userType:parseInt(values.userType),
    };
    axios.post(`/Account/SignUp`, data).then((res) => {
      if (res.data) {
      }
      const persons = res.data;
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
                  placeholder="full Name"
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
                  placeholder="repeatPassword"
                  type="password"
                  error={touched.repeatPassword && errors.repeatPassword}
                  label="Repeat Password"
                />
                <SelectInput
                  name="userType"
                  options={[
                    { name: "Conractor", value: userTypeEnum.CONSTRUCTOR },
                    { name: "Craftman", value: userTypeEnum.CRAFTSMAN },
                    { name: "Guest", value: userTypeEnum.GUEST },
                  ]}
                />

                <Button fullWidth variant="outlined" type="submit">
                  Sign up
                </Button>
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