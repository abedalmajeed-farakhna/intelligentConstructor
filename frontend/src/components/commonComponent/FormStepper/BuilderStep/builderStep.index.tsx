import React from "react";
import { ProjectStatusEnum } from "../../../../enums/projectStatusEnum";

import { sectorEnum } from "../../../../enums/sectorEnum";
import TopAvailableCraftsman from "../../TopAvailableCraftsman/topAvailableCraftsman.index";

import { IBuilderStepProps } from "./builderStep.type";

const BuilderStep: React.FC<IBuilderStepProps> = ({
  values,
  builderDetails,
  timeLine,
  handleUpdateTimeLine,
}) => {
  const editable =
    !builderDetails ||
    builderDetails.projectStatus == ProjectStatusEnum.Rejected ||
    builderDetails.projectStatus == ProjectStatusEnum.Cancel;
  return (
    <TopAvailableCraftsman
      sectionName="builder"
      timeLine={timeLine}
      handleUpdateTimeLine={handleUpdateTimeLine}
      selectedUser={builderDetails?.userId}
      projectStatus={builderDetails?.projectStatus}
      requestId={builderDetails?.requestId}
      values={values}
      sector={sectorEnum.Builder}
      editable={editable}
      showNote={false}
    />
  );
};
export default BuilderStep;
