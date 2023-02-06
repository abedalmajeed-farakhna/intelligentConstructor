import React, { useState } from "react";
import axios from "axios";
import { Form, Formik } from "formik";
import moment from "moment";
import { Box } from "@mui/material";

import useStyles from "./projectDashboard.style";
import { InitialValues, validationSchema } from "./projectDashboard.utils";
import { ITimeLineProps } from "../../../components/commonComponent/FormStepper/formStepper.type";
import { addNumberOfDays } from "../../../utils/DateUtils";
import { useNavigate } from "react-router-dom";
import { PATH_NAMES } from "../../../constants/route";
import BreadCrump from "../../../components/CoreComponents/BreadCrump/breadCrump.index";
import FormStepper from "../../../components/commonComponent/FormStepper/formStepper.index";

const ProjectDashboard: React.FC<any> = ({}) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [fromDate, setFrom] = useState(moment().format("YYYY-MM-DD"));

  const [timeLine, setTimeLine] = React.useState<ITimeLineProps>({
    builder: {
      numberOfDays: 0,
    },
    tiler: {
      numberOfDays: 0,
    },
    housePainter: {
      numberOfDays: 0,
    },
    carpenter: {
      numberOfDays: 0,
    },
  });

  const handleUpdateTimeLine = (newVal) => {
    setTimeLine(newVal);
  };

  const onFromChange = (value) => {
    setFrom(value);
  };

  const onHandleSubmit = (values) => {
    console.log("Test,", values);
    console.log("timeLine Test,", timeLine);
    values.startDate = fromDate;

    values.builder = {
      userId: values.builder,
      stratDate: timeLine.builder.startDate,
      endDate: addNumberOfDays(
        timeLine.builder.startDate,
        timeLine.builder.numberOfDays
      ),
    };
    values.tiler = {
      userId: values.tiler,
      stratDate: timeLine.tiler.startDate,
      endDate: addNumberOfDays(
        timeLine.tiler.startDate,
        timeLine.tiler.numberOfDays
      ),
    };
    values.housePainter = {
      userId: values.housePainter,
      stratDate: timeLine.housePainter.startDate,
      endDate: addNumberOfDays(
        timeLine.housePainter.startDate,
        timeLine.housePainter.numberOfDays
      ),
    };
    values.carpenter = {
      userId: values.carpenter,
      stratDate: timeLine.carpenter.startDate,
      endDate: addNumberOfDays(
        timeLine.carpenter.startDate,
        timeLine.carpenter.numberOfDays
      ),
    };
    console.log(values, "values");

    axios.post(`/Constructor/AddNewProject`, values).then((result) => {
      if (result.status == 200) {
        navigate(PATH_NAMES.PROJECT_LIST);
      }
    });
  };

  return (
    <div>
              <BreadCrump current={"Add Project"} linkList={[{name:"ProjectList",link:PATH_NAMES.PROJECT_LIST}]}/>

      <Formik
        initialValues={InitialValues}
        //  validationSchema={validationSchema}
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
                onFromChange={onFromChange}
                values={{ ...values, fromDate: fromDate }}
                timeLine={timeLine}
                handleUpdateTimeLine={handleUpdateTimeLine}
              />
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProjectDashboard;