import { Box, Flex, Image, Text, Button, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, Radio, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Questions} from '../utills/data';
import { useNavigate } from 'react-router-dom';

const Startgame = () => {
    let awarnesuser = JSON.parse(localStorage.getItem("awarnesuser"))||{}
    const [questionIndex, setQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");
    const [showSubmitDialog, setShowSubmitDialog] = useState(false);
    let [score, setScore] = useState({});
    let [scored,setScored] = useState(0);
    let difficulty = localStorage.getItem("awarnessdifficulty");

    const navigate = useNavigate();

    const handleAnswerView =()=>{
        localStorage.setItem("useroption",JSON.stringify(score));
        setSelectedOption("");
        setQuestionIndex(0);
        setScore({});
        setScored(0);
        setShowSubmitDialog(false);
        navigate("/result");
    }

    const handleRetake = ()=>{
        setSelectedOption("");
        setQuestionIndex(0);
        setScore({});
        setScored(0);
        setShowSubmitDialog(false);
        navigate("/")
    }

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    const handleNextClick = () => {
        if (selectedOption.length > 0) {
            score[currentQuestion.id] = selectedOption
            if(+selectedOption===+currentQuestion.answer){
                setScored(scored+1);
            }
            awarnesuser[difficulty]=scored;
            localStorage.setItem("awarnesuser",JSON.stringify(awarnesuser));
            setSelectedOption("");
            setQuestionIndex(questionIndex + 1);
        } else {
            alert("You did not selected any option")
        }
    };

    const handleSubmit = () => {
        if (selectedOption.length > 0) {
            score[currentQuestion.id] = selectedOption
            if(+selectedOption===+currentQuestion.answer){
                setScored(scored++);
            }
            awarnesuser[difficulty]=scored;
            localStorage.setItem("awarnesuser",JSON.stringify(awarnesuser));
            setShowSubmitDialog(true);
        } else {
            alert("You did not selected any option")
        }

    };

    const handleCloseSubmitDialog = () => {
        setShowSubmitDialog(false);
    };

    // let Questions = []
    // if (difficulty === "Easy") {
    //     Questions = easyquestion;
    // } else if (difficulty === "Medium") {
    //     Questions = mediumquestion
    // } else if (difficulty === "Hard") {
    //     Questions = hardquestion;
    // }

    const currentQuestion = Questions[questionIndex];

    console.log(score,scored)

    return (
        <Flex bgImage={"https://i.pinimg.com/originals/f4/cd/ed/f4cded2ecb70ece0708d5b31731ed8b8.gif"} bgRepeat={"repeat-x"} backgroundRepeat={"round"} flexDirection={"column"} justifyContent={"center"} padding={"20px"}>
            <Heading margin={"auto"} bg={"whiteAlpha.900"} padding={"0px 20px 0px 20px"}>{difficulty} Test</Heading>
            <Box display={"flex"} justifyContent={"center"} width={"100%"}>
                <Image src={currentQuestion.questions} alt={`Question ${currentQuestion.id}`} />
            </Box>
            <Box bg={"whiteAlpha.900"} border={"1px"} mt={4} display={"flex"} flexDirection={"column"} justifyContent={"center"} width={{ base: "100%", sm: "80%" }} padding={"20px"} margin={"auto"} >
                <Text mb={4}>{`Question ${questionIndex+1}: Which aircraft best describes the instruments?`}</Text>
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
                <Flex flexDirection={{ base: "column", sm: "row" }} gap={"20px"} margin={"auto"}>
                    {questionIndex < Questions.length - 1 ? (
                        <Button onClick={handleNextClick} bg={"#f89409"}>
                            Next
                        </Button>
                    ) : (
                        <Button onClick={handleSubmit} bg={"#f89409"}>
                            Submit Answer
                        </Button>
                    )}
                </Flex>
            </Box>
            <AlertDialog isOpen={showSubmitDialog} onClose={handleCloseSubmitDialog}>
                <AlertDialogOverlay />
                <AlertDialogContent padding={"5px"}>
                    <AlertDialogHeader border={"1px solid yellow"} borderRadius={"5px"} bg={"#f89409"} color={"white"} textAlign={"center"} fontSize="lg" fontWeight="bold">
                        Spatial Awareness Test Score
                    </AlertDialogHeader>

                    <AlertDialogBody fontSize={"20px"} textAlign={"center"}>
                        <>
                            <Text>You Scored: {scored} out of 10 Questions</Text>
                            <Text>You Scored : {scored*10}%</Text>
                            <Text textDecoration={"underline"} onClick={handleAnswerView} text>Click here to view answers!</Text>
                            <Button bg={"#f89409"} _hover={{color:"black"}} color={"white"} fontWeight={"bold"} mt={"20px"} onClick={handleRetake}>Retake Test</Button>
                        </>
                    </AlertDialogBody>

                    <AlertDialogFooter>
                        <Button color={"white"} _hover={{color:"black"}} bg={"#f89409"} fontWeight={"bold"} onClick={handleCloseSubmitDialog} ml={3}>
                            Close
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </Flex>
    );
};

export default Startgame;

export const processquestion=Questions
