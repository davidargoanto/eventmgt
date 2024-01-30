"use client"

import {
    Center,
    Flex,
    Grid,
    GridItem,
    Box,
    Button,
    CardHeader,
    CardBody,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    RadioGroup,
    Radio,
    Heading,
    Text,
    useColorModeValue,
    FormHelperText
  } from '@chakra-ui/react'
  import Link from "next/link";
  import React from 'react';
  import {getdata} from "../../../api/profile"
  import {useQuery, useIsFetching} from "@tanstack/react-query"

  export default function profile (){
    const myData = {} 
    const [value, setValue] = React.useState('1')

    const handleclick =(id)=>{
      sessionStorage.setItem("eventid", id)
      console.log(id)
      
    }

    const {
      data = myData,
      isError,
      isSuccess,
      isLoading,
    } = useQuery({
      queryKey: ["profile"],
      queryFn:getdata,
    });
    if (isLoading) {

      return <h3> Loading ... </h3>;
    }
    if (isSuccess) {
      console.log(JSON.stringify(data))
      const Disc = ()=>{
        if (data.profile.discount !== 0){
          return(
            <Center bg={"lightblue"} color={"white"}>
              Registration Promo discount {data.profile.discount}
              <br/>
              until{data.profile.discexp} 
              <br/>
              Use code REG10 during transaction 
            </Center>
          )
        }

      }

      return (
        <Box w= "100vw"> 

        <Center w ={"80%"} margin={"5vw"}>
          <Grid templateColumns={'repeat(2, 1fr)'} gap={4}>
            <GridItem colSpan={2}><Heading size='2xl'>Welcome back {data.profile.name}</Heading> </GridItem>
            <GridItem colSpan={1}>Balance </GridItem>
            <GridItem colSpan={1}>: {data.profile.wallet}</GridItem>
            <GridItem colSpan={1}>Email  </GridItem>
            <GridItem colSpan={1}>: {data.profile.email}</GridItem>
            <GridItem colSpan={1}>Referral Code</GridItem>
            <GridItem colSpan={1}>: {data.profile.referalC}</GridItem>
            <GridItem colSpan={1}>points</GridItem>
            <GridItem colSpan={1}>: {data.profile.points}</GridItem>
            <GridItem colSpan={1}>Points Exp date </GridItem>  
            <GridItem colSpan={1}>: {data.profile.pointsexp}</GridItem>        
          </Grid>
        </Center>

        <Box w ={"100%"}marginTop={"1vw"}>
        <Disc></Disc>
        <Heading size='2xl' marginBottom={"5vw"}>Events that I Organized</Heading>
        {data.profile.eventcreate.map(item =>{
              
              return(
              <Box w ={"80%"} margin={"2vw"} fontSize={"2vw"} rounded={"15px"} border='1px' borderColor='black'>
                <Flex>
                <Box w= "50%">Events Name :{item.title}</Box>
                <Box w= "50%">{item.datetime}</Box>
                </Flex>
                <hr/>
                <Flex>
                <Box w= "50%">{item.location}</Box>
                <Box w= "50%">Sales :{item.bookedseats}</Box>
                </Flex>
                <hr/>
                {item.description}
                <br/>
                <Box color={"blue"} >
                  <a href='http://localhost:3000/ctr' onClick={()=>{handleclick(item.id)}}>See more Details</a>
                </Box>
              </Box>)
              
            })}
        </Box>
        <Box w ={"100%"}marginTop={"1vw"}>

        <Heading size='2xl' marginBottom={"5vw"}>My Purchase History</Heading>
        {data.profile.transaction.map(item =>{
              
              return(
              <Box w ={"80%"} margin={"2vw"} fontSize={"2vw"} rounded={"15px"} border='1px' borderColor='black'>
                <Flex>
                <Box w= "50%">Events Name :{item.eventtitle}</Box>
                <Box w= "50%">{item.datetime}</Box>
                </Flex>
                <hr/>
                <Flex>
                <Box w= "33%">Price :{item.total}</Box>
                <Box w= "33%">Discount :{item.disc}</Box>
                <Box w= "33%">Amount :{item.amount}</Box>
                </Flex>
                <Flex>
                <Box w= "50%">Payed :{item.money}</Box>
                <Box w= "50%">Points used :{item.points}</Box>
                </Flex>
                <RadioGroup onChange={setValue} value={value}>
                <Text>Rate our event </Text>
      <Stack direction='row'>
        
        <Radio value='1'>1</Radio>
        <Radio value='2'>2</Radio>
        <Radio value='3'>3</Radio>
        <Radio value='4'>4</Radio>
        <Radio value='5'>5</Radio>
      </Stack>
      <FormControl margin={2}>
        <FormLabel>Feedback</FormLabel>
        <Input placeholder='Your feedback..'/>
      </FormControl>
      <Button>Submit</Button>
    </RadioGroup>
                <Flex>

                </Flex>

              </Box>)
              
            })}
        </Box>
        

        </Box>


      )
   }
   if (isError) {
      console.log(data)
      return (
        <Center w= "100vw">
          Please Log in with a valid account
        </Center>
          
      );
      
  }

  }