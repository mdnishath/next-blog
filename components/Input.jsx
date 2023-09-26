"use client";
import { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";

const Input = ({
  labelText,
  type,
  name,
  id,
  placeholder,
  obj,
  className,
  Icon,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {labelText}
      </label>
      <div className="relative flex items-center">
        <input
          type={showPassword ? "text" : type}
          name={name}
          id={id}
          className={`bg-gray-50  border outline-none  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className} pl-8 overflow-hidden`}
          placeholder={placeholder}
          {...obj}
        />
        {type === "password" && (
          <button
            type="button"
            className="absolute text-gray-600 transform -translate-y-1/2 top-1/2 right-3 dark:text-gray-400"
            onClick={togglePasswordVisibility}
          >
            <div className="text-2xl">
              {showPassword ? <BiHide /> : <BiShow />}
            </div>
          </button>
        )}
        <div className="absolute left-2 text-primary">{Icon}</div>
      </div>
    </div>
  );
};

export default Input;
