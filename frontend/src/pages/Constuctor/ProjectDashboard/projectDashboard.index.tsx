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
import AddNewProjectSection from "../../../components/commonComponent/Constuctor/AddNewProjectSection/addNewProjectSection.index";
import StepOne from "../../../components/commonComponent/FormStepper/StepOne/stepOne.index";
import BuilderStep from "../../../components/commonComponent/FormStepper/BuilderStep/builderStep.index";
import { getSectorEnumDescriptions } from "../../../utils/enumDescriptions";
import { sectorEnum } from "../../../enums/sectorEnum";
import AddNewProjectForm from "./AddNewProjectForm/addNewProjectForm.index";
import { timeLineInitialValue } from "./AddProjectCraftsmanPage/addProjectCraftsmanPage.const";

const ProjectDashboard: React.FC<any> = ({}) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [fromDate, setFrom] = useState(moment().format("YYYY-MM-DD"));

  const [timeLine, setTimeLine] = React.useState<ITimeLineProps>(timeLineInitialValue);

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
      <BreadCrump
        current={"Add Project"}
        linkList={[{ name: "Projects", link: PATH_NAMES.PROJECT_LIST }]}
      />
      <AddNewProjectForm />
    </div>
  );
};

export default ProjectDashboard;
