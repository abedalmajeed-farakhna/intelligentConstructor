import * as React from "react";
import Avatar from "@mui/material/Avatar";

import Logout from "@mui/icons-material/Logout";
import { Menu } from "@mui/material";
import { ICustomMenuProps } from "./customMenu.types";
import CustomMenuItem from "./CustomMenuItem/customMenuItem";
import { PATH_NAMES } from "../../constants/route";
import { useNavigate } from "react-router-dom";

const CustomMenu: React.FC<ICustomMenuProps> = ({
  open,
  anchorEl,
  onClose,
}) => {
  //const [anchorEl, setAnchorEl] = React.useState<>(null);
  //const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("ssss");
    navigate(PATH_NAMES.Logout); //TODO save name in redux
  };
  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={onClose}
      onClick={onClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          "&:before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <CustomMenuItem text={"Profile"} icon={<Avatar />} />

      <CustomMenuItem
        text={"Logout"}
        onClick={handleLogout}
        icon={<Logout fontSize="small" />}
      />
    </Menu>
  );
};
export default CustomMenu;
