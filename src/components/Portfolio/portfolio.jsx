import React from "react"
import { Section } from "../index"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"

const Portfolio = ({ title, subTitle, description, projects }) => {
  return (
    <Section
      tagName="portfolio"
      title={title}
      subTitle={subTitle}
      description={description}
    >
      <div className="flex flex-wrap gap-16 md:gap-12 justify-center items-center w-full mt-16 md:mt-8">
        {projects.map(project => {
          const image = getImage(project.image)

          return (
            <div
              key={project.id}
              className="flex flex-col justify-start w-full md:w-96 lg:w-1/3 md:mt-8"
            >
              <div className="relative h-80">
                <GatsbyImage
                  image={image}
                  alt={project.name}
                  className="w-full h-80 rounded-lg"
                />
                <div className="absolute bottom-0 w-full h-auto p-4 bg-purple-300 rounded-b-lg dark:bg-slate-700">
                  <h2 className="text-base text-gray-700 font-semibold tracking-wide dark:text-purple-400">
                    {project.name}
                  </h2>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.techns.map(techn => (
                      <p
                        key={techn.id}
                        className="px-3 py-1 bg-white text-xs font-medium text-purple-700 border border-purple-400 dark:bg-slate-700 dark:text-white"
                      >
                        {techn.name}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-around">
                {/* <a
                  href={project.url}
                  className="px-4 py-2 bg-purple-100 border-b-2 border-purple-700 transition ease-in delay-75 hover:scale-105 text-sm text-gray-700 font-medium hover:bg-purple-600 hover:text-white dark:bg-slate-700 dark:text-white dark:hover:text-purple-200"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  View source
                </a> */}
                <a
                  href={project.url}
                  className="px-4 py-2 bg-purple-100 border-b-2 border-purple-700 transition ease-in delay-75 hover:scale-105 text-sm text-gray-700 font-medium hover:bg-purple-600 hover:text-white dark:bg-slate-700 dark:text-white dark:hover:text-purple-200"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Try it Live
                </a>
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
