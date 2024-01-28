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
  ButtonGroup,
  SimpleGrid
} from "@chakra-ui/react";
import  {useState } from "react";
import {getdata} from "../../../api/eventlist" 
import {useQuery, useIsFetching} from "@tanstack/react-query"

export default function eventlist(){
  const handleclick =(id)=>{
    sessionStorage.setItem("oneid", id)
    console.log(id)
    
  }
const myData = {}
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
   <Heading m={10}>Event For You</Heading>
   <SimpleGrid m={2} spacing={7} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
    {data.data.map(item =>{
          
          return(
            
            <Card  maxW='sm' >
              <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'></SimpleGrid>
                <CardBody >
                    <Image
                        src='https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        alt='Event Pict'
                        borderRadius='lg'/>
                    <Stack mt='6' spacing='3'>
                        <Heading color="black" m={1} size='md'>{item.title}</Heading>
                        <Text color="black">
                           {item.description}
                        </Text>
                        <Text color='blue.600' fontSize='1xl'>
                           Price : IDR {item.price}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider/>
                <CardFooter>
                        <Button variant='solid' colorScheme='blue'  onClick={()=>{handleclick(item.id)}}>
                          <a href="http://localhost:3000/eventdetail">Check Event</a>
                        </Button>
                    
                </CardFooter>
            </Card>
            
          )
          
          
        })}
   </SimpleGrid>
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