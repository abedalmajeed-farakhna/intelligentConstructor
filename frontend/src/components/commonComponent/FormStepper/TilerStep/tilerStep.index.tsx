import React from "react";

import { sectorEnum } from "../../../../enums/sectorEnum";
import TopAvailableCraftsman from "../../TopAvailableCraftsman/topAvailableCraftsman.index";

import { ITilerStepProps } from "./tilerStep.type";

const TilerStep: React.FC<ITilerStepProps> = ({ values }) => {
    return( 
  
  
        <>
        <TopAvailableCraftsman values={values} sector={sectorEnum.Tiler} checkBoxName={"Tiler"} />
        
          <div>
          TilerStep
         </div>
        </>
        );
      };
      export default TilerStep;