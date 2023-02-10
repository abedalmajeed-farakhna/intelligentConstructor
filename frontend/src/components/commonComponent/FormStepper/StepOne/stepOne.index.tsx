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
     
    </>
  );
};
export default StepOne;