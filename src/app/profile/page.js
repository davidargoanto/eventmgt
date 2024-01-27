"use client"

import {
    Center,
    Flex,
    Grid,
    GridItem,
    Box,
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
  import Link from "next/link";
  import {getdata} from "../../../api/profile"
  import {useQuery, useIsFetching} from "@tanstack/react-query"

  export default function profile (){
    const myData = {} 


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