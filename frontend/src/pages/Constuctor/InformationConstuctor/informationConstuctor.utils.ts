import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

  note: Yup.string()
    .min(10, "Too Short!")
    .max(200, "Too Long!")
    .required("Required"),

  capacity: Yup.number()
    .min(100, "the capacity shouldnot bee less than 100")
    .max(10000, "the capacity shouldnot bee mor than 10000")
    .required("Required"),

  phoneNumber: Yup.string().min(10, "Too Short!"),
});
