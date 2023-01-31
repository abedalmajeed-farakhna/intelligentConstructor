import React from "react";

import { sectorEnum } from "../../../../enums/sectorEnum";
import TopAvailableCraftsman from "../../TopAvailableCraftsman/topAvailableCraftsman.index";

import { ICarpenterStepProps } from "./carpenterStep.type";

const CarpenterStep: React.FC<ICarpenterStepProps> = ({ values,timeLine,handleUpdateTimeLine }) => {
    return( 
  
  
        <>
        <TopAvailableCraftsman values={values} sector={sectorEnum.Carpenter} checkBoxName={"carpenter"} timeLine={timeLine}
  handleUpdateTimeLine ={handleUpdateTimeLine}/>
        
         
        </>
        );
      };
      export default CarpenterStep;