import React from "react";

import { sectorEnum } from "../../../../enums/sectorEnum";
import TopAvailableCraftsman from "../../TopAvailableCraftsman/topAvailableCraftsman.index";

import { ITilerStepProps } from "./tilerStep.type";

const TilerStep: React.FC<ITilerStepProps> = ({ values,timeLine,handleUpdateTimeLine }) => {
    return( 
  
  
        <>
        <TopAvailableCraftsman values={values} sector={sectorEnum.Tiler} checkBoxName={"tiler"} timeLine={timeLine}
  handleUpdateTimeLine ={handleUpdateTimeLine}/>
        
          <div>
          TilerStep
         </div>
        </>
        );
      };
      export default TilerStep;