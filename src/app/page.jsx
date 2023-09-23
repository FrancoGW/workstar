import Image from "next/image";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Principal from "../../public/assets/sliderImage.svg";
import Wavify from "react-wavify";

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
  bottom: -5,
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
        <Box w="50%" maxW='700px'>
          <Heading fontSize="3.5rem" color="#fff">
            Reflect your ideas in innovative projects!
          </Heading>
          <Text color="#fff">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            exercitationem consequatur dolores. Voluptatibus ut ipsam
            asperiores, architecto repudiandae excepturi saepe neque odio vero
            delectus dicta repellendus, est vel eaque animi.
          </Text>
          <Button
            backgroundColor="#3D37F1"
            border="none"
            color="#fff"
            padding="1rem 2rem 1rem"
            borderRadius="99px"
            fontSize="1.2rem"
          >
            Contact US
          </Button>
        </Box>
        <Box w="50%" maxW='700px'>
          <Image src={Principal} style={imageStyle} />
        </Box>
      </Box>
    </Box>
  );
}
