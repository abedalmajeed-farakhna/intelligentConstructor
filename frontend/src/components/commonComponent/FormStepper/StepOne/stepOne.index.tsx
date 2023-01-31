import React from "react";

import TextInput from "../../../CoreComponents/TextInput/textInput.index";
import moment from "moment";
import DateInput from "../../../CoreComponents/DateInput/dateInput.index";
import { IStepOneProps } from "./stepOne.type";
import ErrorMessage from "../../../CoreComponents/Alerts/Error/errorMessage.index";
import { Exceptions } from "../../../../enums/exceptions";


const StepOne: React.FC<IStepOneProps> = ({validateProjectName,validateSpace,customeErrors, errors, touched,onFromChange }) => {
  console.log(touched,"touched");
  console.log(customeErrors,"customeErrors");

 
  return (
    <>
      <TextInput
        name="projectName"
        placeholder="project Name"
        type="string"
        error={(touched.projectName && errors.projectName) || customeErrors?.projectName}
        label="project Name"
        validate={validateProjectName}
      />

      <TextInput
        name="space"
        placeholder="space"
        type="number"
        label="space"
        error={(touched.space && errors.space)|| customeErrors?.space}
        validate={validateSpace}
      />

     <DateInput
       defaultValue={moment().format('YYYY-MM-DD')}
       label={"from"}
       name={"from"}
      onChange={(val) => onFromChange(val)}
      />

    </>
  );
};
export default StepOne;