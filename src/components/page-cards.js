import React from "react"
import styled from "styled-components"
import {Eye, GitHub} from "react-feather"

const Wrapper = styled.section`
    width: 100%;
    margin-bottom: 6rem;
    
    @media only screen and (max-width: 800px){
        padding: 1rem;
    }
`;

const Grid =  styled.div`
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: auto auto;
    justify-items: center;
    grid-row-gap: 0;
    grid-column-gap: 0;
    @media only screen and (max-width: 450px){
        grid-template-rows: auto;
        grid-template-columns: auto;
    }
`;

const Card = styled.div`
    box-sizing: border-border-box;
    width: 99%;
    height: 99%;
    margin-bottom: 6rem;
    border: 1px solid black;
`;

const Title = styled.h2`
    color: black;
    font-size: 5rem;
    text-align: center;
    margin-bottom: 4rem;
    padding: 1rem;
    
    @media only screen and (max-width: 450px){
        font-size: 3.5rem;
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
        <Grid>
        <Card>
            <ProjectTitle>Project 1</ProjectTitle>
            <Paragraph>
            Consequatur voluptatum esse corrupti iusto ut similique accusantium, recusandae minima tempore maiores temporibus magni repellat error odio distinctio placeat dolor cupiditate pariatur.
            </Paragraph>
            <div style={{
                display:`flex`,
                flexDirection:`row`,
                justifyContent:`space-around`,
                marginBottom:`0rem`
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
        <Card>
            <ProjectTitle>Project 4</ProjectTitle>
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
        </Grid>
    </Wrapper>
)

export default PageCard