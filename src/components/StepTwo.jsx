export const StepTwo = ({ setCurrentStep, onChange, form }) => {
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
              Email *
            </label>
            <input
              id="email"
              required
              type="email"
              placeholder="Placeholder "
              value={form.email}
              onChange={onChange}
              className="w-full outline-2 mr-1 peer border border-gray-500 rounded-md p-2 mb-[12px]  hover:border-blue-600"
            />
            <p className="mt-2 invisible peer:invalid-visible text-red-500">
              Please provide a valid email address
            </p>

            <label className="block text-sm/6 font-bold text-gray-900 ">
              Phone number *
            </label>
            <input
              id="phoneNumber"
              required
              type="number"
              value={form.phoneNumber}
              onChange={onChange}
              placeholder="Placeholder "
              className="w-full outline-2 mr-1 border border-gray-500 rounded-md p-2 mb-[12px]  hover:border-blue-600"
            />
            <label className="block text-sm/6 font-bold text-gray-900">
              Password *
            </label>
            <input
              id="password"
              required
              type="password"
              placeholder="Placeholder "
              value={form.password}
              onChange={onChange}
              className="w-full outline-2 mr-1 border border-gray-500 rounded-md p-2 mb-[12px]  hover:border-blue-600"
            />
            <label className="block text-sm/6 font-bold text-gray-900 ">
              Confirm Password *
            </label>
            <input
              id="password"
              required
              type="password"
              placeholder="Placeholder "
              value={form.password}
              onChange={onChange}
              className="w-full outline-2 mr-1 border border-gray-500 rounded-md p-2 mb-[12px]  hover:border-blue-600"
            />
          </form>
          <div className="flex">
            <button
              onClick={() => setCurrentStep(1)}
              className="w-1/3 outline-2 mr-1 border border-[#D6D8D8] bg-[#D6D8D8] rounded-md p-2 mt-[80px] hover:bg-black hover:text-white"
            >
              {" "}
              Back
            </button>
            <button
              onClick={() => setCurrentStep(3)}
              className="w-2/3 outline-2 mr-1 border border-[#D6D8D8] bg-[#D6D8D8] rounded-md p-2 mt-[80px] hover:bg-black hover:text-white"
            >
              Continue 2/3 {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
