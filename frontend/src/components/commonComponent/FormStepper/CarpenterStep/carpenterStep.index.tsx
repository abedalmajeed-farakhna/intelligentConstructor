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
  let stratDate = getStartDate(previousDetails);
  return (
    <>
      <TopAvailableCraftsman
      timeLine={timeLine}
      handleUpdateTimeLine={handleUpdateTimeLine}
        projectStatus={currentDetails?.projectStatus}
        editable={
          stratDate != undefined &&
          (!currentDetails ||
            currentDetails.projectStatus == ProjectStatusEnum.Rejected)
        }
        values={{ ...values}} // startDate: stratDate  || new Date('20/1/2022')
        sector={sectorEnum.Carpenter}
      />
    </>
  );
};
export default CarpenterStep;
