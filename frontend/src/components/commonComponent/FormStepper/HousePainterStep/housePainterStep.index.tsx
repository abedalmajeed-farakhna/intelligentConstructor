import React from "react";

import { sectorEnum } from "../../../../enums/sectorEnum";
import TopAvailableCraftsman from "../../TopAvailableCraftsman/topAvailableCraftsman.index";

import { IHousePainterStepProps } from "./housePainterStep.type";

const HousePainterStep: React.FC<IHousePainterStepProps> = ({ values }) => {
    return( 
  
  
        <>
        <TopAvailableCraftsman values={values} sector={sectorEnum.HousePainter} />
        
          <div>
          HousePainterStep
         </div>
        </>
        );
      };
      export default HousePainterStep;