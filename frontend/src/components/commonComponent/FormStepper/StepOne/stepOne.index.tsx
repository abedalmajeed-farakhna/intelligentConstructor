import React from "react";
import { IFormStepperProps } from "./stepOne.type";

import TextInput from "../../../CoreComponents/TextInput/textInput.index";


const StepOne: React.FC<IFormStepperProps> = ({ errors, touched }) => {
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
    </>
  );
};
export default StepOne;