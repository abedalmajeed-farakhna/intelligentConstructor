import axios from "axios";
import React, { useState } from "react";
import { ProjectStatusEnum } from "../../../../enums/projectStatusEnum";
import { ICraftsmanActionProps } from "./craftsmanAction.type";
import CustomIconButton from "../../../CoreComponents/CustomIconButton/customIconButton.index";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { showSuccessPopup } from "../../../../utils/projectUtils";
import AddReactionIcon from '@mui/icons-material/AddReaction';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import OfflinePinIcon from '@mui/icons-material/OfflinePin';
import { Done } from "@mui/icons-material";
import useStyles from "./craftsmanAction.style";
import HourglassTopIcon from '@mui/icons-material/HourglassTop';

const CraftsmanAction: React.FC<ICraftsmanActionProps> = ({
  requestStatus,
  id
}) => {

  const classes = useStyles();

  const [currentRequestStatus, setCurrentRequestStatus] =
    useState(requestStatus);

  const acceptRequest = () => {
    const data = { requestId: id };
    axios.post(`/Project/AcceptRequest`, data).then(() => {
      showSuccessPopup();
      setCurrentRequestStatus(ProjectStatusEnum.Aproved);
    });
  };

  const reject = () => {
    const data = { requestId: id };
    axios.post(`/Project/RejectRequest`, data).then(() => {
      showSuccessPopup();
      setCurrentRequestStatus(ProjectStatusEnum.Rejected);
    });
  };
  
  const inProgress = () => {
    const data = { requestId: id };
    axios.post(`/Project/StartWorking`, data).then(() => {
      showSuccessPopup();
      setCurrentRequestStatus(ProjectStatusEnum.Inprogres);
    });
  };

  const doneWorking =()=>{
    const data = { requestId: id };

    axios.post(`/Project/DoneWorking`, data).then(() => {
      showSuccessPopup();
      setCurrentRequestStatus(ProjectStatusEnum.Done);
    });
  }
  switch (currentRequestStatus) {
    case ProjectStatusEnum.Pending:
      return (
        <>
          <div className={classes.tableICon} onClick={acceptRequest}>
            <CheckCircleIcon color="success" className={classes.icon} /> Accept
          </div>
          <div className={classes.tableICon} onClick={reject}>
            <CancelIcon   className={classes.icon} color="error" /> Reject
          </div>
        </>
      );

    case ProjectStatusEnum.Aproved:
      return (
        <div className={classes.tableICon} onClick={inProgress}>
            <HourglassTopIcon color="primary" className={classes.icon} />
          Start working
        </div>
      );
   /* case ProjectStatusEnum.Rejected:
      return <> Rejected</>;
*/
    case ProjectStatusEnum.Inprogres:
      return (
        <div className={classes.tableICon} onClick={doneWorking}>

          <DoneAllIcon color="success" className={classes.icon}/> Done
        </div>
        
      );

   /* case ProjectStatusEnum.Done:
      return <DoneAllIcon color="secondary" />;*/
  }

  return <div></div>;
};
export default CraftsmanAction;