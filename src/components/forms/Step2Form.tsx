import { Button, FlexLayout, H2 } from '@salt-ds/core';
import React from 'react'
import { useForm } from 'react-hook-form';
import { TextInput } from '../../reusableComponents/InputComponents';

const Step2Form: React.FC<{ goToNextStep: () => void, goToPreviousStep: ()=> void }> = ({ goToNextStep, goToPreviousStep }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<{ addressLine1: string; addressLine2: string }>();
    
      const onSubmit = (data: { addressLine1: string; addressLine2: string }) => {
        console.log("Form Data:", data);
        goToNextStep()
      };

  return (
    <FlexLayout direction={'column'} gap={0}>
      <H2>Address Form</H2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          id="addressLine1"
          label="Address Line 1"
          inputMode="text"
          validationStatus={errors.addressLine1 ? 'error' : undefined}
          register={register('addressLine1', { required: 'Address Line 1 is required' })}
          errorMessage={errors.addressLine1?.message}
        />
        <TextInput
          id="addressLine2"
          label="Address Line 2"
          inputMode="text"
          validationStatus={errors.addressLine2 ? 'error' : undefined}
          register={register('addressLine2', { required: 'Address Line 2 is required' })}
          errorMessage={errors.addressLine2?.message}
        />
        <Button type="button" onClick={()=>goToPreviousStep()}>Previous</Button>
        <Button sentiment="accented" appearance="solid" type="submit">Continue</Button>
      </form>
    </FlexLayout>
  )
}

export default Step2Form