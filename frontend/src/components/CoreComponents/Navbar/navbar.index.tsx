import { Home } from "@mui/icons-material";
import useStyles from "./style";
import { AppBar, Box, colors, Toolbar, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import React from "react";

const Navbar = () => {
  const currentUrl = window.location.pathname;

  const classes = useStyles();

  return (
    <AppBar  className={classes.navbar}>
      <Toolbar className={classes.toolbar}>
      <img src={  `/images/logo.png`}/>
        <Box>
          {currentUrl != "/" && (
            <Link className={classes.link} to="/">
              <Home  className={classes.homeIcon}/>
            </Link>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
