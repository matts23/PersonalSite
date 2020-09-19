import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 0 1rem 0;
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-content: center;
`;

const ListItem = styled.li`
  padding: 1rem;
`;

const GoTo = styled(Link)`
  text-decoration: none;
  color: black;
  :hover{
    background-color: rgb(255, 102, 102);
    cursor: pointer;
  }
`;

const Title = styled(Link)`
  margin-left: 2rem;
  font-size: 2.8rem;
  color: black;
  text-decoration: none;

  @media only screen and (max-width: 450px){
    font-size: 1.5rem;
    -webkit-text-stroke-width: 1px;
    margin-left: .5rem;
  }
`;

const Nav = styled.nav`
  margin-right: 2rem;
  border-bottom: 3px solid rgb(255, 102, 102);

  @media only screen and (max-width: 800px){
    display: none;
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderContainer>
      <Title to="/">
          {siteTitle}
      </Title>
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
          <ListItem>
            <GoTo to="/contact">Contact</GoTo>
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
