import {
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  Drawer,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import useStyles from "./craftsmanSidebar.style";
import { Link } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';
import { PATH_NAMES } from "../../constants/route";
import CustomLink from "../CoreComponents/CustomLink/customLink.index";
const CraftsmanSidebar = () => {
  const drawerWidth = 250;

  //const container = window !== undefined ? () => window().document.body : undefined;
  const classes = useStyles();

  return (
      <Box
      className={classes.root}
        component="nav"
        aria-label="mailbox folders"
      >
        <Drawer 
      className={classes.drawer}  
          variant="permanent"
        
          open
        >
          <div>
            <List>
              <ListItem key={"information"} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <InfoIcon />
                  </ListItemIcon>
                  <CustomLink path={PATH_NAMES.INFORMATION} text={"information"}     />
               
                </ListItemButton>
              </ListItem>
            </List>
          </div>
        </Drawer>
      </Box>

     
  );
};

export default CraftsmanSidebar;
