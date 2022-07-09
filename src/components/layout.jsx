import React, { useState } from "react"
import PropTypes from "prop-types"
import { NavBar, Seo, Footer } from './index.js'
import { useData, useSocialIcons } from '../hooks'

const Layout = ({ children }) => {
  const [ isDark, setIsDark ] = useState('dark')
  const { site: { siteMetadata: { title }} } = useData()
  const { allIconSocialJson } = useSocialIcons()
  const socialIcons = allIconSocialJson?.nodes

  const swichMode = () => {

    console.log('Hola')
  }


  return (
    <>
      <Seo title={title || `Home`} />
      <NavBar />
      <main className="dark:bg-slate-800">{children}</main>
      <Footer socialIcons={socialIcons}/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
