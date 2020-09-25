import React from "react"
import styled from "styled-components"
import {Eye, GitHub} from "react-feather"

const CardContainer = styled.div`
    box-sizing: border-border-box;
    width: 99%;
    height: 99%;
    margin-bottom: 6rem;
    border: 1px solid black;
`;

const ProjectTitle = styled.h3`
    font-size: 2rem;
    padding: 1rem;
   
`;

const Paragraph = styled.p`
    font-size: 1.2rem;
    line-height: 2.5rem;
    padding: 1rem;
`;

const LinkWrap = styled.div`
    color: rgb(36, 123, 160);
    font-size: 1.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin:0;
`;

const ProjectLink =styled.a`
    padding-top: .5rem;
    text-decoration: underline;
    :hover{
        cursor: pointer;
    }
`;

const Card = ({title, content}) =>{
    return(
        <CardContainer>
            <ProjectTitle>{title}</ProjectTitle>
            <Paragraph>
            {content}
            </Paragraph>
            <LinkContainer>
                <LinkWrap>
                    <Eye/>
                    <ProjectLink>View Live</ProjectLink>
                </LinkWrap>
                <LinkWrap>
                    <GitHub/>
                    <ProjectLink>View Code</ProjectLink>
                </LinkWrap>
            </LinkContainer>
        </CardContainer>
    )
}

export default Card;