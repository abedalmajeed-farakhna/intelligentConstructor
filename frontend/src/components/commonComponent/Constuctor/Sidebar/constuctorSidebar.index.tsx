import { Box, Drawer, List } from "@mui/material";
import React from "react";
import { PATH_NAMES } from "../../../../constants/route";
import CustomeListItem from "../../../CoreComponents/CustomeListItem/customeListItem.index";
import useStyles from "./constuctorSidebar.style";
import InfoIcon from "@mui/icons-material/Info";


const ConstuctorSidebar = () => {
    const classes = useStyles();
  
    return (
        <Box className={classes.root} component="nav" aria-label="mailbox folders">
        <Drawer className={classes.drawer} variant="permanent" open>
          <div>
            <List>
              <CustomeListItem
                icon={<InfoIcon />}
                path={PATH_NAMES.INFORMATION}
                text={"information"}
              />
  
              <CustomeListItem
                icon={<InfoIcon />}
                path={PATH_NAMES.CRAFTSMAN}
                text={"craftsman"}
              />
               <CustomeListItem
                icon={<InfoIcon />}
                path={PATH_NAMES.REQuEST}
                text={"request"}
              />
              
            </List>
          </div>
        </Drawer>
      </Box>
    );
  };
  
  export default ConstuctorSidebar;