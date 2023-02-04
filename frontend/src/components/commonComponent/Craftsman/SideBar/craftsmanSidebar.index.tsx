import React from "react";
import { List, Drawer } from "@mui/material";
import { Box } from "@mui/system";
import InfoIcon from "@mui/icons-material/Info";

import { PATH_NAMES } from "../../../../constants/route";
import CustomeListItem from "../../../CoreComponents/CustomeListItem/customeListItem.index";

import useStyles from "./craftsmanSidebar.style";
const CraftsmanSidebar = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root} component="nav" aria-label="mailbox folders">
      <Drawer className={classes.drawer} variant="permanent" open>
        <div>
          <List>
            <CustomeListItem
              icon={<InfoIcon />}
              text={"Information"}
              path={PATH_NAMES.INFORMATION}
            />
          </List>

          <List>
            <CustomeListItem
              icon={<InfoIcon />}
              text={"RequestList"}
              path={PATH_NAMES.CRAFTSMAN_REQUEST_LISt}
            />
          </List>
          
        </div>
      </Drawer>
    </Box>
  );
};

export default CraftsmanSidebar;
