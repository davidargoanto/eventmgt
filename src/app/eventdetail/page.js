"use client"
import {
    Flex,
    Box,
    Center,
    Card,
    CardHeader,
    CardBody,
    FormControl,
    ButtonGroup,
    CardFooter,
    Divider,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    FormHelperText
  } from '@chakra-ui/react'
  import {useQuery, useIsFetching} from "@tanstack/react-query"
  import {  getdataone } from '../../../api/oneevent';

  export default function stats (){
    const myData ={}
    const {
      data = myData,
      isError,
      isSuccess,
      isLoading,
    } = useQuery({
      queryKey: ["data"],
      queryFn:getdataone,
    });
    if (isLoading) {

        return <h3>
            Loading ...
        </h3>;
    }
    if (isSuccess) {
      console.log(data)
    }
    if (isError) {
      
      return <h3> Data does not exist </h3>;
    }
    

  }