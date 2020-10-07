import React from "react"
import styled from "styled-components"


const Form = styled.form`
    max-width: 500px;
    padding: 1rem;
    margin: auto;
`;

const Wrapper = styled.div`
    background-color: rgb(0,0,0);
    width: 100%;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    color: white;
    padding: 1rem 0 1rem 0;
`;

const EmailInput = styled.input`
    color: white;
    
    border: transparent;
    background-color: rgb(20,20,20);
    font-size: 1.3rem;
    padding: .4rem;
`;

const NameInput = styled.input`
    color: white;
    
    border: transparent;
    background-color: rgb(20,20,20);
    font-size: 1.3rem;
    padding: .4rem;
`;

const MessageInput = styled.textarea`
    color: white;
    border: transparent;
    
    font-size: 1.3rem;
    background-color: rgb(20,20,20);
    padding: .4rem;
`;

const SubmitButton = styled.button`
    color: white;
    background-color: rgb(0,0,0);
    border: .5px solid white;
    margin: 3rem auto 0 auto;
    padding: .5rem;
    font-size: 1.1rem;
    text-align: left;
    :hover{
        background-color: white;
        color: black;
        cursor: pointer;
    }
`;

const Title = styled.h3`
    font-size: 2.5rem;
    color: white;
    text-align: center;
    padding-top: 3rem;
`;


const ContactForm = () => {
    return(
        <Wrapper>
            <Title>Get in Touch</Title>
            <Form>
                <Container>
                    <Label htmlFor="name">Name</Label>
                    <NameInput
                    type="text"
                    id="name"
                    name="client_name"
                    placeholder="your name"/>
                    

                    <Label htmlFor="email">Email</Label>
                    <EmailInput
                    type="email"
                    id="email"
                    name="client_mail"
                    placeholder="your email"/>
            
                    <Label htmlFor="message">Message</Label>
                    <MessageInput
                    type="text"
                    id="message"
                    rows="5"
                    cols="40"
                    placeholder="your message"/>
                    <SubmitButton>Submit
                    </SubmitButton>
                    <span style={{color:`white`,
                fontSize: `1rem`,
                padding: `1rem`,
                color: `yellow`}}>*note that form does not currently function</span>
                </Container>
            </Form>
        </Wrapper>
    )
}

export default ContactForm;