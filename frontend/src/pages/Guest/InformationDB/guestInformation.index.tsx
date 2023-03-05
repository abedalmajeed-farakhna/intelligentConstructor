import { Box, Typography } from "@mui/material";
import axios from "axios";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import CustomButton from "../../../components/CoreComponents/CustomButton/customButton.index";
import FileUploader from "../../../components/CoreComponents/FileUploader/fileUploader.index";
import ProfileImageUpload from "../../../components/CoreComponents/ProfileImageUpload/profileImageUpload.index";
import TextInput from "../../../components/CoreComponents/TextInput/textInput.index";
import { IApplicationState } from "../../../redux/ApplicationState";
import { IUser } from "../../../types/types";
import { useDispatch } from "react-redux";

//import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { validationSchema } from "./guestInformation.utils";
import useStyles from "./guestInformation.style";
import { setUser } from "../../../reducers/reducers/userReducer";

const GuestInformation: React.FC<any> = ({}) => {
  const classes = useStyles();
  const dispatch: Dispatch<any> = useDispatch();
  const user: IUser = useSelector((state: IApplicationState) => state.user);
  const [initialValues, setInitialValues] = useState({
    fullName: "",
    userName: "",
    phoneNumber:""
  });

  const [imagePath, setImagePath] = useState<string | undefined>(undefined);

  useEffect(() => {
    axios.get(`/Guest/GetGuestInformation`).then((res) => {
      if (res.data) {
        const data = res.data;
        setInitialValues({
          fullName: data.fullName,
          userName: data.userName,
          phoneNumber:data.phoneNumber
        });
        if (data.profileImage) {
          setImagePath(`/Upload/${data.profileImage}`);
        }
      }
    });
  }, []);

  const onHandleSubmit = (values) => {
    let data = {
      fullName: values.fullName,
      phoneNumber:values.phoneNumber
    };
    axios.post(`/Guest/updateInformation`, data).then((res) => {
      if (res.data) {
      }
      const persons = res.data;
    });
  };

  const handleOnChangeImage = (path) => {
    var reader = new FileReader();
    reader.readAsDataURL(path);
    reader.onloadend = function () {
      var base64data = reader.result;
      const data = {
        image: base64data,
      };
      axios.post(`/UserSettings/UpdateProfileImage`, data).then((res) => {

        var newUser = {...user,profileImage:res.data}
        dispatch(setUser(newUser));
      });
    };
  };

  if (!initialValues.userName) return <> Loading</>;

  return (
    <div>
      <ProfileImageUpload
        type={"image/*"}
        onChange={(path) => handleOnChangeImage(path)}
        defaultImage={imagePath}
      />
      <label> {initialValues.userName}</label>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // same shape as initial values
          onHandleSubmit(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Box className={classes.root}>
              <TextInput
                name="fullName"
                placeholder="full Name"
                type="string"
                error={touched.fullName && errors.fullName}
                label="Full Name"
              />
              <TextInput
                name="phoneNumber"
                placeholder="Phone Number"
                type="string"
                error={touched.phoneNumber && errors.phoneNumber}
                label="Phone Number"
              />

              <CustomButton text={"save"} />
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default GuestInformation;