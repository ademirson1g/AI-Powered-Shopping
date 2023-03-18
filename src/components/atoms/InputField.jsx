import React from "react"

const InputField = ({ label, name, type, required, value, onChange }) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-white">
        {label}
      </label>
      <div className="mt-1">
        <input
          id={name}
          name={name}
          type={type}
          autoComplete="off"
          required={required}
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  )
}

export default InputField
