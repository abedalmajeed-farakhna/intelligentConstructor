import React, { useState } from "react";
import axios from "axios";
import { Form, Formik } from "formik";
import moment from "moment";
import { Box } from "@mui/material";

import useStyles from "./projectDashboard.style";
import FormStepper from "../../../components/commonComponent/FormStepper/formStipper.index";
import { InitialValues, validationSchema } from "./projectDashboard.utils";

const ProjectDashboard: React.FC<any> = ({}) => {
  const classes = useStyles();

  const [fromDate, setFrom] = useState(moment().format("YYYY-MM-DD"));
  const [toDate, setTo] = useState(moment().format("YYYY-MM-DD"));

  const onFromChange = (value) => {
    setFrom(value);
  };

  const onToChange = (value) => {
    setTo(value);
  };

  const onHandleSubmit = (values) => {
    values.fromDate = fromDate;
    values.toDate = toDate;

    axios.post(`/Craftsman/updateInformation`, values).then((res) => {
      if (res.data) {
      }
      const persons = res.data;
    });
  };

  return (
    <div>
      <Formik
        initialValues={InitialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // same shape as initial values
          onHandleSubmit(values);
        }}
      >
        {({ errors, touched, values }) => (
          <Form>
            <Box className={classes.root}>
              <FormStepper
                errors={errors}
                touched={touched}
                onToChange={onToChange}
                onFromChange={onFromChange}
                values={{ ...values, fromDate: fromDate, toDate: toDate }}
              />
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProjectDashboard;