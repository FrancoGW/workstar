"use client";
import "./styleContact.css";
import {
    Button,
    Container,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Text,
    Textarea,
    useToast,
  } from "@chakra-ui/react";
  import { useState } from "react";
import { sendContactForm } from "../lib/api";

const initValues = {
    name: "",
    email: "",
    subject: "",
    message: ""
}

const initState = {values:initValues}

export default function ContactUS () {
const [state, setState] = useState(initState)
const {values, isLoading} = state

const handleChange = ({target}) => setState((prev) => ({
    ...prev, 
    values: {
        ...prev.values,
        [target.name]: target.value,
    },
}));

const onSubmit = async () => {
    setState((prev) => ({
        ...prev,
        isLoading:true
    }));
    await sendContactForm(values);
};
    
    return (
    <Container>
    <Heading>Contact</Heading>

    <FormControl isRequired isInvalid = {!values.name} mb={5}>
        <input 
        type="text" 
        name="name" 
        placeholder="Full name" 
        value={values.name} 
        onChange={handleChange}/> 
    </FormControl>
   

    <FormControl isRequired isInvalid={!values.email} mb={5}>
        <input 
        type="email" 
        name="email"
        placeholder="Email" 
        value={values.email} 
        onChange={handleChange}/> 
    </FormControl>


    <FormControl isRequired isInvalid={!values.subject} mb={5}>
        <input 
        type="text" 
        name="subject"
        placeholder="Subject" 
        value={values.subject} 
        onChange={handleChange}/> 
    </FormControl>


    <FormControl isRequired isInvalid={!values.message}>
        <textarea 
        text="text"
        name="message"
        placeholder="Message" 
        cols="30" 
        rows="10"
        value={values.message} 
        onChange={handleChange}>
        </textarea> <br />
    </FormControl>


    <Button
    backgroundColor="#3D37F1"
    border="none"
    color="#fff"
    padding="2rem 2rem 2rem"
    borderRadius="99px"
    fontSize="1.2rem"
    isLoading={isLoading}
    disabled={!values.name || !values.email || !values.subject || !values.message}
    onClick = {onSubmit}
    >Contact
    </Button>
    </Container>

    )

}