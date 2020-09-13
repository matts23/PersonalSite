import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import HeaderStyles from "./styles/header.module.css"

const Header = ({ siteTitle }) => (
  <header className={HeaderStyles.headContainer}>
      <h1>
        <Link
          to="/"
          className={HeaderStyles.titleLink}
        >
          {`{ ${siteTitle} }`}
        </Link>
      </h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/blog">Articles</Link></li>
          <li><Link to="/">Contact</Link></li>
        </ul>
      </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
