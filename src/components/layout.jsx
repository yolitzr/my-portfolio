import React from "react"
import PropTypes from "prop-types"
import { NavBar, Seo, Footer } from "./index.js"
import { useData, useSocialIcons, useHome } from "../hooks"

const Layout = ({ children }) => {
  const { isDark, onChangeMode } = useHome()
  const {
    site: {
      siteMetadata: { title },
    },
  } = useData()
  const { allIconSocialJson } = useSocialIcons()
  const socialIcons = allIconSocialJson?.nodes

  return (
    <>
      <Seo title={title || `Home`} />
      <NavBar isDark={isDark} onChangeMode={onChangeMode} />
      <main className="dark:bg-slate-800">{children}</main>
      <Footer socialIcons={socialIcons} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
