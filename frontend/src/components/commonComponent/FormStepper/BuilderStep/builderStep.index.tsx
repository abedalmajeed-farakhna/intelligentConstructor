import React from "react";

import { sectorEnum } from "../../../../enums/sectorEnum";
import TopAvailableCraftsman from "../../TopAvailableCraftsman/topAvailableCraftsman.index";

import { IBuilderStepProps } from "./builderStep.type";

const BuilderStep: React.FC<IBuilderStepProps> = ({ values ,timeLine,handleUpdateTimeLine}) => {

  console.log(timeLine,"timeLine");
  return( 
  
  
  <>
  <TopAvailableCraftsman values={values} sector={sectorEnum.Builder} checkBoxName={"builder"} timeLine={timeLine}
  handleUpdateTimeLine ={handleUpdateTimeLine}/>

  </>
  );
};
export default BuilderStep;