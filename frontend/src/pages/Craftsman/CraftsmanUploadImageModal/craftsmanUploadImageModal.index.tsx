import React, { useState } from "react";
import { Formik, Form } from "formik";
import axios from "axios";
import { DialogActions, DialogContent } from "@mui/material";

import FormDialog from "../../../components/CoreComponents/FormDialog/formDialog.index";
import FileUploader from "../../../components/CoreComponents/FileUploader/fileUploader.index";
import CustomButton from "../../../components/CoreComponents/CustomButton/customButton.index";
import TextInput from "../../../components/CoreComponents/TextInput/textInput.index";
import { showSuccessPopup } from "../../../utils/projectUtils";

import useStyles from "./craftsmanUploadImageModal.style";
import { ICraftsmanUploadImageModalProps } from "./craftsmanUploadImageModal.type";
import {
  CraftsmanUploadImageModalInitialValues,
  CraftsmanUploadImageModalSchema,
} from "./craftsmanUploadImageModal.utils";
import ErrorMessage from "../../../components/CoreComponents/Alerts/Error/errorMessage.index";

const CraftsmanUploadImageModal: React.FC<ICraftsmanUploadImageModalProps> = ({
  requestId,
  hideUploadImageModal,
}) => {
  const classes = useStyles();
  const [imageList, setImageList] = useState<string[]>([]);
  const [error, setError] = useState<string>("");

  const handleUploadImages = (images) => {
    images?.map((t) => {
      converToBase64(t);
    });
    setError("");
  };

  const converToBase64 = (blob) => {
    var reader = new FileReader();
    reader.readAsDataURL(blob);
    let base64data;
    reader.onloadend = function () {
      base64data = reader.result;
      //return base64data;
      imageList.push(base64data);
      setImageList(imageList);
    };
    //return base64data;
  };

  const onHandleSubmit = (values) => {
    let data = {
      title: values.title,
      imageList: imageList,
      requestId: requestId,
    };
    if (imageList.length == 0) {
      setError("you must upload at least one image");
      return;
    }
    console.log(imageList, "imageList");
    axios.post(`/Craftsman/AddImageForSpecificRequest`, data).then((res) => {
      if (res.data) {
        hideUploadImageModal();
        showSuccessPopup();
      }
    });
  };

  return (
    <FormDialog
      customClassName={classes.majeedpopup}
      //  customClassName={classes.majeedpopup}
      title={"Add New Project"}
      isOpen={true}
      onClose={hideUploadImageModal}
    >
      <Formik
        initialValues={CraftsmanUploadImageModalInitialValues}
        validationSchema={CraftsmanUploadImageModalSchema}
        onSubmit={(values) => {
          // same shape as initial values
          onHandleSubmit(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className={classes.customForm}>
            <DialogContent>
              <div className={classes.formField}>
                <TextInput
                  name="title"
                  placeholder="title"
                  type="string"
                  error={touched.title && errors.title}
                  label="title"
                />
              </div>
              <div className={classes.formField}>
                
                <FileUploader
                label="Add Your Images"
                  customClassName={classes.fileUploader}
                  onChange={(data) => handleUploadImages(data)}
                />
              </div>

              <ErrorMessage error={error} />
            </DialogContent>
            <DialogActions className={classes.addBtn}>
              <CustomButton text={"add"} />
            </DialogActions>
          </Form>
        )}
      </Formik>
    </FormDialog>
  );
};
export default CraftsmanUploadImageModal;
