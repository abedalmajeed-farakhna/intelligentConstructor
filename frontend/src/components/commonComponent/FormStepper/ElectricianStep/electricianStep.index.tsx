import React from "react";

import { sectorEnum } from "../../../../enums/sectorEnum";
import TopRatedCraftsman from "../TopRatedCraftsman/topRatedCraftsman.index";

import { IElectricianStepProps } from "./electricianStep.type";

const ElectricianStep: React.FC<IElectricianStepProps> = ({
  values,
  timeLine,
  handleUpdateTimeLine,
}) => {
  return (
    <TopRatedCraftsman
      values={values}
      sector={sectorEnum.Electrician}
    />
  );
};
export default ElectricianStep;
