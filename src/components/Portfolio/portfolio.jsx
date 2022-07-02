import React from "react";
import { Section } from '../index';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"

const Portfolio = ({ title, subTitle, description, projects }) => {

  return (
    <Section tagName="portfolio" title={title} subTitle={subTitle} description={description}>
      <div className="flex flex-wrap gap-16 md:gap-12 justify-center items-center w-full mt-16">
        {projects.map(project => {
          const image = getImage(project.image)

          return (
            <div key={project.id} className="flex flex-col justify-start">
              <div className="relative w-auto">
                <GatsbyImage image={image} alt={project.name} className="w-60 h-72 md:w-72 lg:w-80 rounded-lg" />
                <div className="absolute bottom-0 w-60 md:w-72 lg:w-80 h-auto p-4 bg-purple-300 rounded-b-lg">
                  <h2 className="text-base text-gray-700 font-semibold tracking-wide">{project.name}</h2>
                  <div className="flex gap-2 mt-2">
                    {project.techns.map(techn => (
                      <p key={techn.id} className="px-3 py-1 bg-white text-sm font-medium text-purple-700 border border-purple-400">{techn.name}</p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-around">
                <a href={project.url} className="px-4 py-2 bg-purple-100 border-b-2 border-purple-700 transition ease-in delay-75 hover:scale-105 text-sm text-gray-700 font-medium hover:bg-purple-600 hover:text-white">View source</a>
                <a href={project.url} className="px-4 py-2 bg-purple-100 border-b-2 border-purple-700 transition ease-in delay-75 hover:scale-105 text-sm text-gray-700 font-medium hover:bg-purple-600 hover:text-white">Try it Live</a>
              </div>
            </div>
          )
        })}
      </div>

    </Section>
  )
}

Portfolio.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  description: PropTypes.string,
}

export default Portfolio