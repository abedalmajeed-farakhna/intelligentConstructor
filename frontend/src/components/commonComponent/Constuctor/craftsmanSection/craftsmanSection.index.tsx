import { Box, Drawer, List } from "@mui/material";
import React from "react";
import { PATH_NAMES } from "../../../../constants/route";
import CustomeListItem from "../../../CoreComponents/CustomeListItem/customeListItem.index";
import useStyles from "./craftsmanSection.style";
import InfoIcon from "@mui/icons-material/Info";


const CraftsmanSection = () => {
    const classes = useStyles();
  
    return (
        <Box className={classes.root} component="nav" aria-label="mailbox folders">
        <div> title</div>

        <div>
Top 3
<></>

        </div>
      </Box>
    );
  };
  
  export default CraftsmanSection;