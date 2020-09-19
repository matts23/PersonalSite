import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid black;
  font-size: 2rem;
  padding: 2rem 2rem 1rem 2rem;
  max-width: 500px;
  margin: 0 auto 3rem auto;
  justify-content: space-around;
  align-items: center;
  @media only screen and (max-width: 450px){
    flex-direction: column;
    margin: 0 1rem 3rem 1rem;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1rem;
  @media only screen and (max-width: 450px){
    padding: .7rem;
  }
`;

const Author = styled.h3`
  font-size: 1rem;
  text-align: center;
  font-style: italic;
  font-weight: lighter;
  @media only screen and (max-width: 450px){
    padding: .7rem;
  }
`;

const GoTo = styled(Link)`
  text-decoration: underline;
  justify-self: end;
  color: black;
  padding: .2rem;
`;

const PostTile = ({ title, author, date, path}) => (
    <Container>
      <div>
        <Title>
          {title}
        </Title>
        <Author>Written By {author} on {date}</Author>
      </div>
      <GoTo to={path}>read→</GoTo>
    </Container>
      
)

export default PostTile
