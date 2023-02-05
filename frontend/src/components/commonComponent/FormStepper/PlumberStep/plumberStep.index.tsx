import React from "react";

import { sectorEnum } from "../../../../enums/sectorEnum";
import TopRatedCraftsman from "../TopRatedCraftsman/topRatedCraftsman.index";

import { IPlumberStepProps } from "./plumberStep.type";

const PlumberStep: React.FC<IPlumberStepProps> = ({
  values,
  timeLine,
  handleUpdateTimeLine,
}) => {
  return (
    <TopRatedCraftsman
      values={values}
      sector={sectorEnum.Plumber}
      checkBoxName={"plumber"}
      timeLine={timeLine}
      handleUpdateTimeLine={handleUpdateTimeLine}
    />
  );
};
export default PlumberStep;