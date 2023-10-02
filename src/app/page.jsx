import Image from "next/image";
import { Box, Heading, Text, Button, Flex, Img } from "@chakra-ui/react";
import Principal from "../../public/assets/sliderImage.svg";
import Wavify from "react-wavify";
import Icon1 from "../../public/assets/icon1.png";
import Icon2 from "../../public/assets/icon2.png";
import Icon3 from "../../public/assets/icon3.png";
import Icon4 from "../../public/assets/icon4.png";
import Icon5 from "../../public/assets/icon5.png";
import Icon6 from "../../public/assets/icon6.png";
import Icon7 from "../../public/assets/icon7.png";
import Phone from "../../public/assets/phone.png";
import Pencil from "../../public/assets/handPencil.png";
const imageStyle = {
  width: "100%",
};

const boxStyle = {
  backgroundColor: "#A5A2F6",
  position: "relative",
  overflow: "hidden",
};

const containerStyle = {
  backgroundColor: "#A5A2F6",
  position: "relative",
};

const waveContainerStyle = {
  position: "absolute",
  width: "100%",
  bottom: -6,
  // zIndex: -1,
};

export default function Home() {
  return (
    <Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingLeft="5%"
        paddingRight="5%"
        style={containerStyle}
        minH={{ base: "500px", md: "800px" }}
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
        <Box w="50%" maxW="700px">
          <Heading fontSize="3.5rem" color="#fff">
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
            Contact US
          </Button>
        </Box>
        <Box w="50%" maxW="700px">
          <Image src={Principal} style={imageStyle} />
        </Box>
      </Box>

      <Flex
        flexDir={{ base: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
        paddingLeft="5%"
        paddingRight="5%"
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
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingLeft="5%"
        paddingRight="5%"
        gap="3rem"
        minH={{ base: "500px", md: "800px" }}
      >
        <Box w="50%" maxW="700px">
          <Image src={Pencil} style={imageStyle} />
        </Box>
        <Box w="50%" maxW="700px">
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

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingLeft="5%"
        paddingRight="5%"
        gap="3rem"
        minH={{ base: "500px", md: "800px" }}
      >
        <Box w="50%" maxW="700px">
          <Image src={Icon4} />
          <Heading fontSize="3.5rem" color="#000" marginTop="1rem">
            Our App Features
          </Heading>
          <Text color="#000" marginTop="2rem">
            Cras accumsan pretium dignissim. Curabitur a orci lorem. Phasellus
            tempor dolor vel odio efficitur ac sollicitudin.
          </Text>
          <Box marginTop="2rem" marginLeft="1rem">
            <Box >
              <Flex align="center" gap="1rem" marginBottom='1rem'>
                <Image src={Icon5}  />
                <Heading fontSize="1.5rem">Instant Notifications</Heading>
              </Flex>

              <Text>
                Duis vestibulum elit vel neque pharetra vulputate. Quisque Proin
                scelerisque nisi urna. Duis rutrum non risus in imperdiet.
              </Text>
            </Box>
            <Box marginTop='2rem' marginBottom="2rem">
              <Flex align="center" gap="1rem" marginBottom='1rem'>
                <Image src={Icon6} />
                <Heading fontSize="1.5rem">User Friendly</Heading>
              </Flex>
              <Text>
                Duis vestibulum elit vel neque pharetra vulputate. Quisque Proin
                scelerisque nisi urna. Duis rutrum non risus in imperdiet.
              </Text>
            </Box>
            <Box>
              <Flex align="center" gap="1rem" marginBottom='1rem'>
                <Image src={Icon7} /> <Heading fontSize="1.5rem">Secure & Reliable</Heading>
              </Flex>
              <Text>
                Duis vestibulum elit vel neque pharetra vulputate. Quisque Proin
                scelerisque nisi urna. Duis rutrum non risus in imperdiet.
              </Text>
            </Box>
          </Box>
       
        </Box>
        <Box w="50%" maxW="700px">
          <Image src={Phone} style={imageStyle} />
        </Box>
      </Box>
    </Box>
  );
}
