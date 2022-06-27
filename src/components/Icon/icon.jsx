import React from "react";

const SvgIcon = ({ path }) => {
  return (
    <svg
      fill="currentColor"
      stroke="currentColor"
      className="w-8 h-8 md:w-10 md:h-10 text-gray-700 hover:text-purple-500"
      strokeWidth="0"
      viewBox="0 0 24 24"
    >
      <path 
        d={path}
      ></path>
    </svg>
  )
}

export default SvgIcon