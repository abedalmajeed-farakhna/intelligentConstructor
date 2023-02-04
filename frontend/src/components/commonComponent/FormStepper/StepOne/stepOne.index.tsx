import React, { useEffect, useState } from "react";

import TextInput from "../../../CoreComponents/TextInput/textInput.index";
import moment from "moment";
import DateInput from "../../../CoreComponents/DateInput/dateInput.index";
import { IStepOneProps } from "./stepOne.type";
import ErrorMessage from "../../../CoreComponents/Alerts/Error/errorMessage.index";
import { Exceptions } from "../../../../enums/exceptions";
import SelectInput from "../../../CoreComponents/SelectInput/selectInput.index";
import axios from "axios";

const StepOne: React.FC<IStepOneProps> = ({
  validateProjectName,
  validateSpace,
  customeErrors,
  errors,
  touched,
  onFromChange,
}) => {
  const [regionList, setRegionList] = useState([]);

  useEffect(() => {
    getRegionList();
  }, []);
  const getRegionList = () => {
    axios.get(`/Region/GetRegionList`).then((res) => {
      setRegionList(res.data);
    });
  };

  return (
    <>
      <TextInput
        name="projectName"
        placeholder="project Name"
        type="string"
        error={
          (touched.projectName && errors.projectName) ||
          customeErrors?.projectName
        }
        label="project Name"
        validate={validateProjectName}
      />

      <SelectInput
        label="Region"
        name={"region"}
        options={regionList}
        keyName={"id"}
      />
      <TextInput
        name="space"
        placeholder="space"
        type="number"
        label="space"
        error={(touched.space && errors.space) || customeErrors?.space}
        validate={validateSpace}
      />

      <DateInput
        defaultValue={moment().format("YYYY-MM-DD")}
        label={"from"}
        name={"from"}
        onChange={(val) => onFromChange(val)}
      />
    </>
  );
};
export default StepOne;