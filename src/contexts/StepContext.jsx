import { useState } from "react";
import { StepContext } from "./contextValues.js";
import { STEPS } from "../constants/index.js";

// Provides step state and navigation logic to the flow
export const StepProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(STEPS.SELECT_SKIP);
  const [selectedSkip, setSelectedSkip] = useState(null);
  const [completedSteps, setCompletedSteps] = useState([
    STEPS.POSTCODE,
    STEPS.WASTE_TYPE,
  ]);

  // Move to a specific step if it's already completed
  const goToStep = (step) => {
    if (step < currentStep || completedSteps.includes(step)) {
      setCurrentStep(step);
    }
  };

  // Proceed to the next step 
  const goToNextStep = () => {
    if (currentStep === STEPS.SELECT_SKIP && !selectedSkip) {
      return false;
    }
    if (currentStep < STEPS.PAYMENT) {
      setCompletedSteps((prev) => [...new Set([...prev, currentStep])]);
      setCurrentStep((prev) => prev + 1);
      return true;
    }
    return false;
  };

  // Go back to the previous step if not at the first step
  const goToPreviousStep = () => {
    if (currentStep > STEPS.POSTCODE) {
      setCurrentStep((prev) => prev - 1);
      return true;
    }
    return false;
  };

  return (
    <StepContext.Provider
      value={{
        currentStep,
        selectedSkip,
        setSelectedSkip,
        completedSteps,
        goToStep,
        goToNextStep,
        goToPreviousStep,
      }}
    >
      {children}
    </StepContext.Provider>
  );
};