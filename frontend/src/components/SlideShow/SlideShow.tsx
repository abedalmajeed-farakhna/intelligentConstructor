import { Box } from "@mui/material";
import React from "react";
import useStyle from "./style";

export default function SlideShow() {
  const classes = useStyle();

  return (
    <Box className={classes.box}>
      <img
        className={classes.img}
        src="https://source.unsplash.com/0w-uTa0Xz7w"
        alt=""
      />
      <img
        className={classes.img}
        src="https://source.unsplash.com/WgGJjGN4_ck"
        alt=""
      />
      <img
        className={classes.img}
        src="https://source.unsplash.com/gTh3w6rUaHs"
        alt=""
      />
      <img
        className={classes.img}
        src="https://source.unsplash.com/x1w_Q78xNEY"
        alt=""
      />
      <img
        className={classes.img}
        src="https://source.unsplash.com/_RBcxo9AU-U"
        alt=""
      />
      <img
        className={classes.img}
        src="https://source.unsplash.com/pF_2lrjWiJE"
        alt=""
      />
      <img
        className={classes.img}
        src="https://source.unsplash.com/fecsiuPSJsc"
        alt=""
      />
      <img
        className={classes.img}
        src="https://source.unsplash.com/u1yF09FUVk0"
        alt=""
      />
    </Box>
  );
}
