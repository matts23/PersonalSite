import React from "react"
import styled from "styled-components"
import Card from "./card"
import BCC from "../images/bcc.png"
import weather from "../images/weather-app.png"

const Wrapper = styled.section`
    width: 100%;
    margin-bottom: 6rem;
    padding-left: 2rem;
    padding-right: 2rem;
    
    @media only screen and (max-width: 800px){
        padding: 1rem;
    }
`;

const Grid =  styled.div`
    max-width:1500px;
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: auto auto;
    justify-items: center;
    grid-row-gap: 1rem;
    grid-column-gap: 1rem;
    @media only screen and (max-width: 800px){
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
            <Card title="Broken Chain Charters"
            imgsource={BCC}
            livesrc="https://goofy-hawking-e87bd0.netlify.app/"
            codesrc="https://github.com/mattszydev/BrokenChainCharter"
            content="A fully responsive landing page built using GatsbyJS"/>

            <Card title="Weather App"
            imgsource={weather}
            livesrc="https://mattszydev-weather-app.netlify.app/"
            codesrc="https://github.com/mattszydev/ReactWeatherApp"
            content="Weather app featuring search bar with auto suggestion drop down."/>

            <Card title="Project 3"
            content="Consequatur voluptatum esse corrupti iusto ut similique accusantium, recusandae minima tempore maiores temporibus magni repellat error odio distinctio placeat dolor cupiditate pariatur."/>

            <Card title="Project 4"
            content="Consequatur voluptatum esse corrupti iusto ut similique accusantium, recusandae minima tempore maiores temporibus magni repellat error odio distinctio placeat dolor cupiditate pariatur."/>
        </Grid>
    </Wrapper>
)

export default PageCard