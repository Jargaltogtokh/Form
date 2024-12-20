import { validateStepOne } from "@/utils/validate";
import { Input } from "./Input";
import { useState } from "react";

export const StepOne = ({
  setCurrentStep,
  onChange,
  form,
  errors,
  setErrors,
}) => {
  return (
    <div className="w-full h-screen flex justify-center bg-[#F4F4F4]">
      <div className="w-[480px] h-[655px] border-2 bg-white mt-[182px]">
        <div className="m-[32px]">
          <img src="main1.png" width={60} height={60} alt="" />
          <p className="text-2xl font-bold"> Join Us! 😎 </p>
          <p className="text-gray-500 mb-[10px]">
            {" "}
            Please provide us all current information accurately.{" "}
          </p>
          <form>
            <Input
              id="firstName"
              type="text"
              label="First Name *"
              placeholder="Placeholder"
              value={form.firstName}
              onChange={onChange}
              error={errors.firstName}
            />
            <Input
              id="lastName"
              type="text"
              label="Last Name *"
              placeholder="Placeholder"
              value={form.lastName}
              onChange={onChange}
              error={errors.lastName}
            />
            <Input
              id="userName"
              type="text"
              label="Username *"
              placeholder="Placeholder"
              value={form.userName}
              onChange={onChange}
              error={errors.userName}
            />
          </form>

          <button
            className="w-full outline-2 mr-1 border border-[#D6D8D8] bg-[#D6D8D8] rounded-md p-2 mb-[40px] hover:bg-black hover:text-white"
            onClick={() => {
              const { isValid, newErrors } = validateStepOne(form);
              setErrors(newErrors);
              if (isValid) {
                setCurrentStep(2);
              }
            }}
          >
            Continue 1/3 {">"}
          </button>
        </div>
      </div>
    </div>
  );
};
