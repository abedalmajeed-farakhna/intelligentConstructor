import { ProjectStatusEnum } from "../enums/projectStatusEnum";

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