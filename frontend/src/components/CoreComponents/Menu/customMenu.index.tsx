import * as React from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Logout from "@mui/icons-material/Logout";
import Profile from '@mui/icons-material/Create';
import { Menu } from "@mui/material";

import { PATH_NAMES } from "../../../constants/route";

import { ICustomMenuProps } from "./customMenu.types";
import CustomMenuItem from "./CustomMenuItem/customMenuItem";
import useStyles from "./customMenu.style";


const CustomMenu: React.FC<ICustomMenuProps> = ({open, anchorEl, onClose}) => {
  
  const navigate = useNavigate();
  const classes = useStyles();

  const handleLogout = () => {
    navigate(PATH_NAMES.Logout); //TODO save name in redux
  };

  const goToProfile=()=>{
    navigate(PATH_NAMES.INFORMATION);
  }
  return (
    <Menu className={classes.root }
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={onClose}
      onClick={onClose}
    >
      <CustomMenuItem text={"Profile"} icon={<Profile />} onClick={goToProfile} />

      <CustomMenuItem
        text={"Logout"}
        onClick={handleLogout}
        icon={<Logout fontSize="small" />}
      />
    </Menu>
  );
};
export default CustomMenu;
