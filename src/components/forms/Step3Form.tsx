import { Button, Checkbox, FlexLayout, H2 } from "@salt-ds/core";
import React from "react";
import { useForm } from "react-hook-form";

const Step3Form: React.FC<{ resetForm: () => void, goToPreviousStep:()=>void }> = ({ resetForm,goToPreviousStep }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<{ confirmation: boolean }>();

  const onSubmit = (data: { confirmation: boolean }) => {
    console.log("Form Data:", data);
    alert("Success! Your form has been submitted.");
    resetForm();
  };

  return (
    <FlexLayout>
      <H2>Confirmation</H2>
      <form onSubmit={handleSubmit(onSubmit)}>
          <Checkbox
            label="I confirm that the information provided is correct"
            {...register("confirmation", { required: "Confirmation is required" })}
          />
          {errors.confirmation && <p>{errors.confirmation.message}</p>}
          <Button type="button" onClick={()=>goToPreviousStep()}>Previous</Button>
        <Button sentiment="accented" appearance="solid" type="submit">Submit</Button>
      </form>
    </FlexLayout>
  );
};

export default Step3Form;