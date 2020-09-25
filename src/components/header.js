import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderContainer = styled.header`
  width: 100%;
  padding: 1rem 0 1rem 0;
  background-color: rgb(0,0,0);
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
`;

const ListItem = styled.li`
  
`;

const GoTo = styled(Link)`
  text-decoration: none;
  color: white;
  :hover{
    background-color: rgb(255, 102, 102);
    cursor: pointer;
  }
`;

const Nav = styled.nav`
  max-width: 1000px;
  margin:auto;
  @media only screen and (max-width: 800px){
    display: none;
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderContainer>
      <Nav>
        <List>
          <ListItem>
            <GoTo to="/">Home</GoTo>
          </ListItem>
          <ListItem>
            <GoTo to="/about">About</GoTo>
          </ListItem>
          <ListItem>
            <GoTo to="/projects">Projects</GoTo>
          </ListItem>
          <ListItem>
            <GoTo to="/blog">Articles</GoTo>
          </ListItem>
        </List>
      </Nav>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
