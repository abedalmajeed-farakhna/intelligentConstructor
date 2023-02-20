import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(5, "Too Short!")
    .max(25, "Too Long!")
    .required("Required"),

    phoneNumber:Yup.string()
    .required("Required")
    .min(10, "Too Short!")
    .max(10, "Too Long!")
});
