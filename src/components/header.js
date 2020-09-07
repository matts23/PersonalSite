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
          {siteTitle}
        </Link>
      </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
