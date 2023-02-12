import React from "react";

import { sectorEnum } from "../../../../enums/sectorEnum";
import TopRatedCraftsman from "../TopRatedCraftsman/topRatedCraftsman.index";

import { IPlumberStepProps } from "./plumberStep.type";

const PlumberStep: React.FC<IPlumberStepProps> = ({
  values,
}) => {
  return (
    <TopRatedCraftsman
    values={values}
      sector={sectorEnum.Plumber}
    />
  );
};
export default PlumberStep;