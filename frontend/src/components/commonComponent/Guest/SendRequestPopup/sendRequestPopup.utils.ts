import moment from "moment";
import * as Yup from "yup";
import { Exceptions } from "../../../../enums/exceptions";

export const InitialValues = {
    from: moment(),
    to: moment(),
    description:"",
  };


  export const sendRequestSchema = Yup.object().shape({
    description:
      Yup.string()
      .required(Exceptions.REQUIRED)
  });