import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Nav from "./mobile-nav"
import LayoutStyles from "./styles/layout.module.css"

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
    <div className={LayoutStyles.mainWrapper}>
      <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer>
          
          <Nav />
        </footer>
      </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
