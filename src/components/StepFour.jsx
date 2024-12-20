export const StepFour = ({ setCurrentStep, onChange, form }) => {
  return (
    <div className="w-full h-screen flex justify-center bg-[#F4F4F4]">
      <div className="w-[480px] h-[655px] border-2 bg-white mt-[182px]">
        <div className="m-[32px]">
          <img src="Main1.png" width={60} height={60} alt="" />
          <p className="text-2xl font-bold"> You're All Set 🔥 </p>
          <p className="text-gray-500 mb-[10px]">
            {" "}
            We have received your submission. Thank you!{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
