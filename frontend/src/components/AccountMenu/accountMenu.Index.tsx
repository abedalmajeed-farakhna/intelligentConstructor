import * as React from "react";
import { useSelector } from "react-redux";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

import { IApplicationState } from "../../redux/ApplicationState";
import { IUser } from "../../types/types";
import CustomMenu from "../Menu/customMenu.index";

import useStyles from "./accountMenu.style";

const AccountMenu = () => {
  const user: IUser = useSelector((state: IApplicationState) => state.user);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log(user?.profileImage,"user?.profileImage")
  return (
    <>
      <div className={classes.root}>
        <Typography sx={{ minWidth: 100 }}>{user.fullName}</Typography>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            
            
          {user?.profileImage? 
          <div>
            <img className={classes.ProfileImage} src= {`Upload/${user?.profileImage}`}alt="profile pecher" width="25px" height="25px"/>
            </div> 
          : <Avatar sx={{ width: 32, height: 32 }}/>
                        }
          </IconButton>
        </Tooltip>
      </div>

      <CustomMenu open={open} anchorEl={anchorEl} onClose={handleClose} />
    </>
  );
};
export default AccountMenu;
