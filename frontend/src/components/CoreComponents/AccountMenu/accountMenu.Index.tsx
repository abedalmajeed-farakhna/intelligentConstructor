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
    <>
      <div className={classes.root}>
        <Typography>{user.fullName}</Typography>

        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <ProfileImage path={user?.profileImage} />
          </IconButton>
        </Tooltip>
      </div>

      <CustomMenu open={open} anchorEl={anchorEl} onClose={handleClose} />
    </>
  );
};
export default AccountMenu;
