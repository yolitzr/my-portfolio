import React from "react";
import { SvgIcon } from '../index'
import PropTypes from "prop-types"

const Footer = ({ socialIcons }) => {
  return(
    <footer className="w-full py-10 px-8">
      <div className="flex justify-center items-center gap-4 mb-4">
        {socialIcons.map(social => (
          <a href={social.urlSocial} key={social.id}>
            <SvgIcon path={social.path} width="w-6" height="w-6" widthMD="w-8" heightMD="h-8" />
          </a>
        ))}
      </div>
      <p className="text-gray-700 font-bold text-center">Yolitzareth Zacarias © {new Date().getFullYear()} &middot; Built with  {` `} <a href="https://www.gatsbyjs.com">Gatsby</a></p>
    </footer>
  )
}

Footer.propTypes = {
  socialIcons: PropTypes.array,
}

export default Footer