import {
  Button,
  FlexLayout,
  FlowLayout,
  H2,
  StackLayout,
} from "@salt-ds/core";
import React from "react";
import { useForm } from "react-hook-form";
import { TextInput } from "./InputComponents";

const Step1Form: React.FC<{ goToNextStep: () => void }> = ({
  goToNextStep,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    contact: string;
  }>();

  const onSubmit = (data: {
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    contact: string;
  }) => {
    console.log("Form Data:", data);
    goToNextStep();
  };

  const getValidationStatus = (fieldError: { message?: string } | undefined) => {
    return fieldError ? "error" : "success";
  };

  return (
    <StackLayout padding={"10px 50px"} gap={1} direction={'column'} >
      <H2>Registration Form</H2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FlexLayout direction={'column'} gap={2}>
          <TextInput
            id="firstName"
            label="First Name"
            inputMode="text"
            validationStatus={getValidationStatus(errors.firstName)}
            register={register("firstName", { required: "First name is required" })}
            errorMessage={errors.firstName?.message}
          />
          <TextInput
            id="lastName"
            label="Last Name"
            inputMode="text"
            validationStatus={getValidationStatus(errors.lastName)}
            register={register("lastName", { required: "Last name is required" })}
            errorMessage={errors.lastName?.message}
          />
          <TextInput
            id="email"
            label="Email"
            inputMode="email"
            validationStatus={getValidationStatus(errors.email)}
            register={register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Please enter a valid email address",
              },
            })}
            errorMessage={errors.email?.message}
          />
          <TextInput
            id="age"
            label="Age"
            inputMode="numeric"
            validationStatus={getValidationStatus(errors.age)}
            register={register("age", {
              required: "Age is required",
              min: {
                value: 18,
                message: "You must be at least 18 years old",
              },
            })}
            errorMessage={errors.age?.message}
          />
          <TextInput
            id="contact"
            label="Contact Number"
            inputMode="text"
            validationStatus={getValidationStatus(errors.contact)}
            register={register("contact", {
              required: "Contact number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Please enter a valid 10-digit contact number",
              },
            })}
            errorMessage={errors.contact?.message}
          />
        </FlexLayout>
        <FlowLayout justify="center" margin={"20px 0"}>
          <Button sentiment="accented" appearance="solid" type="submit">
            Continue
          </Button>
        </FlowLayout>
      </form>
    </StackLayout>
  );
};

export default Step1Form;
