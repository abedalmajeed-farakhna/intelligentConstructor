import { Box, Typography } from "@mui/material";
import axios from "axios";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import CustomButton from "../../../components/CoreComponents/CustomButton/customButton.index";
import SelectInput from "../../../components/CoreComponents/SelectInput/selectInput.index";
import TextInput from "../../../components/CoreComponents/TextInput/textInput.index";
import { IUser } from "../../../types/types";
import { IApplicationState } from "../../../redux/ApplicationState";
import FileUploader from "../../../components/CoreComponents/FileUploader/fileUploader.index";
import { sectorEnum } from "../../../enums/sectorEnum";

import { validationSchema } from "./craftsmanInformation.utils";
import useStyles from "./craftsmanInformation.style";
import ProfileImageUpload from "../../../components/CoreComponents/ProfileImageUpload/profileImageUpload.index";

const CraftsmanInformation: React.FC<any> = ({}) => {
  const classes = useStyles();

  const user: IUser = useSelector((state: IApplicationState) => state.user);
  const [initialValues, setInitialValues] = useState({
    fullName: "",
    note: "",
    sector: "",
    speed: "",
    userName: "",
  });

  const [imagePath, setImagePath] = useState<string | undefined>(undefined);

  useEffect(() => {
    axios.get(`/Craftsman/GetUserInformation`).then((res) => {
      if (res.data) {
        const data = res.data;
        setInitialValues({
          fullName: data.fullName,
          userName: data.userName,
          note: data.note,
          sector: data.sector,
          speed: data.speed,
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
      speed: values.speed,
      sector: parseInt(values.sector),
    };
    axios.post(`/Craftsman/updateInformation`, data).then((res) => {
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
                name="speed"
                placeholder="speed"
                type="number"
                label="speed"
                error={touched.speed && errors.speed}
              />

              <SelectInput
                label="sector"
                name="sector"
                options={[
                  { name: "NONE", value: sectorEnum.NONE },
                  { name: "Builder", value: sectorEnum.Builder },
                  { name: "Tiler", value: sectorEnum.Tiler },
                  { name: "HousePainter", value: sectorEnum.HousePainter },
                  { name: "Plumber", value: sectorEnum.Plumber },
                  { name: "Electrician", value: sectorEnum.Electrician },
                  { name: "Carpenter", value: sectorEnum.Carpenter },
                ]}
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

export default CraftsmanInformation;