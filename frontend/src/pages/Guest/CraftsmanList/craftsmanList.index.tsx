import React, { useState } from "react";
import { Grid } from "@mui/material";
import BreadCrump from "../../../components/CoreComponents/BreadCrump/breadCrump.index";
import ImageCard from "../../../components/CoreComponents/ImageCard/imageCard.index";
import { PATH_NAMES } from "../../../constants/route";
import { sectorEnum } from "../../../enums/sectorEnum";
import useStyles from "./craftsmanList.style";

const CraftsmanList: React.FC<any> = ({ children }) => {
  const classes = useStyles();

  return (
<>

    <BreadCrump current={"CraftsmanList"} linkList={[]}/>

    <Grid container spacing={1} className={classes.root}>
  <Grid  xs={4}  className={classes.cardItem}>
  <ImageCard
          imagePath="painter.jpg"

          text={"painter"}
          description={"test 1 test 1 test 1 test 1 test 1 test 1 test 1 test 1 test 1 test 1 test 1 test 1 test 1 test 1 test 1 test 1 "}
          
          sector={sectorEnum.HousePainter}/>
  </Grid>
  <Grid item xs={4} className={classes.cardItem}>
  <ImageCard 
  sector={sectorEnum.Carpenter}
          imagePath="carpenter.jpg"
          description={"test 02 test 02 test 02 test 02 test 02 test 02 test 02 test 02 test 02 test 02 test 02 test 02 test 02 "}
           text={"carpenter"} />
  </Grid><Grid item xs={4} className={classes.cardItem}>
  <ImageCard 
  sector={sectorEnum.Carpenter}
          imagePath="carpenter.jpg"
          description={"test 02 test 02 test 02 test 02 test 02 test 02 test 02 test 02 test 02 test 02 test 02 test 02 test 02 "}
           text={"carpenter"} />
  </Grid><Grid item xs={4} className={classes.cardItem}>
  <ImageCard 
  sector={sectorEnum.Carpenter}
          imagePath="carpenter.jpg"
          description={"test 02 test 02 test 02 test 02 test 02 test 02 test 02 test 02 test 02 test 02 test 02 test 02 test 02 "}
           text={"carpenter"} />
  </Grid>
 
  </Grid>
  </>
  );
};
export default CraftsmanList;


