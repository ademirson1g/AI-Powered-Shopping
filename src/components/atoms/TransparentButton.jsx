import React from "react"

const TransparentButton = ({ children }) => {
  return (
    <button className="bg-white hover:bg-gray-100 text-[#293072] font-semibold py-2 px-4 border rounded-2xl !important">
      {children}
    </button>
  )
}

export default TransparentButton
