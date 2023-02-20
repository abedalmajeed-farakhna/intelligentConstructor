import { Box, Drawer, List } from "@mui/material";
import React from "react";
import { PATH_NAMES } from "../../../../constants/route";
import CustomeListItem from "../../../CoreComponents/CustomeListItem/customeListItem.index";
import useStyles from "./constuctorSidebar.style";
import InfoIcon from "@mui/icons-material/Info";
import DashboardIcon from "@mui/icons-material/GridView";
import CraftsmanIcon from "@mui/icons-material/Groups";
import RequestIcon from "@mui/icons-material/Send";
import ProjectIcon from "@mui/icons-material/Apartment";

const ConstuctorSidebar = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root} component="nav" aria-label="mailbox folders">
      <Drawer className={classes.drawer} variant="permanent" open>
        <div>
          <List>
            <CustomeListItem
              icon={<DashboardIcon />}
              path={"/"}
              activeList={["/dashboard"]}
              text={"Dashboard"}
            />

            <CustomeListItem
              icon={<CraftsmanIcon />}
              path={PATH_NAMES.CRAFTSMAN}
              text={"craftsman"}
              activeList={["/craftsman"]}
            />
            <CustomeListItem
              icon={<RequestIcon />}
              path={PATH_NAMES.CONSTUCTOR_REQUEST}
              text={"request"}
              activeList={["constuctorRequestList","RequestDetails"]}
            />

            <CustomeListItem
              icon={<ProjectIcon />}
              path={PATH_NAMES.PROJECT_LIST}
              text={"project"}
               activeList={["PROJECTLIST","PROJECTDETAILS","addProjectCraftsman","project"]}
            />
          </List>
        </div>
      </Drawer>
    </Box>
  );
};

export default ConstuctorSidebar;