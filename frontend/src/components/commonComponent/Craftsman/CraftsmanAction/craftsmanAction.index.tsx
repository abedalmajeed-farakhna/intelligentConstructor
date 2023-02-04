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
const CraftsmanAction: React.FC<ICraftsmanActionProps> = ({
  requestStatus,
  id,
}) => {
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
          <CustomIconButton
            handleOnClick={acceptRequest}
            title={"Accept"}
            icon={<CheckCircleIcon color="success" />}
          />
          <CustomIconButton
            handleOnClick={reject}
            title={"Reject"}
            icon={<CancelIcon color="error" />}
          />
        </>
      );

    case ProjectStatusEnum.Aproved:
      return (
        <CustomIconButton
          handleOnClick={inProgress}
          title={"Start Progress"}
          icon={<AddReactionIcon color="primary" />}
        />
      );
    case ProjectStatusEnum.Rejected:
      return <> Rejected</>;

      case ProjectStatusEnum.Inprogres:
        return  <CustomIconButton
        handleOnClick={doneWorking}
        title={"Done Progress"}
        icon={<OfflinePinIcon color="success" />}
      />;

        case ProjectStatusEnum.Done:
        return <DoneAllIcon color="secondary"/>;
  }

  return <div></div>;
};
export default CraftsmanAction;