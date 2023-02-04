import { Box } from "@mui/material";
import axios from "axios";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import CustomButton from "../../../components/CoreComponents/CustomButton/customButton.index";
import TextInput from "../../../components/CoreComponents/TextInput/textInput.index";
import { IUser } from "../../../types/types";
import { IApplicationState } from "../../../redux/ApplicationState";
import FileUploader from "../../../components/CoreComponents/FileUploader/fileUploader.index";
import ProfileImageUpload from "../../../components/CoreComponents/ProfileImageUpload/profileImageUpload.index";

import { validationSchema } from "./informationConstuctor.utils";
import useStyles from "./informationConstuctor.style";
import SelectInput from "../../../components/CoreComponents/SelectInput/selectInput.index";
import { showSuccessPopup } from "../../../utils/projectUtils";

const InformationConstuctor: React.FC<any> = ({}) => {
  const classes = useStyles();

  const user: IUser = useSelector((state: IApplicationState) => state.user);

      const [initialValues, setInitialValues] = useState({
    fullName: "",
    note: "",
    sector: "",
    capacity: "",
    userName: "",
    phoneNumber: "",
  });

  const [imagePath, setImagePath] = useState<string | undefined>(undefined);

  useEffect(() => {
    axios.get(`/Constructor/GetConstructorInformation`).then((res) => {
      if (res.data) {
        const data = res.data;
        setInitialValues({
          fullName: data.fullName,
          userName: data.userName,
          note: data.note,
          sector: data.sector,
          capacity: data.capacity,
          phoneNumber: data.phoneNumber,
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
      note: values.note,
      capacity: values.capacity,
      sector: parseInt(values.sector),
      phoneNumber:values.phoneNumber,
    };
    axios.post(`/Constructor/updateInformation`, data).then((res) => {
      if (res.data) {
        showSuccessPopup();

      }
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
              <TextInput
                name="capacity"
                placeholder="capacity"
                type="number"
                label="capacity"
                error={touched.capacity && errors.capacity}
              />

              <TextInput
                as="textarea"
                name="note"
                placeholder="note"
                type="string"
                error={touched.note && errors.note}
                label="note"
              />

              <CustomButton text={"save"} />
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default InformationConstuctor;