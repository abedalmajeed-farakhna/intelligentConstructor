import React from "react";
import { ProjectStatusEnum } from "../../../../enums/projectStatusEnum";

import { sectorEnum } from "../../../../enums/sectorEnum";
import { addNumberOfDays } from "../../../../utils/DateUtils";
import TopAvailableCraftsman from "../../TopAvailableCraftsman/topAvailableCraftsman.index";

import { ITilerStepProps } from "./tilerStep.type";

const TilerStep: React.FC<ITilerStepProps> = ({
  values,
  currentDetails,
  previousDetails,
  timeLine, handleUpdateTimeLine
}) => {
 
 /* let stratDate;
  if (builderDetails) {
    if (
      builderDetails?.projectStatus != ProjectStatusEnum.Pending &&
      builderDetails.projectStatus != ProjectStatusEnum.Rejected
    ) {
      stratDate = addNumberOfDays(builderDetails.expectedEndDate, 1);
    }
  }*/

  console.log("tiler ", values);
  console.log("tiler :builderDetails ", previousDetails);
  return (
    <TopAvailableCraftsman
     sectionName="tiler"
    timeLine={timeLine}
    handleUpdateTimeLine={handleUpdateTimeLine}
      projectStatus={currentDetails?.projectStatus}
      editable={
        previousDetails &&
        ![ProjectStatusEnum.Rejected, ProjectStatusEnum.Pending].includes(
          previousDetails.projectStatus
        ) &&
        (!currentDetails ||
          currentDetails.projectStatus == ProjectStatusEnum.Rejected)
      }
      values={values}
      sector={sectorEnum.Tiler}
    />
  );
};
export default TilerStep;
