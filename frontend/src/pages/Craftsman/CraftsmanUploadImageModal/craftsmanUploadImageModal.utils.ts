import * as Yup from "yup";
import { Exceptions } from "../../../enums/exceptions";

export const CraftsmanUploadImageModalInitialValues = {
  title: "",
};

export const CraftsmanUploadImageModalSchema = Yup.object().shape({
  title:
    Yup.string()
    .required(Exceptions.REQUIRED),

});


