import React from "react";
import { faLaptop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Section } from '../index';
import PropTypes from "prop-types"

const Services = ({ title, subTitle, description }) => {
  return (
    <Section title={title} subTitle={subTitle} description={description}>
      <div className="w-full flex flex-wrap md:flex-nowrap justify-center gap-10 mt-16">
        <div className="w-full md:w-3/4 flex flex-col gap-4 p-6 rounded-lg shadow hover:bg-purple-50">
          <FontAwesomeIcon icon={faLaptop} className="w-6 h-6 p-6 bg-purple-200 text-purple-500 rounded-full" />
          <h4 className="text-purple-700 font-semibold">Web Design - Mobile First</h4>
          <p className="text-sm text-gray-600 leading-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus non iste laborum iure error quisquam delectus, suscipit provident quod perspiciatis.</p>
        </div>
        <div className="w-full md:w-3/4 flex flex-col gap-4 p-6 rounded-lg shadow hover:bg-purple-50">
          <FontAwesomeIcon icon={faLaptop} className="w-6 h-6 p-6 bg-purple-200 text-purple-500 rounded-full" />
          <h4 className="text-purple-700 font-semibold">Web Design - Mobile First</h4>
          <p className="text-sm text-gray-600 leading-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus non iste laborum iure error quisquam delectus, suscipit provident quod perspiciatis.</p>
        </div>
        <div className="w-full md:w-3/4 flex flex-col gap-4 p-6 rounded-lg shadow hover:bg-purple-50">
          <FontAwesomeIcon icon={faLaptop} className="w-6 h-6 p-6 bg-purple-200 text-purple-500 rounded-full" />
          <h4 className="text-purple-700 font-semibold">Web Design - Mobile First</h4>
          <p className="text-sm text-gray-600 leading-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus non iste laborum iure error quisquam delectus, suscipit provident quod perspiciatis.</p>
        </div>
      </div>
    </Section>
  )
}

Services.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  description: PropTypes.string,
}

export default Services;