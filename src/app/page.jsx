"use client";
import Image from "next/image";
import { Input, Box, Heading, Text, Button, Flex, Img, FormControl, Container, FormErrorMessage, Textarea, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import FadeUp from "./components/fadeUp";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import Principal from "../../public/assets/sliderImage.svg";
import Wavify from "react-wavify";
import Icon1 from "../../public/assets/icon1.png";
import Icon2 from "../../public/assets/icon2.png";
import Icon3 from "../../public/assets/icon3.png";
import Icon4 from "../../public/assets/icon4.png";
import Icon5 from "../../public/assets/icon5.png";
import Icon6 from "../../public/assets/icon6.png";
import Icon7 from "../../public/assets/icon7.png";
import Icon8 from "../../public/assets/icon8.png";
import Phone from "../../public/assets/phone.svg";
import Pencil from "../../public/assets/handPencil.svg";
import Note from "../../public/assets/note.svg";
import Mp4 from "../../public/assets/mp4.svg";

import "./global.css";

import { useState } from "react";
import { sendContactForm } from "../../lib/api"; 

const imageStyle = {
  width: '100%'
};

const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { isLoading: false, error: "", values: initValues };

const containerStyle = {
  backgroundColor: "#A5A2F6",
  position: "relative",
};

const waveContainerStyle = {
  position: "absolute",
  width: "100%",
  bottom: -6,
};

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView();

  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };


  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0.0);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        if (count < 20) {
          setCount((prevCount) => prevCount + 1);
        }
      }, 50); // Ajusta la velocidad de incremento según tus necesidades
      return () => clearInterval(interval);
    }
  }, [isVisible, count]);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        if (count2 < 40) {
          setCount2((prevCount2) => prevCount2 + 1);
        }
      }, 50); // Ajusta la velocidad de incremento según tus necesidades
      return () => clearInterval(interval);
    }
  }, [isVisible, count2]);
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        if (count3 < 4.9) {
          setCount3((prevCount3) => {
            const roundedCount = Math.round((prevCount3 + 0.1) * 10) / 10;
            return roundedCount;
          });
        }
      }, 50); // Ajusta la velocidad de incremento según tus necesidades
      return () => clearInterval(interval);
    }
  }, [isVisible, count3]);
  return (
    <Box>
      <Box
        display="flex"
        justifyContent={{base:'start',md:'center'}}
        alignItems="center"
        paddingBottom='5%'
        paddingLeft="5%"
        paddingRight="5%"
        style={containerStyle}
        minH={{ base: "700px", md: "800px" }}
        flexDir={{base:'column',md:'row'}}
      >
        <div style={waveContainerStyle}>
          <Wavify
            fill="#FFF"
            opacity="1"
            className="custom-class-name"
            options={{
              height: 20,
              amplitude: 30,
              speed: 0.15,
              points: 4,
            }}
          >
            {/* Contenido que se mostrará sobre las olas */}
          </Wavify>
        </div>
        <Box w={{base:'100%', md:'50%'}} maxW="700px" marginTop={{base:'20%',md:'0'}} >
          <Heading fontSize={{base:'2.5rem',md:'3.5rem'}} color="#fff">
            Reflect your ideas in innovative projects!
          </Heading>
          <Text color="#fff" marginBottom="2rem" marginTop="2rem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            exercitationem consequatur dolores. Voluptatibus ut ipsam
            asperiores, architecto repudiandae excepturi saepe neque odio vero
            delectus dicta repellendus, est vel eaque animi.
          </Text>
          <Button
            backgroundColor="#3D37F1"
            border="none"
            color="#fff"
            padding="2rem 2rem 2rem"
            borderRadius="99px"
            fontSize="1.2rem"
          >
            <a href="/Contact">Contact US</a>
          </Button>
        </Box>
        <Box w="50%" maxW="700px" display={{base:'none', md:'block'}}>
          <Image src={Principal} style={imageStyle} />
        </Box>
      </Box>
      <FadeUp>
        <Flex
          flexDir={{ base: "column", md: "row" }}
          justifyContent="center"
          alignItems="center"
          paddingLeft="5%"
          paddingRight="5%"
          marginBottom="5%"
          marginTop="5%"
          wrap="wrap"
          gap="1rem"
          minH="600px"
        >
          <Box
            border="1px solid #f3f4f6"
            height="300px"
            w="300px"
            display="flex"
            flexDir="column"
            justifyContent="center"
            borderRadius="10px"
            alignItems="center"
            padding="1rem"
          >
            <Image src={Icon1} />
            <Text fontSize="1.3rem" fontWeight="600" marginTop="1rem">
              Awesome Design
            </Text>
            <Text>Lorem ipsum dolor sit amet into</Text>
          </Box>
          <Box
            border="1px solid #f3f4f6"
            height="300px"
            w="300px"
            display="flex"
            flexDir="column"
            justifyContent="center"
            borderRadius="10px"
            alignItems="center"
          >
            <Image src={Icon2} />
            <Text fontSize="1.3rem" fontWeight="600" marginTop="1rem">
              Awesome Design
            </Text>
            <Text>Lorem ipsum dolor sit amet into</Text>
          </Box>
          <Box
            border="1px solid #f3f4f6"
            height="300px"
            w="300px"
            display="flex"
            flexDir="column"
            justifyContent="center"
            borderRadius="10px"
            alignItems="center"
          >
            <Image src={Icon3} />
            <Text fontSize="1.3rem" fontWeight="600" marginTop="1rem">
              Awesome Design
            </Text>
            <Text>Lorem ipsum dolor sit amet into</Text>
          </Box>
        </Flex>
      </FadeUp>
      <FadeUp>
      <Box
        display="flex"
        justifyContent="center"
        flexDir={{base:'column-reverse',md:'row'}}
        alignItems="center"
        marginTop={{base:'10rem',md:'0'}}
        marginBottom={{base:'10rem',md:'0'}}
        paddingLeft="5%"
        paddingRight="5%"
        gap="3rem"
        minH={{ base: "500px", md: "800px" }}
      >
        <Box w={{base:'100%', md:'50%'}} maxW="700px">
          <Image src={Pencil} style={imageStyle} />
        </Box>
        <Box w={{base:'100%', md:'50%'}} maxW="700px">
          <Image src={Icon4} />
          <Heading fontSize="3.5rem" color="#000" marginTop="1rem">
            We Designed Perfect App for You
          </Heading>
          <Text color="#000" marginTop="2rem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            exercitationem consequatur dolores. Voluptatibus ut ipsam
            asperiores, architecto repudiandae excepturi saepe neque odio vero
            delectus dicta repellendus, est vel eaque animi.
          </Text>
          <Box marginTop="2rem" marginLeft="1rem">
            <ul>
              <li>
                Lorem ipsum dolor sit amet into consectetur adipiscing elit
              </li>
              <li>
                Lorem ipsum dolor sit amet into consectetur adipiscing elit
              </li>
              <li>
                Lorem ipsum dolor sit amet into consectetur adipiscing elit
              </li>
              <li>
                Lorem ipsum dolor sit amet into consectetur adipiscing elit
              </li>
            </ul>
          </Box>
          <Button
            backgroundColor="#3D37F1"
            border="none"
            color="#fff"
            padding="2rem 2rem 2rem"
            borderRadius="99px"
            fontSize="1.2rem"
            marginTop="2rem"
          >
            Learn More
          </Button>
        </Box>
      </Box>
      </FadeUp>
      <FadeUp>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDir={{base:'column',md:'row'}}
        marginBottom="10%"
        marginTop="10%"
        paddingLeft="5%"
        paddingRight="5%"
        gap="3rem"
        minH={{ base: "500px", md: "800px" }}
      >
        <Box w={{base:'100%',md:'50%'}} maxW="700px">
          <Image src={Icon4} />
          <Heading fontSize="3.5rem" color="#000" marginTop="1rem">
            Our App Features
          </Heading>
          <Text color="#000" marginTop="2rem">
            Cras accumsan pretium dignissim. Curabitur a orci lorem. Phasellus
            tempor dolor vel odio efficitur ac sollicitudin.
          </Text>
          <Box marginTop="2rem" marginLeft="1rem">
            <Box>
              <Flex align="center" gap="1rem" marginBottom="1rem">
                <Image src={Icon5} />
                <Heading fontSize="1.5rem">Instant Notifications</Heading>
              </Flex>

              <Text>
                Duis vestibulum elit vel neque pharetra vulputate. Quisque Proin
                scelerisque nisi urna. Duis rutrum non risus in imperdiet.
              </Text>
            </Box>
            <Box marginTop="2rem" marginBottom="2rem">
              <Flex align="center" gap="1rem" marginBottom="1rem">
                <Image src={Icon6} />
                <Heading fontSize="1.5rem">User Friendly</Heading>
              </Flex>
              <Text>
                Duis vestibulum elit vel neque pharetra vulputate. Quisque Proin
                scelerisque nisi urna. Duis rutrum non risus in imperdiet.
              </Text>
            </Box>
            <Box>
              <Flex align="center" gap="1rem" marginBottom="1rem">
                <Image src={Icon7} />{" "}
                <Heading fontSize="1.5rem">Secure & Reliable</Heading>
              </Flex>
              <Text>
                Duis vestibulum elit vel neque pharetra vulputate. Quisque Proin
                scelerisque nisi urna. Duis rutrum non risus in imperdiet.
              </Text>
            </Box>
          </Box>
        </Box>
        <Box w={{base:'100%',md:'50%'}} maxW="700px">
          <Image src={Phone} style={imageStyle} />
        </Box>
      </Box>
      </FadeUp>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDir={{base:'column-reverse',md:'row'}}
        paddingTop={{base:'10%',md:'0'}}
        paddingLeft="5%"
        paddingRight="5%"
        style={containerStyle}
        minH={{ base: "500px", md: "500px" }}
      >
        <Box w={{base:'100%',md:'50%'}} maxW="700px">
          <Image src={Mp4} style={imageStyle} />
        </Box>
        <div style={waveContainerStyle}>
          <Wavify
            fill="#FFF"
            opacity="1"
            className="custom-class-name"
            options={{
              height: 70,
              amplitude: 30,
              speed: 0.15,
              points: 4,
            }}
          >
            {/* Contenido que se mostrará sobre las olas */}
          </Wavify>
        </div>
        <Box w={{base:'100%',md:'50%'}} maxW="700px">
          <Heading fontSize="3.5rem" color="#fff">
            Get Your App for Next Way.
          </Heading>
          <Text color="#fff" marginBottom="2rem" marginTop="2rem">
            In consequat, quam id sodales hendrerit, eros mi molestie leo an
            lacinia risus neque tristique augue. Proin tempus urna vel congue
            elementum. Vestibulum euismod accumsan.
          </Text>
          <Button
            backgroundColor="#FFF"
            border="none"
            color="#000"
            padding="2rem 2rem 2rem"
            borderRadius="99px"
            fontSize="1.2rem"
          >
            Contact US
          </Button>
        </Box>
      </Box>
      <FadeUp>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDir={{base:'column',md:'row'}}
        paddingTop={{base:'10%',md:'0'}}
          marginBottom="10%"
          marginTop="10%"
          paddingLeft="5%"
          paddingRight="5%"
          gap="3rem"
          minH={{ base: "500px", md: "800px" }}
        >
          <Box w={{base:'100%', md:'50%'}} maxW="700px">
            <Image src={Icon8} />
            <Heading fontSize="3.5rem" color="#000" marginTop="1rem">
              Have any Question?
            </Heading>
            <Text color="#000" marginTop="2rem">
              Cras accumsan pretium dignissim. Curabitur a orci lorem. Phasellus
              tempor dolor vel odio efficitur ac sollicitudin.
            </Text>
            <Box marginTop="2rem">
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem border="none">
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontSize="1.5rem"
                      >
                        How install my app?
                      </Box>
                      <AccordionIcon color="#A182CA" fontSize="2rem" />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem border="none">
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontSize="1.5rem"
                      >
                        How contact us?
                      </Box>
                      <AccordionIcon color="#A182CA" fontSize="2rem" />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem border="none">
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontSize="1.5rem"
                      >
                        How contact us?
                      </Box>
                      <AccordionIcon color="#A182CA" fontSize="2rem" />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem border="none">
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontSize="1.5rem"
                      >
                        How contact us?
                      </Box>
                      <AccordionIcon color="#A182CA" fontSize="2rem" />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
          </Box>
          <Flex justifyContent='center' w={{base:'100%', md:'50%'}} maxW="700px">
            <Image src={Note} className="svg" />
          </Flex>
        </Box>
      </FadeUp>
      <FadeUp>
      <Box padding="5%" ref={ref}>
        <Flex
          background="#A5A2F6"
          padding="3rem"
          justifyContent="space-around"
          borderRadius="1rem"
          height={{base:'700px',md:'200px'}}
          flexDir={{base:'column',md:'row'}}
        >
          <Flex alignItems="center" flexDir="column">
            <Heading color="#fff" fontSize={{base:'6rem',md:'3.5rem'}}>
              {count}+
            </Heading>
            <Text color="#fff">Clients</Text>
          </Flex>
          <Flex alignItems="center" flexDir="column">
            <Heading color="#fff" fontSize={{base:'6rem',md:'3.5rem'}}>
              {count2}+
            </Heading>
            <Text color="#fff">Projects</Text>
          </Flex>
          <Flex alignItems="center" flexDir="column">
            <Heading color="#fff" fontSize={{base:'6rem',md:'3.5rem'}}>
              {count3}
            </Heading>
            <Text color="#fff">Rating</Text>
          </Flex>
        </Flex>
      </Box>
      <Flex
        justifyContent="center"
        alignItems="center"
        paddingBottom="5%"
        paddingTop="5%"
        paddingLeft='5%'
        paddingRight='5%'
      >
        <Flex
          flexDir="column"
          maxW="400px"
          justifyContent="center"
          alignItems="center"
          gap="1rem"
        >
          <Heading>Still Not Lucky?</Heading>
          <Text align='center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            earum nostrum quis ex, hic quia sequi distinctio quam, adipisci
            voluptatibus expedita fugit illum iure facere nulla veniam similique
            facilis amet?
          </Text>
          <Button
            backgroundColor="#3D37F1"
            border="none"
            color="#fff"
            padding="2rem 2rem 2rem"
            borderRadius="99px"
            fontSize="1.2rem"
          >
            Contact US
          </Button>
        </Flex>
      </Flex>
      <Flex>
        <Container>
          <Heading align="center">Contact</Heading>
           <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
            <Input
              placeholder="Name" 
              type="text"
              name="name"
              errorBorderColor="red.300"
              value={values.name}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
           </FormControl>
   

          <FormControl isRequired isInvalid={touched.email && !values.email} mb={5}>
            <Input
              placeholder="Email" 
              type="email"
              name="email"
              errorBorderColor="red.300"
              value={values.email}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>


          <FormControl mb={5} isRequired isInvalid={touched.subject && !values.subject}>
            <Input
              placeholder="Subject" 
              type="text"
              name="subject"
              errorBorderColor="red.300"
              value={values.subject}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>


          <FormControl  isRequired isInvalid={touched.message && !values.message} mb={5}>
            <Textarea
              placeholder="Message" 
              type="text"
              name="message"
              rows={4}
              errorBorderColor="red.300"
              value={values.message}
              onChange={handleChange}
              onBlur={onBlur}
            />
          </FormControl>

          <Button
              mb={5}
              backgroundColor="#3D37F1"
              border="none"
              color="#fff"
              padding="2rem 2rem 2rem"
              borderRadius="99px"
              fontSize="1.2rem"
              variant="outline"
              isLoading={isLoading}
              disabled={
                !values.name || !values.email || !values.subject || !values.message
              }
              onClick={onSubmit}>
                Contact
          </Button>
        </Container>
      </Flex>
      </FadeUp>   
    </Box>
    
  );
}
