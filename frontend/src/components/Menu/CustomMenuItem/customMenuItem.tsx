
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
import { ICustomMenuProps } from '../customMenu.types';
import { ICustomMenuItemProps } from './customMenuItem.types';

const CustomMenuItem :React.FC<ICustomMenuItemProps> = ({icon ,text,onClick}) => {
 
  
  return (
<MenuItem onClick={onClick}>
      {icon &&<ListItemIcon>
        {icon}
      </ListItemIcon>}
      {text}
    </MenuItem>
  );
};

export default CustomMenuItem;

