import { Card, FlexLayout } from "@salt-ds/core";
import { useState } from "react";
import Stepper from "./Stepper";
import { StepRecord } from "@salt-ds/lab";
import Step1Form from "./forms/Step1Form";
import Step2Form from "./forms/Step2Form";
import Step3Form from "./forms/Step3Form";

const initialSteps = [
  { id: "step-1", label: "Step 1", stage: "active" },
  { id: "step-2", label: "Step 2", stage: "pending" },
  { id: "step-3", label: "Step 3", stage: "pending" },
] as StepRecord[];

const SignUp = () => {
  const [stepData, setStepData] = useState<StepRecord[]>(initialSteps);
  const goToNextStep = () => {
    setStepData((prevSteps) => {
      const currentIndex = prevSteps.findIndex(
        (step) => step.stage === "active"
      );
      if (currentIndex === -1 || currentIndex === prevSteps.length - 1)
        return prevSteps;

      return prevSteps.map((step, index) => ({
        ...step,
        stage:
          index === currentIndex + 1
            ? "active"
            : index < currentIndex + 1
            ? "completed"
            : "pending",
      }));
    });
  };
  const resetForm = () => {
    setStepData(initialSteps);
  };
  const goToPreviousStep = () => {
    setStepData((prevSteps) => {
      const currentIndex = prevSteps.findIndex(
        (step) => step.stage === "active"
      );
      if (currentIndex === -1 || currentIndex === 0) return prevSteps;

      return prevSteps.map((step, index) => ({
        ...step,
        stage:
          index === currentIndex - 1
            ? "active"
            : index < currentIndex - 1
            ? "completed"
            : "pending",
      }));
    });
  };
  const renderStepForm = () => {
    const activeStep = stepData.find((step) => step.stage === "active");

    if (activeStep?.id === "step-1") {
      return <Step1Form goToNextStep={goToNextStep} />;
    } else if (activeStep?.id === "step-2") {
      return (
        <Step2Form
          goToNextStep={goToNextStep}
          goToPreviousStep={goToPreviousStep}
        />
      );
    } else if (activeStep?.id === "step-3") {
      return (
        <Step3Form resetForm={resetForm} goToPreviousStep={goToPreviousStep} />
      );
    }
    return null;
  };

  return (
    <>
      <FlexLayout direction={"column"} padding={"10px 50px"}>
        <Card>
          <Stepper stepData={stepData} />
          {renderStepForm()}
        </Card>
      </FlexLayout>
    </>
  );
};

export default SignUp;
