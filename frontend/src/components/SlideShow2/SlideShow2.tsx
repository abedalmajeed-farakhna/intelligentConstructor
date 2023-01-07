import { Box, Button, Typography } from "@mui/material";
import React from "react";
import useStyle from "./Style";
import { Link } from "react-router-dom";

export default function SlideShow() {
  const classes = useStyle();

  return (
    <Box className={classes.box}>
      <Box className={classes.leftBox}>
        <Typography variant="h1">professional contractor</Typography>
      </Box>
      <Box className={classes.rightBox}>
        <Box className={classes.innerRightBox}>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
            laborum dolores adipisci sapiente placeat excepturi, at odit. Ex,
            exercitationem inventore.
          </Typography>
          <Box className={classes.box}>
            <Link className={classes.link} to="/login">
              Login
            </Link>
            <Link className={classes.link} to="/signup">
              Sign up
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
