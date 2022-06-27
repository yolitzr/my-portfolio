import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Typewriter from 'typewriter-effect';

const Header = () => (
  <header className="bg-gradient-to-t from-purple-200">
    <div className="max-w-5xl mx-auto h-auto pt-8 pb-16 flex flex-col-reverse mt-16 lg:grid lg:grid-cols-2 lg:justify-items-center lg:items-center">
      <div className="w-auto flex flex-col items-center lg:gap-4">
        <div className="hidden lg:block">
          <h2 className="text-5xl font-bold text-purple-700 leading-relaxed">Yolitzareth Zacarias</h2>
          <span className="text-2xl font-semibold text-gray-700 leading-relaxed"> 
            <Typewriter
              options={{
                strings: ['Front End Developer'],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
        <a href="" download="CV Yolitzareth Zacarias" className="mx-auto lg:ml-0 lg:my-auto px-4 py-2 bg-purple-800 text-white font-semibold rounded-lg shadow-sm transition duration-300 hover:bg-purple-500">Descargar CV</a>
      </div>
      <div className="w-ful p-2 mx-auto">
        <StaticImage src="../../images/img-header.svg" alt="Girl Developer" />
      </div>
    </div>
    
  </header>
)

export default Header
