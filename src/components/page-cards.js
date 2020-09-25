import React from "react"
import styled from "styled-components"
import Card from "./card"

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


const PageCard = () =>(
    <Wrapper>
        <Title>Recent Work</Title>
        <Grid>
            <Card title="Project 1"
            content="Consequatur voluptatum esse corrupti iusto ut similique accusantium, recusandae minima tempore maiores temporibus magni repellat error odio distinctio placeat dolor cupiditate pariatur."/>

            <Card title="Project 2"
            content="Consequatur voluptatum esse corrupti iusto ut similique accusantium, recusandae minima tempore maiores temporibus magni repellat error odio distinctio placeat dolor cupiditate pariatur."/>

            <Card title="Project 3"
            content="Consequatur voluptatum esse corrupti iusto ut similique accusantium, recusandae minima tempore maiores temporibus magni repellat error odio distinctio placeat dolor cupiditate pariatur."/>

            <Card title="Project 4"
            content="Consequatur voluptatum esse corrupti iusto ut similique accusantium, recusandae minima tempore maiores temporibus magni repellat error odio distinctio placeat dolor cupiditate pariatur."/>
        </Grid>
    </Wrapper>
)

export default PageCard