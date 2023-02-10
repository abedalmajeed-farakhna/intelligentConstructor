import React, { useEffect, useState } from "react";
import axios from "axios";
import { Field } from "formik";
import classNames from "classnames";
import { GridColDef } from "@mui/x-data-grid";
import useStyles from "./addNewProjectSection.style";



import {
  IAddNewProjectSectionProps,

} from "./addNewProjectSection.type";

import { Card, CardContent } from "@mui/material";



const AddNewProjectSection: React.FC<IAddNewProjectSectionProps> = ({
  title,
  children
}) => {
 

  return (
    <Card sx={{ Width: 50 }}>
      <CardContent>
        <h1> {title}</h1>
        {children}
      </CardContent>
    </Card>
  );
};
export default AddNewProjectSection;