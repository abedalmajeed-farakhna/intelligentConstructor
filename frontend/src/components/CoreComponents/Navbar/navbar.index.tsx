import { Home } from "@mui/icons-material";
import useStyles from "./style";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import React from "react";

const Navbar = () => {
  const currentUrl = window.location.pathname;

  const classes = useStyles();

  return (
    <AppBar sx={{ background: currentUrl != "/" ? "" : "transparent" }}>
      <Toolbar className={classes.toolbar}>
        <Typography>LOGO</Typography>
        <Box>
          {currentUrl != "/" && (
            <Link className={classes.link} to="/">
              <Home />
            </Link>
          )}
          {currentUrl == "/" && (
            <Link className={classes.link} to="/login">
              Login
            </Link>
          )}
          {currentUrl == "/" && (
            <Link className={classes.link} to="/signup">
              Sign up
            </Link>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
