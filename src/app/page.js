"use client";

import Image from "next/image";
import { useState } from "react";
import { StepOne } from "@/components/StepOne";
import { StepTwo } from "@/components/StepTwo";
import { StepThree } from "@/components/StepThree";
import { StepFour } from "@/components/StepFour";

const FormBody = ({
  currentStep,
  setCurrentStep,
  onChange,
  form,
  errors,
  setErrors,
}) => {
  if (currentStep === 1) {
    return (
      <StepOne
        setCurrentStep={setCurrentStep}
        onChange={onChange}
        form={form}
        errors={errors}
        setErrors={setErrors}
      />
    );
  }
  if (currentStep === 2) {
    return (
      <StepTwo
        setCurrentStep={setCurrentStep}
        onChange={onChange}
        form={form}
        errors={errors}
        setErrors={setErrors}
      />
    );
  }
  if (currentStep === 3) {
    return (
      <StepThree
        setCurrentStep={setCurrentStep}
        onChange={onChange}
        form={form}
        errors={errors}
        setErrors={setErrors}
      />
    );
  }
  return <StepFour setCurrentStep={setCurrentStep} />;
};

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    profileImage: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    profileImage: "",
  });

  const onChange = (e) => {
    const field = e.target.id;

    const newValues = { ...form, [field]: e.target.value };
    setForm(newValues);
  };

  console.log(form);
  return (
    <>
      <FormBody
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        onChange={onChange}
        form={form}
        errors={errors}
        setErrors={setErrors}
      />
    </>
  );
}
