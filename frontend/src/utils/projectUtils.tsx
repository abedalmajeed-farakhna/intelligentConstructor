import Swal from "sweetalert2";
import { ProjectStatusEnum } from "../enums/projectStatusEnum";
import { addNumberOfDays } from "./DateUtils";

export const getProjectStatus = (allRequestStatus: ProjectStatusEnum[]) => {
  if (
    allRequestStatus.find((t) => t == ProjectStatusEnum.Inprogres) != undefined
  ) {
    return ProjectStatusEnum.Inprogres;
  }
  if (
    allRequestStatus.filter((t) => t == ProjectStatusEnum.Done).length ==
    allRequestStatus.length
  ) {
    return ProjectStatusEnum.Done;
  }
  return ProjectStatusEnum.Aproved;
};

export const showSuccessPopup = (message?: string) => {
  Swal.fire({
    title: message || "Done",
    icon: "success",
    timerProgressBar: true,
    confirmButtonColor: "#2196f3",
  });
};



export const getIdFromLocationPath = (): number => {
  const location = window.location;
  const locationQiery = location?.href.split("/");
  const id = locationQiery[locationQiery.length - 1];
  return Number(id);
};


export const getStartDate=(previousDetails)=>{
  let startDate;
  if (previousDetails) {
    if (
      previousDetails?.projectStatus != ProjectStatusEnum.Pending &&
      previousDetails.projectStatus != ProjectStatusEnum.Rejected
    ) {
      startDate = addNumberOfDays(previousDetails.expectedEndDate, 1);
    }
  }
  return startDate;
}