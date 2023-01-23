import React from "react";
import StepOne from "../StepOne/stepOne.index";
import { IStepContainerProps } from "./stepContainer.type";


const StepContainer: React.FC<IStepContainerProps> = ({step,errors,touched  }) => {


  switch(step){
    case 0:
      return (<StepOne errors={errors} touched={touched}/>)
      case 1:
        return (<div> Builder 1</div>)

        case 2:
        return (<div>  HousePainter 1</div>)
        
        case 3:
        return (<div>  Tiler 1</div>)
        default : return<></>
  }

};
export default StepContainer;






