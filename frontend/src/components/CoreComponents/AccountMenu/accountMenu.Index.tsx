import * as React from "react";
import { useSelector } from "react-redux";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

import { IApplicationState } from "../../../redux/ApplicationState";
import { IUser } from "../../../types/types";

import useStyles from "./accountMenu.style";
import ProfileImage from "../ProfileImage/profileImage.index";
import CustomMenu from "../Menu/customMenu.index";

const AccountMenu = () => {
  const classes = useStyles();
  const user: IUser = useSelector((state: IApplicationState) => state.user);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <div className={classes.logo}> <img width={150} src={  `/images/logo.png`}/></div>

      <div className={classes.container}>
        <IconButton
          className={classes.accountSettings}
          onClick={handleClick}
          size="small"
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <ProfileImage path={user?.profileImage} />

          <Typography className={classes.userName}>{user.fullName}</Typography>
        </IconButton>
        <CustomMenu open={open} anchorEl={anchorEl} onClose={handleClose} />
      </div>
    </div>
  );
};
export default AccountMenu;
