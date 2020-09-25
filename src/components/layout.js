import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Nav from "./mobile-nav"
import styled from "styled-components"

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const Main = styled.div`
  width: 100%auto;
  min-height: 100vh;
`;

const Footer = styled.div`
  width: 100%100vh;
  height: 15rem;
  background-color: rgb(0,0,0);
`;

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
    <Container>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main>{children}</Main>
      <Footer>
        <Nav />
      </Footer>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
