import { Box, Flex, Image, Text, Checkbox, Button, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, Radio, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import { practicequestion } from '../utills/data';
import { useNavigate } from 'react-router-dom';

const Startpractice = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [showSubmitDialog, setShowSubmitDialog] = useState(false);

  const navigate = useNavigate();

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleNextClick = () => {
    if (selectedOption.length > 0) {
      setSelectedOption("");
      setQuestionIndex(questionIndex + 1);
    }else{
      alert("You did not selected any option")
    }
  };

  const handleFinishClick = () => {
    setShowSubmitDialog(true);
  };

  const handleCloseSubmitDialog = () => {
    setShowSubmitDialog(false);
  };

  const handleFinish = () => {
    navigate("/");
  }

  console.log(selectedOption)

  const currentQuestion = practicequestion[questionIndex];

  return (
    <Flex bgImage={"https://i.pinimg.com/originals/f4/cd/ed/f4cded2ecb70ece0708d5b31731ed8b8.gif"} bgRepeat={"repeat-x"} backgroundRepeat={"round"} flexDirection={"column"} justifyContent={"center"} padding={"20px"}>
      <Heading margin={"auto"} bg={"whiteAlpha.900"} padding={"0px 20px 0px 20px"}>Practice Here</Heading>
      <Box display={"flex"} justifyContent={"center"} width={"100%"}>
        <Image src={currentQuestion.questions} alt={`Question ${currentQuestion.id}`} />
      </Box>
      <Box bg={"whiteAlpha.900"} border={"1px"} mt={4} display={"flex"} flexDirection={"column"} justifyContent={"center"} width={{base:"100%",sm:"80%"}} padding={"20px"} margin={"auto"} >
        <Text mb={4}>{`Question ${currentQuestion.id}: Which aircraft best describes the instruments?`}</Text>
        <Flex flexWrap={"wrap"} margin={"auto"}>
          {["1", "2", "3", "4"].map((option) => (
            <Radio
              padding={"5px"}
              key={option}
              value={option}
              mr={4}
              mb={4}
              fontWeight={"bold"}
              isChecked={selectedOption === option}
              onChange={() => handleOptionChange(option)}
              borderColor="black"
              bg={"red"}
              _checked={{
                borderColor: "black",
                bg: "green",
                color: "black",
              }}
              type="radio"
              borderRadius="full" // Add this property
            >
              {option}
            </Radio>

          ))}
        </Flex>
        <Flex flexDirection={{base:"column",sm:"row"}} gap={"20px"} margin={"auto"}>
          <Button onClick={handleFinishClick} bg={"#f89409"}>Submit Answer</Button>
          {questionIndex < practicequestion.length - 1 ? (
            <Button onClick={handleNextClick} bg={"#f89409"}>
              Next
            </Button>
          ) : (
            <Button onClick={handleFinish} bg={"#f89409"}>
              Finish
            </Button>
          )}
        </Flex>
      </Box>
      <AlertDialog isOpen={showSubmitDialog} onClose={handleCloseSubmitDialog}>
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Your Answers
          </AlertDialogHeader>

          <AlertDialogBody>
            {selectedOption.length === 0 ? (
              <Text>You did not select any option.</Text>
            ) : (
              <>
                <Text>Question {currentQuestion.id}</Text>
                <Text>Selected Option: {selectedOption}</Text>
                <Image src={currentQuestion.answer} alt={`Answer to Question ${currentQuestion.id}`} mt={4} />
              </>
            )}
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button onClick={handleCloseSubmitDialog} ml={3}>
              Close
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Flex>
  );
};

export default Startpractice;
