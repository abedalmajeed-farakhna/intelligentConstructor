

import * as Yup from "yup";


export const validationSchema = Yup.object().shape({
   
  
    
    fullName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

    note: Yup.string()
    .min(10, 'Too Short!')
    .max(200, 'Too Long!')
    .required('Required'),

    speed: Yup.number()
    .min(0, 'the speed shouldnot bee less than 1!')
    .max(30, 'the speed shouldnot bee mor than 1!')
    .required('Required'),


  });



