import React from "react";
import moment from 'moment';
import axios from "axios";
import { Formik, Form } from "formik";
import { DialogContent, DialogActions } from "@mui/material";

import DateInput from "../../../CoreComponents/DateInput/dateInput.index";
import TextInput from "../../../CoreComponents/TextInput/textInput.index";
import CustomButton from "../../../CoreComponents/CustomButton/customButton.index";
import { InitialValues } from "./sendRequestPopup.utils";
import FormDialog from "../../../CoreComponents/FormDialog/formDialog.index";
import { ISendRequestPopup } from "./sendRequestPopup.type";

const SendRequestPopup: React.FC<ISendRequestPopup> = ({
  isOpen,
  userId,
  onClose,
}) => {
  //const container = window !== undefined ? () => window().document.body : undefined;
  const [fromDate, setFrom] = React.useState("");
  const [toDate, setTo] = React.useState("");

  const onHandleSubmit = (values) => {
    values.from = fromDate;
    values.to = toDate;
    values.toUserId = userId;

    axios.post(`/Project/SendRequest`, values).then(() => {
      console.log(values);
    });
  };

  const onFromChanger = (value) => {
    setFrom(value);
  };

  const onToChanger = (value) => {
    setTo(value);
  };

  return (
    <FormDialog title="Send request" isOpen={isOpen} onClose={onClose}>
      <Formik
        initialValues={InitialValues}
        //validationSchema={loginSchema}
        onSubmit={(values) => {
          // same shape as initial values
          onHandleSubmit(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <DialogContent>
              <DateInput
                defaultValue={moment().format('YYYY-MM-DD')}
                label={"from"}
                name={"from"}
                onChange={(val) => onFromChanger(val)}
              />
              <DateInput
                defaultValue={moment().format('YYYY-MM-DD')}
                label={"to"}
                name={"to"}
                onChange={(val) => onToChanger(val)}
              />

              <TextInput
                as="textarea"
                name={"description"}
                placeholder={"description"}
                type={"textarea"}
                error={touched.description && errors.description}
                label="description"
              />
            </DialogContent>

            <DialogActions>
              <CustomButton text={"Send request"} />
            </DialogActions>
          </Form>
        )}
      </Formik>
    </FormDialog>
  );
};

export default SendRequestPopup;