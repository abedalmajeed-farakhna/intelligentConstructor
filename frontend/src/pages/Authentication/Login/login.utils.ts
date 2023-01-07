import * as Yup from "yup";
import { Exceptions } from "../../../enums/exceptions";

export const loginSchema = Yup.object().shape({
  password:
    Yup.string()
    .required(Exceptions.REQUIRED),
  username: Yup.string().email(Exceptions.INVALID_EMAIL).required(Exceptions.REQUIRED),
});

export const loginInitialValues = {
  username: "",
  password: "",
};
