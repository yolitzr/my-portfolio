import React from "react";
import { faMoon, faLaptop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Services = ({ title, subTitle, description }) => {
  return (
    <section className="container mx-auto py-12 p-8">
      <div className="flex flex-col gap-3 items-center">
        <h3 className="text-base text-purple-800 font-semibold uppercase">{title}</h3>
        <h4 className="text-lg text-gray-800 font-semibold uppercase">{subTitle}</h4>
        <p className="w-full md:w-1/2 text-gray-600 leading-7 text-center">{description}</p>
      </div>
      <div className="w-full flex flex-wrap md:flex-nowrap justify-center gap-10 mt-16">
        <div className="flex flex-col gap-4 p-6 rounded-lg shadow">
          <FontAwesomeIcon icon={faLaptop} className="w-4 h-4 p-6 bg-purple-200 text-purple-500 cursor-pointer rounded-full" />
          <h4 className="text-purple-700 font-semibold">Web Design - Mobile First</h4>
          <p className="text-sm text-gray-600 leading-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus non iste laborum iure error quisquam delectus, suscipit provident quod perspiciatis.</p>
        </div>
        <div className="flex flex-col gap-4 p-6 rounded-lg shadow">
          <FontAwesomeIcon icon={faLaptop} className="w-4 h-4 p-6 bg-purple-200 text-purple-500 cursor-pointer rounded-full" />
          <h4 className="text-purple-700 font-semibold">Web Design - Mobile First</h4>
          <p className="text-sm text-gray-600 leading-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus non iste laborum iure error quisquam delectus, suscipit provident quod perspiciatis.</p>
        </div>
        <div className="flex flex-col gap-4 p-6 rounded-lg shadow">
          <FontAwesomeIcon icon={faLaptop} className="w-4 h-4 p-6 bg-purple-200 text-purple-500 cursor-pointer rounded-full" />
          <h4 className="text-purple-700 font-semibold">Web Design - Mobile First</h4>
          <p className="text-sm text-gray-600 leading-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus non iste laborum iure error quisquam delectus, suscipit provident quod perspiciatis.</p>
        </div>
      </div>
    </section>
  )
}

export default Services;