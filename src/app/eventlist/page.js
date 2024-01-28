'use client'

import Link from "next/link";
import useSWR from "swr";
import EventDiscovery from './../../components/EventDiscovery'
import {     Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
  ButtonGroup, } from "@chakra-ui/react";
import  {useState } from "react";
import {getdata} from "../../../api/eventlist" 
import {useQuery, useIsFetching} from "@tanstack/react-query"

export default function eventlist(){
  const handleclick =(id)=>{
    sessionStorage.setItem("eventid", id)
    console.log(id)
    
  }
const myData = [] 
const {
  data = myData,
  isError,
  isSuccess,
  isLoading,
} = useQuery({
  queryKey: ["data"],
  queryFn: getdata,
});
if (isLoading) {

  return <h3> Loading ... </h3>;
}
if (isSuccess) {
  console.log(JSON.stringify(data))
  return (
   <>
    {data.data.map(item =>{
          
          return(
            <Card maxW='sm' >
                <CardBody >
                    <Image
                        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'/>
                    <Stack mt='6' spacing='3'>
                        <Heading m={1} size='md'>{item.title}</Heading>
                        <Text>
                           {item.description}
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                           Price: {item.price}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider/>
                <CardFooter>
                    
                    <ButtonGroup spacing='2'>
                        
                        <Button variant='solid' colorScheme='blue'  onClick={()=>{handleclick(item.id)}}>
                          <a href="http://localhost:3000/eventdetail">Check Event</a>
                        </Button>
                    </ButtonGroup>
                    
                </CardFooter>
            </Card>
          )
          
          
        })}
   
   </>

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