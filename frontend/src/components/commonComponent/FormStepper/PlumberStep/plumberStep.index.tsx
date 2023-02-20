import React from "react";

import { ProjectStatusEnum } from "../../../../enums/projectStatusEnum";
import { sectorEnum } from "../../../../enums/sectorEnum";
import TopRatedCraftsman from "../TopRatedCraftsman/topRatedCraftsman.index";

import { IPlumberStepProps } from "./plumberStep.type";

const PlumberStep: React.FC<IPlumberStepProps> = ({
  values,
  currentDetails,
}) => {
  return (
    <TopRatedCraftsman
      values={values}
      selectedUser={currentDetails?.userId}

      editable={
        !currentDetails ||
        currentDetails.projectStatus == ProjectStatusEnum.Rejected ||
        currentDetails.projectStatus == ProjectStatusEnum.Cancel
      }
      requestId={currentDetails?.requestId}

      projectStatus={ currentDetails?.projectStatus}
      sector={sectorEnum.Plumber}
    />
  );
};
export default PlumberStep;
