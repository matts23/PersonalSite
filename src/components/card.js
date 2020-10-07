import React from "react"
import styled from "styled-components"
import {Eye, GitHub} from "react-feather"


const CardContainer = styled.div`
    box-sizing: border-border-box;
    padding: 1rem;
    margin-bottom: 6rem;
    border: 1px solid black;

    img{
        height: 100%;
        width: 100%;
        position: relative;
        
    }
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
    padding-top: 1rem;
`;

const ImageWrap = styled.div`
    width: 100%;
`;

const ProjectLink =styled.a`
    color: rgb(36, 123, 160);
    padding-top: .5rem;
    text-decoration: underline;
    :hover{
        cursor: pointer;
    }
`;

const Card = ({title, content, imgsource, codesrc, livesrc}) =>{
    return(
        <CardContainer>
            <ProjectTitle>{title}</ProjectTitle>
            <ImageWrap>
                <img src={imgsource}/>
                <LinkContainer>
                    <LinkWrap>
                        <Eye/>
                        <ProjectLink href={livesrc}>View Live</ProjectLink>
                    </LinkWrap>
                    <LinkWrap>
                        <GitHub/>
                        <ProjectLink href={codesrc}>View Code</ProjectLink>
                    </LinkWrap>
                </LinkContainer>
            </ImageWrap>
            <Paragraph>
            {content}
            </Paragraph>
        </CardContainer>
    )
}

export default Card;