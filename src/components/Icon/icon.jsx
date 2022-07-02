import React from "react";

const SvgIcon = ({ path, width, height, widthMD, heightMD }) => {
  return (
    <svg
      fill="currentColor"
      stroke="currentColor"
      className={`'${width} ${height} md:${widthMD} md:${heightMD} text-gray-700 hover:text-purple-500 '`}
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