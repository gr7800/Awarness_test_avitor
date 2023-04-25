import { Box, Button, Flex, Heading, Image, Input, Text } from '@chakra-ui/react'
import React from 'react'

import {processquestion} from "./Startgame"

const Result = () => {
  let difficulty = localStorage.getItem("awarnessdifficulty")
  let score = JSON.parse(localStorage.getItem("useroption"))
  let Questions = processquestion
   
  return (
    <>
    <Heading>Here is Answers !</Heading>
    <Box>
       {Questions&&Questions.length>0&&Questions.map((el,index)=>(
        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} width={{base:"100%",md:"50%"}} margin={"auto"}>
          <Heading as={"h4"} fontWeight={"normal"} textAlign={"left"}>Q. {index+1}</Heading>
          <Image src={el.questions} alt={`Question ${el.id}`} />
          <Text fontWeight={"bold"} color={(+score[el.id]===+el.answer)?"green":"red"}>Your Answers : {score[el.id]}</Text>
          <Text>Correct Answers : {el.answer}</Text>
        </Box>
       ))}
    </Box>
    </>
  )
}

export default Result
