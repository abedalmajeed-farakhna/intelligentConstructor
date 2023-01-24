import React from "react";
import BuilderStep from "../BuilderStep/builderStep.index";
import StepOne from "../StepOne/stepOne.index";
import { IStepContainerProps } from "./stepContainer.type";


const StepContainer: React.FC<IStepContainerProps> = ({step,errors,touched,onToChange,onFromChange,values  }) => {


  switch(step){
    case 0:
      return (<StepOne errors={errors} touched={touched} onFromChange={onFromChange} onToChange={onToChange}/>)
      case 1:
        return (<BuilderStep fullName={""} username={""} id={0} values={values}/>)

        case 2:
        return (<div>  HousePainter 1</div>)
        
        case 3:
        return (<div>  Tiler 1</div>)
        default : return<></>
  }

};
export default StepContainer;






