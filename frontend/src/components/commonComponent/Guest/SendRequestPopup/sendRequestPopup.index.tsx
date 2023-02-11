import React from "react";
import moment from 'moment';
import axios from "axios";
import { Formik, Form } from "formik";
import { DialogContent, DialogActions } from "@mui/material";

import DateInput from "../../../CoreComponents/DateInput/dateInput.index";
import TextInput from "../../../CoreComponents/TextInput/textInput.index";
import CustomButton from "../../../CoreComponents/CustomButton/customButton.index";
import { InitialValues, sendRequestSchema } from "./sendRequestPopup.utils";
import FormDialog from "../../../CoreComponents/FormDialog/formDialog.index";

import { ISendRequestPopup } from "./sendRequestPopup.type";
import useStyles from "./sendRequestPopup.style";

const SendRequestPopup: React.FC<ISendRequestPopup> = ({
  isOpen,
  userId,
  onClose,
}) => {
  const classes = useStyles();
  //const container = window !== undefined ? () => window().document.body : undefined;
  const [fromDate, setFrom] = React.useState(moment().format('YYYY-MM-DD'));

  

  const onHandleSubmit = (values) => {
  
    values.from = fromDate;
    values.toUserId = userId;

    axios.post(`/Project/SendRequest`, values).then(() => {
      onClose(true);
    });
  };

  const onFromChanger = (value) => {
    setFrom(value);
  };



  return (
    <>
   

      <FormDialog title="Send request" isOpen={isOpen} onClose={()=>onClose(false)}>
        <Formik
          initialValues={InitialValues}
          validationSchema={sendRequestSchema}
          onSubmit={(values) => {
            // same shape as initial values
            onHandleSubmit(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <DialogContent>
                <DateInput
                  defaultValue={moment().format("YYYY-MM-DD")}
                  label={"start date"}
                  name={"from"}
                  onChange={(val) => onFromChanger(val)}
                />
                <TextInput
                className ={classes.textarea}
                  as="textarea"
                  name={"description"}
                  placeholder={"description"}
                  type={"textarea"}
                  error={touched.description && errors.description}
                  label="description"
                />
              </DialogContent>

              <DialogActions>
                <CustomButton   className ={classes.button} text={"Send request"} />
              </DialogActions>
            </Form>
          )}
          

        </Formik>
      </FormDialog>
    
       </>
  );
};

export default SendRequestPopup;