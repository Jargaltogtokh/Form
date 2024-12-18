export const StepOne = ({ setCurrentStep, onChange, form }) => {
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
            <label className="block text-sm/6 font-bold text-gray-900">
              First Name *
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="Placeholder"
              value={form.firstName}
              onChange={onChange}
              className="w-full outline-2 mr-1 border border-gray-500 rounded-md p-2 mb-[12px] hover:border-blue-600 required"
            />{" "}
            <label className="block text-sm/6 font-bold text-gray-900">
              Last Name *
            </label>
            <input
              id="lastName"
              required
              type="text"
              placeholder="Placeholder "
              value={form.lastName}
              onChange={onChange}
              className="w-full outline-2 mr-1 border border-gray-500 rounded-md p-2 mb-[12px] hover:border-blue-600"
            />{" "}
            <label className="block text-sm/6 font-bold text-gray-900">
              Username *
            </label>
            <input
              id="userName"
              required
              type="text"
              placeholder="Placeholder "
              value={form.userName}
              onChange={onChange}
              className="w-full outline-2 mr-1 border border-gray-500 rounded-md p-2 mb-[12px]  hover:border-blue-600"
            />
          </form>
          <button
            onClick={() => setCurrentStep(2)}
            className="w-full outline-2 mr-1 border border-[#D6D8D8] bg-[#D6D8D8] rounded-md p-2 mt-[190px] hover:bg-black hover:text-white"
          >
            Continue 1/3 {">"}
          </button>
        </div>
      </div>
    </div>
  );
};
