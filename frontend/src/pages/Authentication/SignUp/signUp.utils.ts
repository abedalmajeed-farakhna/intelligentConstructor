

import * as Yup from "yup";
import { Exceptions } from "../../../enums/exceptions";
import { userTypeEnum } from "../../../enums/userTypeEnum";

export const signUpSchema = Yup.object().shape({
    password:
      Yup.string()
      .required(Exceptions.REQUIRED)
      .min(8, 'Too Short!')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, 'the Password must have at least one uppercase letter, one lowercase letter and one number.')
      .max(50, 'Too Long!'),

      repeatPassword:
      Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required(Exceptions.REQUIRED).min(8, 'Too Short!')
      .max(50, 'Too Long!'),

    username: Yup.string().email(Exceptions.INVALID_EMAIL).required(Exceptions.REQUIRED).min(2, 'Too Short!')
    .max(50, 'Too Long!'),

    
    
    fullName: Yup.string()
    .min(5, 'Too Short!')
    .max(25, 'Too Long!')
    .required('Required'),


    phoneNumber: Yup.string()
    .min(10, 'Invalid phone number')
    .max(10, 'Invalid phone number')
    .required('Required'),
     
    userType: Yup.string()
    
    .required('Required'),

  });




export const signUpInitialValues = {
    username: "",
    fullName: "",
    password: "",
    repeatPassword: "",
    phoneNumber:"",
    userType: userTypeEnum.CONSTRUCTOR,
  };