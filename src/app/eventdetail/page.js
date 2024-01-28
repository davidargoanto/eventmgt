"use client"
import {
    Flex,
    Box,
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
import {useQuery, useIsFetching, useMutation} from "@tanstack/react-query"
import {getdataone} from '../../../api/oneevent';
import Image from 'next/image';
import { useState } from 'react';

export default function stats() {
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
          router.push("http://localhost:5670/api/event/transaction/payment");
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

    const myData = {}
    const {
        data = myData,
        isError,
        isSuccess,
        isLoading
    } = useQuery({queryKey: ["data"], queryFn: getdataone});
    if (isLoading) {

        return <h3>
            Loading ...
        </h3>;
    }
    if (isSuccess) {
        console.log(data)
        return (
            
            <Card maxW='sm'>
                <CardBody >
                    
                    <Stack mt='6' spacing='3'>
                        <Heading m={1} size='md'>{data.data.title}</Heading>
                        <Text>
                            {data.data.description}
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            Price: IDR {data.data.price}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider/>
                <CardFooter>

                    <ButtonGroup spacing='2'>

                        <Button
                            variant='solid'
                            colorScheme='blue'
                            onClick={() => create()}>
                            Buy Ticket
                        </Button>
                    </ButtonGroup>

                </CardFooter>
            </Card>
        )
    }
    if (isError) {

        return <h3>
            Data does not exist
        </h3>;
    }
}