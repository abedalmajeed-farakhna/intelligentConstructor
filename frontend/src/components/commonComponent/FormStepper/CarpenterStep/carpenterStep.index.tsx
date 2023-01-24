import React from "react";

import { sectorEnum } from "../../../../enums/sectorEnum";
import TopAvailableCraftsman from "../../TopAvailableCraftsman/topAvailableCraftsman.index";

import { ICarpenterStepProps } from "./carpenterStep.type";

const CarpenterStep: React.FC<ICarpenterStepProps> = ({ values }) => {
    return( 
  
  
        <>
        <TopAvailableCraftsman values={values} sector={sectorEnum.Carpenter} />
        
          <div>
          CarpenterStep
         </div>
        </>
        );
      };
      export default CarpenterStep;