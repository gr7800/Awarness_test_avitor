import { Box, Flex, Heading, Text, Divider, Image, Spacer, Button, useMediaQuery } from "@chakra-ui/react";
import React, { useEffect } from 'react'
import headingIndicator from "../utills/headingIndicator.jpg"
import AltitudeIndecator from "../utills/AltitudeIndecator.jpg"
import tableview from "../utills/tableview.jpg"
import automaticdirectionfinder from "../utills/automaticdirectionfinder.jpg"
import exampleImage from "../utills/exampleimage.jpg"
import { useNavigate } from "react-router-dom"

const HomePage = () => {
    let awarnesuser = JSON.parse(localStorage.getItem("awarnesuser"))
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

    const navigate = useNavigate()
    const handlePractice = () => {
        localStorage.setItem("awarnessdifficulty", "Practice")
        navigate("/startpractice")
    }
    const handleEasy = () => {
        localStorage.setItem("awarnessdifficulty", "Easy")
        navigate("/startgame")
    }
    const handleMedium = () => {
        localStorage.setItem("awarnessdifficulty", "Medium")
        navigate("/startgame")
    }
    const handleHard = () => {
        localStorage.setItem("awarnessdifficulty", "Hard")
        navigate("/startgame")
    }

    return (
        <Box padding={isLargerThan768 ? "2rem" : "1rem"} w={isLargerThan768 ? "80%" : "100%"} margin={"auto"}>
            <Box >
                <Text fontWeight={"bold"} textDecoration={"underline"} mb={"10px"} >Spatial Awarness Test (Orientation)</Text>
                <Text fontSize={"16px"} textAlign={"left"}>
                    A test to assess the candidate’s ability to read instruments and form a spatial awareness or spatial orientation. In other words you need to understand the aircraft position and attitude in the physical space.<br />
                    During this test you will see three aircraft instruments. The instruments are Heading Indicator, Attitude Indicator and Automatic Directional Finder. You'll be asked to pick the matching aircraft icons that match the instruments. We will discuss each instrument in more details.
                </Text>
            </Box>
            <Text textAlign={"left"} fontWeight={"normall"} textDecoration={"underline"} mb={"10px"} mt={"10px"}>Heading Indicator:</Text>
            <Flex direction={isLargerThan768 ? "row" : "column"} gap={isLargerThan768 ? "20px" : "0"} >
                <Box width={isLargerThan768 ? "50%" : "100%"}>
                    <Image src={headingIndicator} alt="headingindicator" />
                </Box>
                <Box>
                    <Text lineHeight={"35px"} textAlign={"left"}>The heading indicator (also called an HI) is a flight instrument used in an aircraft to inform the pilot of the aircraft's heading.<br />
                        The heading indicator to the left is showing a heading of 270 degrees (West).</Text>
                </Box>
            </Flex>
            <Divider border={"1px"} marginTop="4" marginBottom="4" />
            <Text textAlign={"left"} fontWeight={"normall"} textDecoration={"underline"} mb={"10px"} mt={"10px"}>Attitude Indicator:</Text>
            <Text textAlign={"left"}>
                An attitude indicator (AI), is an instrument used in an aircraft to inform the pilot of the orientation of the aircraft relative to Earth's horizon.The principal <br /> parts of interest to the pilot are:
            </Text>
            <Flex direction={isLargerThan768 ? "row" : "column"} gap={isLargerThan768 ? "20px" : "0"} mb={"20px"}>
                <Box width={isLargerThan768 ? "50%" : "100%"}>
                    <Image src={AltitudeIndecator} alt="headingindicator" />
                </Box>
                <Box>
                    <Text lineHeight={"35px"} textAlign={"left"}>
                        1- The miniature wings attached to the case remain parallel to the wings of the aircraft.
                        <br />
                        2- The horizon bar which separates the top (light) and bottom (dark) halves of the ball.
                        <br />
                        3- The degree marks on the upper periphery of the dial. The first 3 on both sides of centre are 10 degrees apart, then 60 degree bank marks, and 90 degree bank arks.
                    </Text>
                </Box>
            </Flex>
            <Text textAlign={"left"} fontWeight={"normall"}>
                When the wings are aligned with the horizon bar, the aircraft is in level flight. If the wings are above the horizon bar, the aircraft is in a climb. Wings below the horizon bar indicates a decent. The upper blue part of the ball represents the sky and the brown color represents ground. The miniature airplane wings (fixed to the case) represent the wings of the aircraft.
            </Text >
            <Text textAlign={"left"} fontWeight={"normall"} mt={"20px"} lineHeight={"30px"}>
                The attitude indicator above is indicating that the aircraft is in level flight (wings are aligned with the horizon bar).

                The attitude indicator will be shown in nine different bank and pitch angles. You will see this by arrow overlying the aircraft.
            </Text>
            <Box>
                <Image src={tableview} alt="table" w="100%" />
            </Box>
            <Divider border={"1px"} marginTop="4" marginBottom="4" />
            <Text textAlign={"left"} fontWeight={"normall"} textDecoration={"underline"} mb={"10px"} mt={"10px"}>Automatic direction finder (ADF):</Text>
            <Flex direction={isLargerThan768 ? "row" : "column"} gap={isLargerThan768 ? "20px" : "0"} mb={"20px"}>
                <Box width={isLargerThan768 ? "50%" : "100%"} flex={1} >
                    <Image src={automaticdirectionfinder} alt="automaticdirectionfinder" />
                </Box>
                <Box flex={2}>
                    <Text lineHeight={"35px"} textAlign={"left"}>An automatic direction finder (ADF) is an aircraft radio-navigation instrument that automatically and continuously displays the relative bearing from the aircraft to a suitable radio station (NDB station). To have a better understanding we first need to understand what relative bearing means. <span style={{ fontWeight: "bold" }}>Relative bearing</span> is the angle between the nose of the aircraft and the radio station. To figure out your position relative to radio station you can always use the fallowing formula:</Text>
                    <Box border={"1px"} fontStyle={"italic"} width="100%" p="10px" mb="20px">
                        Magnetic Heading (MH) + Relative Bearing (RB) = Magnetic Bearing (MB)
                    </Box>
                </Box>
            </Flex>
            <Heading textAlign={"left"} fontSize={"25px"} fontWeight={"normall"}>Example:</Heading>
            <Flex direction={isLargerThan768 ? "row" : "column"} gap={"20px"} >
                <Box flex={1} width={isLargerThan768 ? "50%" : "100%"}>
                    <Image src={exampleImage} alt="automaticdirectionfinder" />
                </Box>
                <Box flex={1}>
                    <Text textAlign={"left"}>
                        In the example to the left, the MH of the aircraft is 270° as read on the compass. The RB read from the ADF dial is 45°. Therefore the MB to the station = 270° + 45° = 315°. This means if you want to fly directly to the radio station you must turn to heading of 315°.</Text>
                </Box>
            </Flex>
            <Text textAlign={"left"}>All these information might be confusing at the beginning, but we will explain more in detail during practice section.</Text>
            <Heading textAlign={"left"} fontSize={"16px"} color={"red.500"} _hover={{ textDecoration: "underline" }}>Please click here for ADF simulator:</Heading>
            <Text textAlign={"left"}>Try to move the aircraft around and change the heading to see how the ADF needle changes.</Text>
            <Text textAlign={"left"} fontWeight={"bold"}>(Please Note: The application will not work properly if your browser does not have at least version 8 of Flash)</Text>
            <Divider border={"1px"} mt={"4"} mb={"4"} />

            <Flex direction={isLargerThan768 ? "row" : "column"} justifyContent="space-evenly" mb={4} fontSize="14px">
                <Box p={4} mb={isLargerThan768 ? "0" : "4"} bg="#cccccc">
                    <Text fontSize={isLargerThan768 ? "xl" : "md"} mb={2} fontWeight="bold">Practice Section</Text>
                    <Text fontSize={isLargerThan768 ? "md" : "sm"} mb={2}>10 questions with answers and detailed explanation</Text>
                    <Button borderRadius="15px" bg="#f89409" fontSize={isLargerThan768 ? "md" : "sm"} onClick={handlePractice}>Click Here To Practice</Button>
                </Box >
                <Box p={4} bg="#cccccc">
                    <Text fontSize={isLargerThan768 ? "xl" : "md"} mb={2} fontWeight="bold">Test Section</Text>
                    <Text fontSize={isLargerThan768 ? "md" : "sm"} mb={2}>10 time limited questions with answers random questions each time</Text>
                    <Flex gap="5px" m="auto" justifyContent={"center"}>
                        <Button borderRadius="15px" bg="#f89409" fontSize={isLargerThan768 ? "md" : "sm"} onClick={handleEasy}>Easy</Button>
                        <Button borderRadius="15px" bg="#f89409" fontSize={isLargerThan768 ? "md" : "sm"} onClick={handleMedium}>Medium</Button>
                        <Button borderRadius="15px" bg="#f89409" fontSize={isLargerThan768 ? "md" : "sm"} onClick={handleHard}>Hard</Button>
                    </Flex>
                </Box>
            </Flex >

            <Flex
                direction={isLargerThan768 ? "row" : "column"}
                align="stretch"
                justify="center"
                mt="4"
                mb="4"
            >
                <Box
                    bg="white"
                    borderWidth="1px"
                    borderColor="black"
                    p="4"
                    flex="1"
                    maxW={isLargerThan768 ? "30%" : "100%"}
                    mb={isLargerThan768 ? "0" : "4"}
                >
                    <Heading size="md" fontWeight="medium" color="#757575" textAlign="left">
                        Easy
                    </Heading>
                    <Text fontSize="lg" color="#757575" textAlign="left" lineHeight="35px">
                        Your Average Score:
                        <Text as="span" color="red">
                            {(awarnesuser&&awarnesuser.Easy)?awarnesuser.Easy: 0}%
                        </Text>
                    </Text>
                    <Text fontSize="lg" color="#757575" textAlign="left" lineHeight="35px">
                        Global Score: 100%
                    </Text>
                </Box>
                <Box
                    bg="white"
                    borderWidth="1px"
                    borderColor="black"
                    p="4"
                    flex="1"
                    maxW={isLargerThan768 ? "30%" : "100%"}
                    mb={isLargerThan768 ? "0" : "4"}
                    ml={isLargerThan768 ? "4" : "0"}
                >
                    <Heading size="md" fontWeight="medium" color="#757575" textAlign="left">
                        Medium
                    </Heading>
                    <Text fontSize="lg" color="#757575" textAlign="left" lineHeight="35px">
                        Your Average Score:{" "}
                        <Text as="span" color="red">
                        {(awarnesuser&&awarnesuser.Medium)?awarnesuser.Medium: 0}%
                        </Text>
                    </Text>
                    <Text fontSize="lg" color="#757575" textAlign="left" lineHeight="35px">
                        Global Score: 98%
                    </Text>
                </Box>
                <Box
                    bg="white"
                    borderWidth="1px"
                    borderColor="black"
                    p="4"
                    flex="1"
                    maxW={isLargerThan768 ? "30%" : "100%"}
                    ml={isLargerThan768 ? "4" : "0"}
                >
                    <Heading size="md" fontWeight="medium" color="#757575" textAlign="left">
                        Hard
                    </Heading>
                    <Text fontSize="lg" color="#757575" textAlign="left" lineHeight="35px">
                        Your Average Score:{" "}
                        <Text as="span" color="red">
                        {(awarnesuser&&awarnesuser.Hard)?awarnesuser.Hard: 0}
                        </Text>
                    </Text>
                    <Text fontSize="lg" color="#757575" textAlign="left" lineHeight="35px">
                        Global Score: 85%
                    </Text>
                </Box>
            </Flex>

        </Box >
    );
}

export default HomePage;
