"use client"
import {
    Flex,
    Box,
    Center,
    Card,
    CardHeader,
    CardBody,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    FormHelperText
  } from '@chakra-ui/react'
  import {useQuery, useIsFetching, useMutation} from "@tanstack/react-query"
  import {getdataone} from '../../../api/oneevent';
  import {dopay} from '../../../api/transaction'
import { useState } from 'react';

  export default function eventdetail (){
    const [amount, setAmount] = useState()
    const [points, setPoints] = useState()
    const [code, setCode] = useState("")
    const payMutation = useMutation({
      mutationFn: async (data) => {

        const res =  await dopay(data)
        return res
  
      },
      onSuccess: (data, variables, context) => {
        console.log(data)
      },
      onError:(err, variables, context) => {
        
        console.log(JSON.stringify(err));
  
      },
    });
    const handlepay=(e)=>{
      payMutation.mutate({
        points : points,
        amount: amount,
        code : code
      })
    }
    const myData ={}
    const {
      data = myData,
      isError,
      isSuccess,
      isLoading,
    } = useQuery({
      queryKey: ["event"],
      queryFn:getdataone,
    });
    if (isLoading) {

      return <h3> Loading ... </h3>;
    }
    if (isSuccess) {


    }
    if (isError) {
      console.log(data)
      
      return <h3> Data does not exist </h3>;
    }
    return(
      <Center w= "100vw"  marginY={"1vw"}>
        <Box w ="80%"border={"2px"} rounded={"5px"}>
          <Center><Heading>{data.event.title}</Heading></Center>
          
          <hr/>

          <Center w ="100%"  marginY={"2vw"}>
            <img src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            alt="placeholder"
              width="90%" ></img>
  
          </Center>
          <hr/>
          <Center>            
            <Box w={"50%"}>
            Location :
            <br/>
            {data.event.location}
          </Box>
          <Box w={"50%"}>
            date :
            <br/>
            {data.event.datetime}
          </Box></Center>

          <hr/>
          <Box marginY={"2vw"}>
          <Text>
          Description:
          <br/>
          {data.event.description}</Text>
          
          </Box>
          <FormControl className="mb-5">
          <FormLabel> Amount </FormLabel>
          <Input
            type="amount"
            name="amount"
            onChange={(e) => setAmount(parseInt(e.target.value))}
          />

        </FormControl>
        <FormControl className="mb-5">
          <FormLabel> Points</FormLabel>
          <Input
            type="points"
            name="points"
            onChange={(e) => setPoints(parseInt(e.target.value))}
          />

        </FormControl>
        <FormControl className="mb-5">
          <FormLabel> Code </FormLabel>
          <Input
            type="code"
            name="code"
            onChange={(e) => setCode(e.target.value)}
          />
          <FormHelperText>{code}</FormHelperText>
        </FormControl>
        <FormControl className="text-center">
          <Button
            type="button"
            colorScheme="blue"
            className="w-full"
            onClick={() => handlepay()}
          >
            <a href='http://localhost:3000'>pay</a>
          </Button>
        </FormControl>

          
        </Box>
      </Center>
    )
  }