import React from "react"
import styled from "styled-components"

const Form = styled.form`
    /*background-color: rgb(255, 102, 102);*/
    background-color: rgba(36, 123, 160, .6);
    
    width: 100%;
    padding: 5rem;
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: 8rem auto;
    grid-template-rows: auto;
    grid-row-gap: 2rem;
    max-width: 700px;
    margin: auto;
`;

const Label = styled.label`

`;

const EmailInput = styled.input`
    max-width: 25rem;
    border: 1px solid black;
    background-color: rgb(36, 123, 160);
    border-radius: 5px;
    font-size: 1.3rem;
`;

const MessageInput = styled.textarea`
    max-width: 25rem;
    font-size: 1.3rem;
    background-color: rgb(36, 123, 160);;
    border: 1px solid black;
    border-radius: 5px;
`;

const SubmitButton = styled.button`

`;

const FormGroup = styled.p`
    text-align: left;
`

const ContactForm = () => {
    return(
        <Form>
            <Container>
            
                <Label htmlFor="email">Email</Label>
                <EmailInput
                type="email"
                id="email"
                name="client_mail"/>
           
           
                <Label htmlFor="message">Message</Label>
                <MessageInput
                type="text"
                id="message"
                rows="5"
                cols="40"/>
            </Container>
            <SubmitButton>Submit</SubmitButton>
        </Form>
    )
}

export default ContactForm;