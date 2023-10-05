"use client";
import "./styleContact.css";
import {FormControl, FormLabel, Container, Heading, Button} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const initValues = {
    name: "",
    email: "",
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
    
    return (
    <Container>
    <Heading>Contact</Heading>
    <FormControl isRequired mb={5}>
        <input 
        type="text" 
        name="name" 
        placeholder="Full name" 
        value={values.name} 
        onChange={handleChange}/> 
    </FormControl>
    <FormControl isRequired mb={5}>
        <input 
        type="email" 
        name="email"
        placeholder="Email" 
        value={values.email} 
        onChange={handleChange}/> 
    </FormControl>
    <FormControl isRequired>
        <textarea 
        text="text"
        placeholder="Message" 
        cols="30" 
        rows="10"
        value={values.text} 
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
    >Contact
    </Button>
    </Container>

    )

}