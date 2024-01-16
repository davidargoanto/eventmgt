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
    ButtonGroup
} from "@chakra-ui/react"

export default function EventDiscovery() {
    return (
        <> 
        < Box m = {2} > 
        <Grid templateColumns='repeat(4, 1fr)' gap={6}>
            {/* event list 1 */}
            <Card maxW='sm'>
                <CardBody>
                    <Image
                        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'/>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Living room Sofa</Heading>
                        <Text>
                            This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy
                            toned spaces and for people who love a chic design with a sprinkle of vintage
                            design.
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            Jakarta
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

           {/* event list 2 */}
           <Card maxW='sm'>
                <CardBody>
                    <Image
                        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'/>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Living room Sofa</Heading>
                        <Text>
                            This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy
                            toned spaces and for people who love a chic design with a sprinkle of vintage
                            design.
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            Surabaya
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

            {/* event list 3 */}
            <Card maxW='sm'>
                <CardBody>
                    <Image
                        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'/>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Living room Sofa</Heading>
                        <Text>
                            This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy
                            toned spaces and for people who love a chic design with a sprinkle of vintage
                            design.
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            Medan
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

            {/* event list 4 */}
            <Card maxW='sm'>
                <CardBody>
                    <Image
                        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'/>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Living room Sofa</Heading>
                        <Text>
                            This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy
                            toned spaces and for people who love a chic design with a sprinkle of vintage
                            design.
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            Sulawesi
                        </Text>
                    </Stack>
                </CardBody>
                <Divider/>
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button  variant='solid' colorScheme='blue'>
                            Check Event
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </Grid>
    </Box>
</>
    )

}