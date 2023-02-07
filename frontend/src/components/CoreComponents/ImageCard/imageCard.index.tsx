import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import CustomLink from "../CustomLink/customLink.index";

import useStyles from "./imageCard.style";
import { ICardProps } from "./imageCard.type";

const ImageCard: React.FC<ICardProps> = ({ text,description, sector,imagePath }) => {
  const classes = useStyles();

  return (
    <Card  className={classes.root}>
    <CardMedia
      component="img"
      alt="green iguana"
      height="200"
    image={`images/${imagePath}`}
    />
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
       
       <CustomLink path={`${sector}`} text={text} className={classes.link}/>
             </Typography>
      <Typography variant="body2" className={classes.description} >
        {description}
      </Typography>
    </CardContent>
  </Card>
  );
};

export default ImageCard;
