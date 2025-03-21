import React from 'react';
import { FormField, FormFieldLabel, Input, InputProps, Text } from '@salt-ds/core';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps1 extends InputProps {
  id: string;
  label: string;
  inputMode: 'search' | 'text' | 'none' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | undefined;
  validationStatus: 'error' | 'success' | undefined;
  register: UseFormRegisterReturn;
  errorMessage?: string;
}

const InputBox: React.FC<InputProps1> = ({ id, label, inputMode, validationStatus, register, errorMessage, ...props }) => (
  <FormField>
    <FormFieldLabel htmlFor={id}>{label}</FormFieldLabel>
    <Input
      bordered
      id={id}
      inputMode={inputMode}
      validationStatus={validationStatus}
      inputProps={register}
      {...props}
    />
    {errorMessage && <Text color={validationStatus}>{errorMessage}</Text>}
  </FormField>
);

export default InputBox;
