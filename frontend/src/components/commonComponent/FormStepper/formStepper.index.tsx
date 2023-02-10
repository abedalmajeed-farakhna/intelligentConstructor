import React, { useEffect, useRef, useState } from "react";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import StepContainer from "./StepContainer/stepContainer.index";
import { Steps } from "./formStepper.utils";
import CustomButton from "../../CoreComponents/CustomButton/customButton.index";
import { Exceptions } from "../../../enums/exceptions";
import { IFormStepperProps } from "./formStepper.type";

const FormStepper: React.FC<IFormStepperProps> = ({
  errors,
  touched,
  values,
  timeLine,
  onFromChange,
  handleUpdateTimeLine,
}) => {
  const customeErrors = useRef(errors);
  //const [flag, setFlag] = useState(false); // dont remove it 


  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
   /* if (activeStep == 0) {
      checkStepOneValidation();
      const  validationErrors = (customeErrors.current as any)
      if( validationErrors.projectName  || validationErrors.space){
        return;
      }
    }*/
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  console.log(timeLine,"timeLine")
  const total = Object.values(timeLine).reduce(
    (sum, previousValue) => sum + previousValue.numberOfDays,
    0
  );
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {Steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          return (
            
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === Steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <>
            number of Days : {total}
            <StepContainer
             // validateSpace={validateSpace}
             // validateProjectName={validateProjectName}
              step={activeStep}
              errors={errors}
              touched={touched}
              customeErrors={null}
              onFromChange={onFromChange}
              values={values}
              timeLine={timeLine}
              handleUpdateTimeLine={(t) => handleUpdateTimeLine(t)}
            />
          </>

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            {activeStep === Steps.length - 1 ? (
              <CustomButton text={"Finish"} />
              
            ) : (
              <Button onClick={handleNext}>Next </Button>
            )}
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
};
export default FormStepper;