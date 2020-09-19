import React from "react"
import styled from "styled-components"
import {Eye, GitHub} from "react-feather"

const Wrapper = styled.section`
    width: 100%;
    margin-top: 3rem;
    margin-bottom: 6rem;
    background-color: rgba(214, 214, 214, .5);
    padding: 4rem;
    @media only screen and (max-width: 800px){
        padding: 1rem;
    }
`;

const Card = styled.div`
    max-width: 700px;
    margin: auto;
    margin-bottom: 6rem;
    border: 1px solid black;
    border-radius: 15px;
    box-shadow: 2px 2px 0px 0px rgba(0,0,0,0.75);
`;

const Title = styled.h2`
    color: rgb(214, 214, 214);
    font-size: 5rem;
    text-align: center;
    margin-bottom: 4rem;
    padding: 1rem;
    -webkit-text-stroke: 2px black;
    text-shadow: 4px 0px 0px black;
    @media only screen and (max-width: 450px){
        font-size: 3.5rem;
    }
`;

const ProjectTitle = styled.h3`
    font-size: 2rem;
    padding: 1rem;
    border-bottom: 1px solid black;
`;

const Paragraph = styled.p`
    font-size: 1.2rem;
    line-height: 2.5rem;
    padding: 1rem;
`;

const LinkWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ProjectLink =styled.a`
    padding-top: .5rem;
    text-decoration: underline;
    :hover{
        cursor: pointer;
    }
`;

const PageCard = () =>(
    <Wrapper>
        <Title>Recent Work</Title>
        <Card>
            <ProjectTitle>Project 1</ProjectTitle>
            <Paragraph>
            Consequatur voluptatum esse corrupti iusto ut similique accusantium, recusandae minima tempore maiores temporibus magni repellat error odio distinctio placeat dolor cupiditate pariatur.
            </Paragraph>
            <div style={{
                display:`flex`,
                flexDirection:`row`,
                justifyContent:`space-around`,
                marginBottom:`2rem`
            }}>
                <LinkWrap>
                    <Eye/>
                    <ProjectLink>View Live</ProjectLink>
                </LinkWrap>
                <LinkWrap>
                    <GitHub/>
                    <ProjectLink>View Code</ProjectLink>
                </LinkWrap>
            </div>
        </Card>
        <Card>
            <ProjectTitle>Project 2</ProjectTitle>
            <Paragraph>
            Consequatur voluptatum esse corrupti iusto ut similique accusantium, recusandae minima tempore maiores temporibus magni repellat error odio distinctio placeat dolor cupiditate pariatur.
            </Paragraph>
            <div style={{
                display:`flex`,
                flexDirection:`row`,
                justifyContent:`space-around`,
                marginBottom:`2rem`
            }}>
                <LinkWrap>
                    <Eye/>
                    <ProjectLink>View Live</ProjectLink>
                </LinkWrap>
                <LinkWrap>
                    <GitHub/>
                    <ProjectLink>View Code</ProjectLink>
                </LinkWrap>
            </div>
        </Card>
        <Card>
            <ProjectTitle>Project 3</ProjectTitle>
            <Paragraph>
            Consequatur voluptatum esse corrupti iusto ut similique accusantium, recusandae minima tempore maiores temporibus magni repellat error odio distinctio placeat dolor cupiditate pariatur.
            </Paragraph>
            <div style={{
                display:`flex`,
                flexDirection:`row`,
                justifyContent:`space-around`,
                marginBottom:`2rem`
            }}>
                <LinkWrap>
                    <Eye/>
                    <ProjectLink>View Live</ProjectLink>
                </LinkWrap>
                <LinkWrap>
                    <GitHub/>
                    <ProjectLink>View Code</ProjectLink>
                </LinkWrap>
            </div>
        </Card>
    </Wrapper>
)

export default PageCard