import React from "react";
import {
  List,
  Drawer,
} from "@mui/material";
import { Box } from "@mui/system";
import InfoIcon from "@mui/icons-material/Info";

import { PATH_NAMES } from "../../../../constants/route";
import CustomeListItem from "../../../CoreComponents/CustomeListItem/customeListItem.index";

import useStyles from "./guestSidebar.style";
const GuestSidebar = () => {
  const drawerWidth = 250;

  //const container = window !== undefined ? () => window().document.body : undefined;
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
          </List>
        </div>
      </Drawer>
    </Box>
  );
};

export default GuestSidebar;