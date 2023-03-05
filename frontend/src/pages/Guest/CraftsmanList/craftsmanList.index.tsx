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

    <BreadCrump current={"Craftsman List"} linkList={[]}/>

    <Grid container spacing={1} className={classes.root}>
  <Grid  xs={4}  className={classes.cardItem}>
  <ImageCard
          imagePath="painter.jpg"

          text={"house Painter"}
          description={"A Painter is a professional who helps prepare surfaces, mix paints for different needs, and apply them with brushes or rollers to fill in cracks or apply color on walls and other objects around a home, such as furniture pieces or doors. "}
          
          sector={sectorEnum.HousePainter}/>
  </Grid>
  
  <Grid item xs={4} className={classes.cardItem}>
  <ImageCard 
  sector={sectorEnum.Carpenter}
          imagePath="carpenter.jpg"
          description={"A Carpenter is a construction professional who works with construction crews to build, adjust and repair wood frameworks in various construction projects. They work with their hands, using tools to build and install frameworks that last a lifetime."}
           text={"Carpenter"} />
  </Grid>
  
  <Grid item xs={4} className={classes.cardItem}>
  <ImageCard 
  sector={sectorEnum.Plumber}
          imagePath="plumber.jpg"
          description={"Plumbers install and repair pipes and fixtures that carry water, gas, or other fluids in homes and businesses. They also maintain plumbing fixtures like bathtubs and toilets and appliances such as dishwashers or heating systems. "}
           text={"Plumber"} />
  </Grid>
  
  <Grid item xs={4} className={classes.cardItem}>
  <ImageCard 
  sector={sectorEnum.Tiler}
          imagePath="tiler.jpg"
          description={"A tiler is a person who decorates and protects floors and walls using various types of tiles. They usually apply clay, slate, marble, ceramic or glass to interior surfaces in homes and buildings, especially kitchens and bathrooms."}
           text={"Tiler"} />
  </Grid>
 
  <Grid item xs={4} className={classes.cardItem}>
  <ImageCard 
  sector={sectorEnum.Electrician}
          imagePath="electrician.jpg"
          description={"Electricians install, maintain, and repair electrical power, communications, lighting, and control systems in homes, businesses, and factories."}
           text={"Electrician"} />
  </Grid>

  <Grid item xs={4} className={classes.cardItem}>
  <ImageCard 
  sector={sectorEnum.Builder}
          imagePath="builder.jpg"
          description={"Builders oversee, coordinate and work on the construction, repair and renovation of homes and other buildings. They may also manage entire projects. Builders must comply with strict safety regulations, including using and wearing protective equipment and ensuring the construction site is safe."}
           text={"Builder"} />
  </Grid>


  </Grid>
  </>
  );
};
export default CraftsmanList;


