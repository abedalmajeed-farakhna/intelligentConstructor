import React from "react";
import BuilderStep from "../BuilderStep/builderStep.index";
import CarpenterStep from "../CarpenterStep/carpenterStep.index";
import HousePainterStep from "../HousePainterStep/housePainterStep.index";
import StepOne from "../StepOne/stepOne.index";
import TilerStep from "../TilerStep/tilerStep.index";
import { IStepContainerProps } from "./stepContainer.type";


const StepContainer: React.FC<IStepContainerProps> = ({step,errors,touched,customeErrors,onFromChange,values , timeLine, handleUpdateTimeLine ,validateSpace,validateProjectName}) => {

  console.log(customeErrors,"customeErrors:StepContainer")

  switch(step){
    case 0:
      return (<StepOne  validateSpace={validateSpace} validateProjectName={validateProjectName} customeErrors={customeErrors} errors={errors} touched={touched} onFromChange={onFromChange} />)
      case 1:
        return (<BuilderStep values={values} timeLine ={timeLine} handleUpdateTimeLine={handleUpdateTimeLine}/>)

        case 2:
        return (<TilerStep values={values} timeLine ={timeLine} handleUpdateTimeLine={handleUpdateTimeLine}/>)
        
        case 3:
        return (<HousePainterStep values={values} timeLine ={timeLine} handleUpdateTimeLine={handleUpdateTimeLine}/>)

        case 4:
        return (<CarpenterStep values={values} timeLine ={timeLine} handleUpdateTimeLine={handleUpdateTimeLine}/>)

        default : return<></>
  }

};
export default StepContainer;






