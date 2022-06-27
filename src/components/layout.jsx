import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { NavBar, Seo } from './index.js'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <Seo title={data.site.siteMetadata?.title || `Home`} />
    <NavBar/>
    <main>{children}</main>
    <footer>
      © {new Date().getFullYear()} &middot; Built with  {` `} <a href="https://www.gatsbyjs.com">Gatsby</a>
    </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
