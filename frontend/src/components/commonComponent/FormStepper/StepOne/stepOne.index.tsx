import React from "react";

import TextInput from "../../../CoreComponents/TextInput/textInput.index";
import moment from "moment";
import DateInput from "../../../CoreComponents/DateInput/dateInput.index";
import { IStepOneProps } from "./stepOne.type";


const StepOne: React.FC<IStepOneProps> = ({ errors, touched,onFromChange,onToChange }) => {

 
  return (
    <>
      <TextInput
        name="projectName"
        placeholder="project Name"
        type="string"
        error={touched.projectName && errors.projectName}
        label="project Name"
      />

      <TextInput
        name="space"
        placeholder="space"
        type="number"
        label="space"
        error={touched.space && errors.space}
      />

     <DateInput
       defaultValue={moment().format('YYYY-MM-DD')}
       label={"from"}
       name={"from"}
      onChange={(val) => onFromChange(val)}
      />

     <DateInput
      defaultValue={moment().format('YYYY-MM-DD')}
      label={"to"}
      name={"to"}
      onChange={(val) => onToChange(val)}
      />

    </>
  );
};
export default StepOne;