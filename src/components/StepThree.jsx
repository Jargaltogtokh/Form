export const StepThree = ({ setCurrentStep, onChange, form }) => {
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
          <form action="">
            <label className="block text-sm/6 font-bold text-gray-900">
              Date of Birth *
            </label>
            <input
              id="dateOfBirth"
              name="First Name"
              type="date"
              value={form.dateOfBirth}
              onChange={onChange}
              placeholder="--/--/-- "
              className="w-full outline-2 mr-1 border border-gray-500 rounded-md p-2 mb-[12px]"
            />

            <label className="block text-sm/6 font-bold text-gray-900">
              Profile Image *
            </label>
            <input
              id="profileImage"
              type="file"
              value={form.profileImage}
              onChange={onChange}
              className="block w-full h-[200px] text-sm text-slate-500 border border-gray-500 rounded-md p-2
             hover:file:bg-blue-600
            "
            />
          </form>
          <div className="flex">
            <button
              onClick={() => setCurrentStep(2)}
              className="w-1/3 outline-2 mr-1 border border-[#D6D8D8] bg-[#D6D8D8] rounded-md p-2 mt-[120px]  hover:bg-black hover:text-white"
            >
              {" "}
              Back
            </button>
            <button
              onClick={() => setCurrentStep(4)}
              className="w-2/3 outline-2 mr-1 border border-[#D6D8D8] bg-[#D6D8D8] rounded-md p-2 mt-[120px] hover:bg-black hover:text-white"
            >
              Continue 3/3 {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
