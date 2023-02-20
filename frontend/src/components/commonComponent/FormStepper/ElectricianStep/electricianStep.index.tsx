import React from "react";
import { ProjectStatusEnum } from "../../../../enums/projectStatusEnum";

import { sectorEnum } from "../../../../enums/sectorEnum";
import TopRatedCraftsman from "../TopRatedCraftsman/topRatedCraftsman.index";

import { IElectricianStepProps } from "./electricianStep.type";

const ElectricianStep: React.FC<IElectricianStepProps> = ({values,
  currentDetails
}) => {

  return (
    <TopRatedCraftsman
      editable={
        !currentDetails ||
        currentDetails.projectStatus == ProjectStatusEnum.Rejected || 
        currentDetails.projectStatus == ProjectStatusEnum.Cancel
      }
      projectStatus={ currentDetails?.projectStatus}
      requestId={currentDetails?.requestId}
      selectedUser={currentDetails?.userId}

      values={values}
      sector={sectorEnum.Electrician}
    />
  );
};
export default ElectricianStep;
