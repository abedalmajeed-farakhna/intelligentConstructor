import { Grid } from "@mui/material";
import React, { useState } from "react";
import ImageCard from "../../../components/CoreComponents/ImageCard/imageCard.index";

const CraftsmanList: React.FC<any> = ({ children }) => {
  return (
    <Grid container spacing={1}>
  <Grid  xs={4}>
  <ImageCard
   imagePath="painter.jpg"
   text={"painter"} 
  description ={"test 1 test 1 test 1 test 1 test 1 test 1 test 1 test 1 test 1 test 1 test 1 test 1 test 1 test 1 test 1 test 1 "}/>
  </Grid>
  <Grid item xs={4}>
  <ImageCard 
          imagePath="carpenter.jpg"
          description={"test 02 test 02 test 02 test 02 test 02 test 02 test 02 test 02 test 02 test 02 test 02 test 02 test 02 "}
           text={"carpenter"} />
  </Grid>
 
  </Grid>
  );
};
export default CraftsmanList;


