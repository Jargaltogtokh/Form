export const Input = ({
  label,
  value,
  onChange,
  error,
  id,
  type,
  placeholder,
}) => {
  return (
    <div className="flex flex-col my-2">
      <label htmlFor={id} className="block text-sm/6 font-bold text-gray-900">
        {label}
      </label>
      <input
        id={id}
        required
        type={type}
        className="w-full outline-2 mr-1 border border-gray-500 rounded-md p-2 mb-[12px] hover:border-blue-600 required"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <span className="text-red-600"> {error} </span>}
    </div>
  );
};
