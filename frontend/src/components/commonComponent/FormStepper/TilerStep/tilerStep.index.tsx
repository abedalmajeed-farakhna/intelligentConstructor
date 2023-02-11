import React from "react";
import { ProjectStatusEnum } from "../../../../enums/projectStatusEnum";

import { sectorEnum } from "../../../../enums/sectorEnum";
import { addNumberOfDays } from "../../../../utils/DateUtils";
import TopAvailableCraftsman from "../../TopAvailableCraftsman/topAvailableCraftsman.index";

import { ITilerStepProps } from "./tilerStep.type";

const TilerStep: React.FC<ITilerStepProps> = ({
  values,
  builderDetails,
  tilerDetails,
  timeLine, handleUpdateTimeLine
}) => {
 
  let stratDate;
  if (builderDetails) {
    if (
      builderDetails?.projectStatus != ProjectStatusEnum.Pending &&
      builderDetails.projectStatus != ProjectStatusEnum.Rejected
    ) {
      stratDate = addNumberOfDays(builderDetails.expectedEndDate, 1);
    }
  }

  return (
    <TopAvailableCraftsman
    timeLine={timeLine}
    handleUpdateTimeLine={handleUpdateTimeLine}
      projectStatus={tilerDetails?.projectStatus}
      editable={
        stratDate != undefined &&
        (!tilerDetails ||
          tilerDetails.projectStatus == ProjectStatusEnum.Rejected)
      }
      values={{ ...values, startDate: stratDate }}
      sector={sectorEnum.Tiler}
    />
  );
};
export default TilerStep;
