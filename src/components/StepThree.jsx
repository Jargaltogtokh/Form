import { validateStepThree } from "@/utils/validateStepThree";
import { Input } from "./Input";
import { useState } from "react";

export const StepThree = ({
  setCurrentStep,
  onChange,
  form,
  setErrors,
  errors,
}) => {
  const [selectedImage, setSelectedImage] = useState();

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (!file) return;
    const fileEvent = { target: { value: file, id: event.target.id } };
    onChange(fileEvent);
    const objUrl = URL.createObjectURL(file);

    setSelectedImage(objUrl);
  };

  console.log(form);

  return (
    <div className="w-full h-screen flex justify-center bg-[#F4F4F4]">
      <div className="w-[480px] h-[655px] border-2 bg-white mt-[182px]">
        <div className="m-[32px]">
          <img src="Main1.png" width={100} height={100} alt="" />
          <p className="text-2xl font-bold"> Join Us! 😎 </p>
          <p className="text-gray-500 mb-[10px]">
            {" "}
            Please provide us all current information accurately.{" "}
          </p>
          <form action="">
            <Input
              id="dateOfBirth"
              type="date"
              label="Date of Birth * "
              placeholder="--/--/--"
              value={form.dateOfBirth}
              onChange={onChange}
            />
            <img src={selectedImage} width={100} height={100} alt="" />

            <Input
              id="profileImage"
              type="file"
              label="Profile Image *"
              onChange={handleFileChange}
              setErrors={setErrors}
              error={errors.profileImage}
            />
          </form>
          <div className="flex">
            <button
              className="w-1/3 outline-2 mr-1 border border-[#D6D8D8] bg-[#D6D8D8] rounded-md p-2 hover:bg-black hover:text-white"
              onClick={() => setCurrentStep(2)}
            >
              {" "}
              Back
            </button>
            <button
              className="w-2/3 outline-2 mr-1 border border-[#D6D8D8] bg-[#D6D8D8] rounded-md p-2 hover:bg-black hover:text-white"
              onClick={() => {
                const { isValid, newErrors } = validateStepThree(form);
                setErrors(newErrors);
                if (isValid) {
                  setCurrentStep(4);
                }
              }}
            >
              Continue 3/3 {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
