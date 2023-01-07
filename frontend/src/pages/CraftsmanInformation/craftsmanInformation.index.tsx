import { Person } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import CustomButton from "../../components/CoreComponents/CustomButton/customButton.index";

import SelectInput from "../../components/CoreComponents/SelectInput/selectInput.index";
import TextInput from "../../components/CoreComponents/TextInput/textInput.index";

import { userTypeEnum } from "../../enums/userTypeEnum";
import { validationSchema } from "./craftsmanInformation.utils";
import useStyles from "./craftsmanInformation.style";
import { IUser } from "../../types/types";
import { useSelector } from "react-redux";
import { IApplicationState } from "../../redux/ApplicationState";
import ImageUpload from "../../components/ImageUpload/imageUpload.index";
import FileUploader from "../../components/CoreComponents/FileUploader/fileUploader.index";

const CraftsmanInformation: React.FC<any> = ({}) => {
  const classes = useStyles();

  const user: IUser = useSelector((state: IApplicationState) => state.user);
  
 const initialValues = {
  fullName: user.fullName,
  note:"",
  sector: "",
speed:1
 
};

const [imagePath, setImagePath] = useState("");



  const onHandleSubmit = (values) => {
    let data = {
      fullName: values.fullName,
      note: values.note,
      id:user.id,
      imagePath:imagePath
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
      axios.post(`/Account/UpdateProfileImage`, data).then((res) => {
        if (res.data) {
        }
        setImagePath(path);
      });
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
              <ImageUpload text={"profile image"} type={"image/*"}
              
              onChange ={(path)=>handleOnChangeImage(path)} 
              />
              
              <TextInput
                name="fullName"
                placeholder="full Name"
                type="string"
                error={touched.fullName && errors.fullName}
                label="Full Name"                 />
              
               <TextInput
                name="speed"
                placeholder="speed"
                type="number"
                label="speed"
                error={touched.speed && errors.speed}
              />


              <SelectInput
                name="sector"
                options={[
                  { name: "Conractor", value: userTypeEnum.CONSTRUCTOR },
                  { name: "Craftman", value: userTypeEnum.CRAFTSMAN },
                  { name: "Guest", value: userTypeEnum.GUEST },
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
