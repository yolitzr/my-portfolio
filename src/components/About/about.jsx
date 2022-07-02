import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import { SvgIcon } from '../index'
import PropTypes from "prop-types"

const About = ({ title, subTitle, description, icons }) => {

  return (
    <section id="about" className="container mx-auto py-14 px-8 lg:py-28 flex items-center flex-col gap-8 lg:gap-20 lg:flex-row">
      <div className="relative">
        <StaticImage src="../../images/dots.png" alt="Background" className="absolute top-0 left-0 w-2/4 -z-10" />
        <div className="w-auto">
          <StaticImage src="../../images/me.jpg" alt="Yolitzareth Zacarias" className="w-60 h-60 lg:w-80 lg:h-80  border-4 border-purple-800 rounded-full" />
        </div>
      </div>
      <div className="flex flex-col my-auto">
        <div className="my-2">
          <h3 className="mb-4 text-lg text-purple-800 font-semibold uppercase">{title}</h3>
          <p className="text-sm text-gray-600 leading-6">{description}</p>
        </div>
        <div className="my-4">
          <h4 className="mb-8 text-lg text-purple-800 font-semibold uppercase">{subTitle}</h4>
          <div className="w-full flex flex-wrap gap-8 justify-center lg:justify-start items-center"> 
            {icons && 
              icons.map(icon => (
                <SvgIcon key={icon?.id} path={icon.path} width="w-8" height="w-8" widthMD="w-10" heightMD="h10"/>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

About.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  description: PropTypes.string,
  icons: PropTypes.array,
}

export default About;