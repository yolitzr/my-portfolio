import * as React from "react"
import PropTypes from "prop-types"
import { NavBar, Seo, Footer } from './index.js'
import { useData, useSocialIcons } from '../hooks'

const Layout = ({ children }) => {
  const { site: { siteMetadata: { title }} } = useData()
  const { allIconSocialJson } = useSocialIcons()
  const socialIcons = allIconSocialJson?.nodes

  return (
    <>
    <Seo title={title || `Home`} />
    <NavBar/>
    <main>{children}</main>
    <Footer socialIcons={socialIcons}/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
