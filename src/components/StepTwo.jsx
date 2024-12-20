import { validateStepTwo } from "@/utils/validateStepTwo";
import { Input } from "./Input";

export const StepTwo = ({
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
              id="email"
              type="email"
              label="Email *"
              placeholder="Placeholder"
              value={form.email}
              onChange={onChange}
              error={errors.email}
            />
            <Input
              id="phoneNumber"
              type="number"
              label="Phone number *"
              placeholder="Placeholder"
              value={form.phoneNumber}
              onChange={onChange}
              error={errors.phoneNumber}
            />
            <Input
              id="password"
              type="password"
              label="Password *"
              placeholder="Placeholder"
              value={form.password}
              onChange={onChange}
              error={errors.password}
            />
            <Input
              id="confirmPassword"
              type="password"
              label=" Confirm Password *"
              placeholder="Placeholder"
              value={form.confirmPassword}
              onChange={onChange}
              error={errors.confirmPassword}
            />
          </form>

          <div className="flex">
            <button
              className="w-1/3 outline-2 mr-1 border border-[#D6D8D8] bg-[#D6D8D8] rounded-md p-2 mt-[10px] hover:bg-black hover:text-white"
              onClick={() => setCurrentStep(1)}
            >
              {" "}
              Back
            </button>
            <button
              className="w-2/3 outline-2 mr-1 border border-[#D6D8D8] bg-[#D6D8D8] rounded-md p-2 mt-[10px] hover:bg-black hover:text-white"
              onClick={() => {
                const { isValid, newErrors } = validateStepTwo(form);
                setErrors(newErrors);
                if (isValid) {
                  setCurrentStep(3);
                }
              }}
            >
              Continue 2/3 {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
