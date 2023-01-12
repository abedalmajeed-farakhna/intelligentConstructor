import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

import useStyles from "./imageCard.style";
import { ICardProps } from "./imageCard.type";

const ImageCard: React.FC<ICardProps> = ({ text,description, icon,imagePath }) => {
  const classes = useStyles();

  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      alt="green iguana"
      height="140"
    image={`images/${imagePath}`}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {text}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
  );
};

export default ImageCard;
