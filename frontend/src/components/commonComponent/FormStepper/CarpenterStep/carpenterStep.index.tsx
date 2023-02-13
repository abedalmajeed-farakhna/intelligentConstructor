import React from "react";
import { ProjectStatusEnum } from "../../../../enums/projectStatusEnum";

import { sectorEnum } from "../../../../enums/sectorEnum";
import { getStartDate } from "../../../../utils/projectUtils";
import TopAvailableCraftsman from "../../TopAvailableCraftsman/topAvailableCraftsman.index";

import { ICarpenterStepProps } from "./carpenterStep.type";

const CarpenterStep: React.FC<ICarpenterStepProps> = ({
  values,
  previousDetails,
  currentDetails,
  timeLine, handleUpdateTimeLine
}) => {
  return (
    <>
      <TopAvailableCraftsman
      sectionName="carpenter"
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
        values={values} // startDate: stratDate  || new Date('20/1/2022')
        sector={sectorEnum.Carpenter}
      />
    </>
  );
};
export default CarpenterStep;
