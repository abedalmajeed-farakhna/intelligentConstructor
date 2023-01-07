

import * as Yup from "yup";
import { Exceptions } from "../../../enums/exceptions";

export const signUpSchema = Yup.object().shape({
    password:
      Yup.string()
      .required(Exceptions.REQUIRED).min(2, 'Too Short!')
      .max(50, 'Too Long!'),

      repeatPassword:
      Yup.string()
      .required(Exceptions.REQUIRED).min(2, 'Too Short!')
      .max(50, 'Too Long!'),

    username: Yup.string().email(Exceptions.INVALID_EMAIL).required(Exceptions.REQUIRED).min(2, 'Too Short!')
    .max(50, 'Too Long!'),

    
    
    fullName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),



  });




export const signUpInitialValues = {
    username: "",
    fullName: "",
    password: "",
    repeatPassword: "",
    userType: "",
  };