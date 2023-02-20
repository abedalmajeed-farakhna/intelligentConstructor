import moment from "moment";
import * as Yup from "yup";



export const validationSchema = Yup.object().shape({
  projectName: Yup.string()
    .min(5, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

  space: Yup.number()
    .min(0, "the space shouldn\'t be less than 1")
    .required("Required"),
});


