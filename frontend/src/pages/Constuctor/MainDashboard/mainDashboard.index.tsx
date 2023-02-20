import Grid from "@mui/material/Grid";
import React from "react";
import NumberOfequestes from "../../../components/commonComponent/widgets/AllNumberWidgets/NumberOfRequestes/numberOfRequestes.index";
import { ProjectStatusEnum } from "../../../enums/projectStatusEnum";
import InprogresIcon from '@mui/icons-material/Autorenew';
import ApprovedIcon from '@mui/icons-material/AddTask';
import PendingIcon from '@mui/icons-material/PauseCircleOutline';
import RejectedIcon from '@mui/icons-material/HighlightOff';
import RequestsIcon from '@mui/icons-material/WidgetsOutlined';
import useStyles from "./mainDashboard.style";
import classNames from "classnames";

const MainDashboard: React.FC<any> = ({ children }) => {
  const data = [{ path: "path", element: "element" }];
  const classes = useStyles();

  return (
    <>
      <Grid container>
        <Grid xs={4}>
          <NumberOfequestes
            icon={<div className={classNames(classes.requestsColor,classes.widgetICon)}><RequestsIcon /> Requests</div>}
            title={" number of all requests "}
            isSentRequests={true}
          />
        </Grid>

        <Grid xs={4}>
          <NumberOfequestes
            status={ProjectStatusEnum.Pending}
            icon={<div className={classNames(classes.pendingColor,classes.widgetICon)}><PendingIcon /> Pending</div>}
            title={" number of Pending requests "}
            isSentRequests={true}
          />
        </Grid>

        <Grid xs={4}>
          <NumberOfequestes
            status={ProjectStatusEnum.Rejected}
            icon={<div className={classNames(classes.rejectedColor,classes.widgetICon)}><RejectedIcon /> Rejected</div>}
            title={" number of Rejected requests "}
            isSentRequests={true}
          />
        </Grid>

        <Grid xs={4}>
          <NumberOfequestes
            status={ProjectStatusEnum.Aproved}
            icon={<div className={classNames(classes.approvedColor,classes.widgetICon)}><ApprovedIcon /> Approved</div>}
            title={" number of Approved requests "}
            isSentRequests={true}
          />
        </Grid>

        <Grid xs={4}>
          <NumberOfequestes
            status={ProjectStatusEnum.Inprogres}
            icon={<div className={classNames(classes.inprogresColor,classes.widgetICon)}><InprogresIcon /> Inprogres</div>}
            title={" number of Inprogres requests "}
            isSentRequests={true}
          />
        </Grid>
      </Grid>
    </>
  );
};
export default MainDashboard;
