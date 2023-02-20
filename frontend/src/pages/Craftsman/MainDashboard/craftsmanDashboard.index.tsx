import { Box, CssBaseline, Grid, Toolbar } from "@mui/material";
import React, { useState } from "react";
import CraftsmanSidebar from "../../../components/commonComponent/Craftsman/SideBar/craftsmanSidebar.index";
import LastRecivedRequests from "../../../components/commonComponent/widgets/LastRecivedRequests/lastRecivedRequests.index";
import TopRatedProject from "../../../components/commonComponent/widgets/TopRatedProject/topRatedProject.index";

import useStyles from "./craftsmanDashboard.style";
import NumberOfequestes from "../../../components/commonComponent/widgets/AllNumberWidgets/NumberOfRequestes/numberOfRequestes.index";
import { ProjectStatusEnum } from "../../../enums/projectStatusEnum";
import RequestsIcon from "@mui/icons-material/WidgetsOutlined";
import PendingIcon from "@mui/icons-material/PauseCircleOutline";
import ApprovedIcon from "@mui/icons-material/AddTask";
import classNames from "classnames";

const CraftsmanDashboard: React.FC<any> = ({ children }) => {
  const classes = useStyles();
  console.log("CraftsmanDashboard");

  return (
    <Box className={classes.root}>
      <CraftsmanSidebar />
      <Box className={classes.main} component="main">
        {children ? (
          children
        ) : (
          <>
            <Grid container>
              <Grid xs={4}>
                <NumberOfequestes
                  icon={
                    <div
                      className={classNames(
                        classes.requestsColor,
                        classes.widgetICon
                      )}
                    >
                      <RequestsIcon /> Requests
                    </div>
                  }
                  title={" number of all requests "}
                />
              </Grid>
              <Grid xs={4}>
                <NumberOfequestes
                  status={ProjectStatusEnum.Pending}
                  icon={
                    <div
                      className={classNames(
                        classes.pendingColor,
                        classes.widgetICon
                      )}
                    >
                      <PendingIcon /> Pending
                    </div>
                  }
                  title={" number of Pending requests "}
                />
              </Grid>
              <Grid item xs={4}>
                <NumberOfequestes
                  status={ProjectStatusEnum.Done}
                  icon={
                    <div
                      className={classNames(
                        classes.approvedColor,
                        classes.widgetICon
                      )}
                    >
                      <ApprovedIcon /> Done
                    </div>
                  }
                  title={" number of Done requests "}
                />
              </Grid>
            </Grid>

            <Grid container>
              <Grid xs={6}>
                <TopRatedProject />
              </Grid>
              <Grid xs={6}>
                <LastRecivedRequests />
              </Grid>
            </Grid>
          </>
        )}
      </Box>
    </Box>
  );
};
export default CraftsmanDashboard;
