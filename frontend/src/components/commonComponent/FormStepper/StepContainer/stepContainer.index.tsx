import React from "react";
import BuilderStep from "../BuilderStep/builderStep.index";
import CarpenterStep from "../CarpenterStep/carpenterStep.index";
import HousePainterStep from "../HousePainterStep/housePainterStep.index";
import StepOne from "../StepOne/stepOne.index";
import TilerStep from "../TilerStep/tilerStep.index";
import { IStepContainerProps } from "./stepContainer.type";


const StepContainer: React.FC<IStepContainerProps> = ({step,errors,touched,onToChange,onFromChange,values  }) => {


  switch(step){
    case 0:
      return (<StepOne errors={errors} touched={touched} onFromChange={onFromChange} onToChange={onToChange}/>)
      case 1:
        return (<BuilderStep fullName={""} username={""} id={0} values={values}/>)

        case 2:
        return (<TilerStep fullName={""} username={""} id={1} values={values}/>)
        
        case 3:
        return (<HousePainterStep fullName={""} username={""} id={2} values={values}/>)

        case 4:
        return (<CarpenterStep fullName={""} username={""} id={3} values={values}/>)

        default : return<></>
  }

};
export default StepContainer;






