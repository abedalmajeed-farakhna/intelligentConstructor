
import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';

import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { Menu } from '@mui/material';
import { ICustomMenuProps } from './customMenu.types';
import CustomMenuItem from './CustomMenuItem/customMenuItem';
import { PATH_NAMES } from '../../constants/route';
import { useNavigate } from 'react-router-dom';

const CustomMenu :React.FC<ICustomMenuProps> = ({open ,anchorEl,onClose}) => {

  //const [anchorEl, setAnchorEl] = React.useState<>(null);
  //const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleLogout=()=>{
    console.log("ssss")
    navigate(PATH_NAMES.Logout ); //TODO save name in redux
  }
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
        overflow: 'visible',
        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
        mt: 1.5,
        '& .MuiAvatar-root': {
          width: 32,
          height: 32,
          ml: -0.5,
          mr: 1,
        },
        '&:before': {
          content: '""',
          display: 'block',
          position: 'absolute',
          top: 0,
          right: 14,
          width: 10,
          height: 10,
          bgcolor: 'background.paper',
          transform: 'translateY(-50%) rotate(45deg)',
          zIndex: 0,
        },
      },
    }}
    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
  >

    <CustomMenuItem 
    text ={"Profile"}
    icon ={<Avatar />}
    />
    

    <CustomMenuItem 
    text ={"Settings"}
    icon ={
      <Settings fontSize="small" />}
    />


<CustomMenuItem 
    text ={"Settings 02"}
    
    />

<CustomMenuItem 
    text ={"Logout"}
    onClick = {handleLogout}
    icon ={
      <Logout fontSize="small" />}
    />
      
  </Menu>
   
  );
};
export default CustomMenu;

