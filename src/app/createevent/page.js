'use client'

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Heading,
    Divider,
    Input,
    Select,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Stack,
    Box,
    Text,
    Button,
    DatePicker
} from '@chakra-ui/react'
import {createevent} from './../../../api/event'
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';




export default function page() {
     
    const [title, setTitle] = useState("");
    const [description, setDesc] = useState("")
    const [location, setLoc] = useState("")
    const [datetime, setDate] = useState("")
    const [availableseats, setAvailableseats] = useState()
    const [price, setPrice] = useState()
    const [userID, setUserID ] = useState(1)

    const createMutation = useMutation({
        mutationFn: async (data) => {

            const res = await createevent(data)
            return res

        },
        onSuccess: (data, variables, context) => {
          console.log(data)
          router.push("/");
        },
        onError: (err, variables, context) => {

            console.log(JSON.stringify(err));

        }
    });

    const create = (e) => {
        createMutation.mutate({
            title: title,
            description: description,
            location: location,
            datetime: datetime,
            availableseats: availableseats,
            price: price,
            userID: userID

        });
        alert("ok")
    };

    return (
        <div>
            <Heading m={5}>
                Create Your Event</Heading>
            <Box m={5}>

                <Stack mt='6' spacing='10'>
                    <Divider></Divider>
                    <FormControl isRequired="isRequired">
                        <FormLabel>Event Title</FormLabel>
                        <Input placeholder="Title" onChange={(e) => setTitle(e.target.value)}/>
                        <FormHelperText>Insert yout event title here</FormHelperText>
                    </FormControl>

                    <FormControl >
                        <FormLabel>Description</FormLabel>
                        <Input placeholder="Description" onChange={(e) => setDesc(e.target.value)}/>
                        <FormHelperText>Insert yout event description here</FormHelperText>
                    </FormControl>

                    <FormControl isRequired="isRequired">
                        <FormLabel>Select Date and Time</FormLabel>
                        <Input
                            placeholder="Select Date and Time"
                            size="md"
                            type="datetime-local"
                            onChange={(e) => setDate(e.target.value + ":00.100Z")}/>
                        <FormHelperText>Insert yout event date and time here</FormHelperText>
                    </FormControl>

                    <FormControl isRequired="isRequired">
                        <FormLabel>Location</FormLabel>
                        <Input
                            placeholder='Select country'
                            type='city-local'
                            onChange={(e) => setLoc(e.target.value)}/>

                        <FormHelperText>Insert yout event location here</FormHelperText>
                    </FormControl>

            <FormControl isRequired="isRequired">
                <FormLabel>Capacity</FormLabel>
                <Input 
                onChange={(e)=> (setAvailableseats(parseInt(e.target.value)))}
                >
                    
                </Input>
            </FormControl>

                    <FormControl isRequired="isRequired">
                        <FormLabel>Price</FormLabel>

                <Input
                onChange={(e)=> (setPrice(parseInt(e.target.value)))}
                >
                    
                </Input>
                <FormHelperText>IDR</FormHelperText>
            </FormControl>

                    <Button onClick={() => create()}>Submit</Button>
                </Stack>
            </Box>
        </div>
    )
}