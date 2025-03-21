import { StackLayout } from "@salt-ds/core";
import { Step, type StepRecord, SteppedTracker } from "@salt-ds/lab";

const Stepper = ({ stepData }: { stepData: StepRecord[] }) => {
  return (
    <StackLayout style={{ minWidth: "100%" }}>
      <SteppedTracker>
        {stepData.map((step) => (
          <Step key={step.id} {...step} />
        ))}
      </SteppedTracker>
    </StackLayout>
  );
};

export default Stepper;
