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
      editable={
        !currentDetails ||
        currentDetails.projectStatus == ProjectStatusEnum.Rejected
      }
      projectStatus={ currentDetails?.projectStatus}
      sector={sectorEnum.Plumber}
    />
  );
};
export default PlumberStep;
