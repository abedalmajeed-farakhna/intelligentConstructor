import moment from "moment";
import * as Yup from "yup";

export const InitialValues = {
  projectName: "",
  space: 0,
  fromDate: moment()
};

export const validationSchema = Yup.object().shape({
  projectName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

  space: Yup.number()
    .min(0, "the space shouldnot bee less than 1")
    .max(1500, "the space shouldnot bee mor than 1500")
    .required("Required"),
});
