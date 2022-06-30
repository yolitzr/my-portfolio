import React from "react";
import { SvgIcon } from '../index'
import PropTypes from "prop-types"

const Footer = ({ socialIcons }) => {
  console.log(socialIcons)
  return(
    <footer className="w-full py-10">
      <div className="flex justify-center items-center gap-4">
        {/* {socialIcons.map(social => (
          <a href="#" key={social.id} className="w-8 h-8">
            <SvgIcon path={social.path} />
          </a>
        ))} */}
      </div>
      <p className="text-gray-700 font-bold text-center">Yolitzareth Zacarias © {new Date().getFullYear()} &middot; Built with  {` `} <a href="https://www.gatsbyjs.com">Gatsby</a></p>
    </footer>
  )
}

Footer.propTypes = {
  socialIcons: PropTypes.array,
}

export default Footer