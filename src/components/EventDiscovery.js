import {
    Box,
    Flex,
    Grid,
    Card,
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
    Link
    
} from "@chakra-ui/react"
import { BsBodyText } from "react-icons/bs"

export default function EventDiscovery(params) {
    const {title, body, id} = params
    return (
        <>  
            <Card maxW='sm' >
                <CardBody >
                    <Image
                        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'/>
                    <Stack mt='6' spacing='3'>
                        <Heading m={1} size='md'>{title}</Heading>
                        <Text>
                           {body}
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                           Price: {id}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider/>
                <CardFooter>
                    
                    <ButtonGroup spacing='2'>
                        
                        <Button variant='solid' colorScheme='blue'>
                            Check Event
                        </Button>
                    </ButtonGroup>
                    
                </CardFooter>
            </Card>

     
</>
    )

}