import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import { Box, Checkbox, Typography } from "@mui/material";

import CustomButton from "../../../components/CoreComponents/CustomButton/customButton.index";
import FileUploader from "../../../components/CoreComponents/FileUploader/fileUploader.index";
import { IApplicationState } from "../../../redux/ApplicationState";
import { IUser } from "../../CraftsmanBySector/cratsmanBySector.type";

import useStyles from "./projectDashboard.style";
import FormStepper from "../../../components/commonComponent/FormStepper/formStipper.index";
import { validationSchema } from "./projectDashboard.utils";

const ProjectDashboard: React.FC<any> = ({}) => {
  const classes = useStyles();

  const user: IUser = useSelector((state: IApplicationState) => state.user);
  const [initialValues, setInitialValues] = useState({
    projectName: "",
    space: "",
    craftmanNeeded: "",
  });

  const [imagePath, setImagePath] = useState<string | undefined>(undefined);

  useEffect(() => {
    axios.get(`/Craftsman/GetUserInformation`).then((res) => {
      if (res.data) {
        const data = res.data;
        setInitialValues({
          projectName: data.projectName,
          space: data.space,
          craftmanNeeded: data.craftmanNeeded,
        });
        if (data.profileImage) {
          setImagePath(`/Upload/${data.profileImage}`);
        }
      }
    });
  }, []);

  const onHandleSubmit = (values) => {
    console.log(values, "values");
    let data = {
      projectName: values.projectName,
      space: values.space,
      craftmanNeeded: values.craftmanNeeded,
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

  return (
    <div>
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
              <FormStepper errors={errors} touched={touched} />

              <CustomButton text={"save"} />
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProjectDashboard;
