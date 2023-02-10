import React from "react";
import { ProjectStatusEnum } from "../../../../enums/projectStatusEnum";

import { sectorEnum } from "../../../../enums/sectorEnum";
import TopAvailableCraftsman from "../../TopAvailableCraftsman/topAvailableCraftsman.index";

import { IBuilderStepProps } from "./builderStep.type";

const BuilderStep: React.FC<IBuilderStepProps> = ({
  values,
  builderDetails,
}) => {
  const editable =
    !builderDetails ||
    builderDetails.projectStatus == ProjectStatusEnum.Rejected;
  return (
    <TopAvailableCraftsman
      selectedUser={builderDetails?.userId}
      projectStatus={builderDetails?.projectStatus}
      values={values}
      sector={sectorEnum.Builder}
      editable={editable}
    />
  );
};
export default BuilderStep;
