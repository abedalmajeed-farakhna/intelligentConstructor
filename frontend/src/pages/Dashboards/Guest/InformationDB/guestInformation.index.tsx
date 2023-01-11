import { Box, Typography } from "@mui/material";
import axios from "axios";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { validationSchema } from "./guestInformation.utils";
import useStyles from "./guestInformation.style";
import CustomButton from "../../../../components/CoreComponents/CustomButton/customButton.index";
import FileUploader from "../../../../components/CoreComponents/FileUploader/fileUploader.index";
import TextInput from "../../../../components/CoreComponents/TextInput/textInput.index";
import ProfileImageUpload from "../../../../components/ProfileImageUpload/profileImageUpload.index";
import { IApplicationState } from "../../../../redux/ApplicationState";
import { IUser } from "../../../../types/types";

const GuestInformation: React.FC<any> = ({}) => {
  const classes = useStyles();

  const user: IUser = useSelector((state: IApplicationState) => state.user);
  const [initialValues, setInitialValues] = useState({
    fullName: "",
    userName:""
  });

  const [imagePath, setImagePath] = useState(null);

  useEffect(() => {
    axios.get(`/Guest/GetUserInformation`).then((res) => {
      if (res.data) {
        const data = res.data;
        setInitialValues({
          fullName: data.fullName,
          userName:data.userName
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
      axios.post(`/UserSettings/UpdateProfileImage`, data).then((res) => {});
    };
  };

  if (!initialValues.userName) return <> Loading</>;

  return (
    <div>
      <ProfileImageUpload
                text={"profile image"}
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

              <CustomButton text={"save"} />

              <Box>
                <Typography></Typography>
              </Box>
            </Box>
            <FileUploader />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default GuestInformation;
