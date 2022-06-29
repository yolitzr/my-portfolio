import React from "react";
import PropTypes from "prop-types"

const Section = ({ title, subTitle, description, children }) => {
  return (
    <section className="container mx-auto py-12 p-8">
      <div className="flex flex-col gap-3 items-center">
        <h3 className="text-base text-purple-800 font-semibold uppercase">{title}</h3>
        <h4 className="text-lg text-gray-800 font-semibold uppercase">{subTitle}</h4>
        <p className="w-full md:w-1/2 text-gray-600 leading-7 text-center">{description}</p>
      </div>
      {children}
    </section>
  )
}

Section.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
}

export default Section