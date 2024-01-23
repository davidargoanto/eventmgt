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
    Text
} from '@chakra-ui/react'


export default function page() {
    
    return (
        <div>
            <Heading m={5}>
                Create Your Event</Heading>
            <Box m={5}>
            
                <Stack mt='6' spacing='10'>
            <Divider></Divider>
            <FormControl isRequired="isRequired">
                <FormLabel>Event Title</FormLabel>
                <Input placeholder="Title"/>
                <FormHelperText>Insert yout event title here</FormHelperText>
            </FormControl>

            <FormControl >
                <FormLabel>Description</FormLabel>
                <Input placeholder="Description"/>
                <FormHelperText>Insert yout event description here</FormHelperText>
            </FormControl>

            <FormControl isRequired="isRequired">
                <FormLabel>Select Date and Time</FormLabel>
                <Input placeholder="Select Date and Time" size="md" type="datetime-local"/>
                <FormHelperText>Insert yout event date and time here</FormHelperText>
            </FormControl>

            <FormControl isRequired="isRequired">
                <FormLabel>Location</FormLabel>
                <Input placeholder='Select country' type='city-local'/>

                <FormHelperText>Insert yout event location here</FormHelperText>
            </FormControl>

            <FormControl isRequired="isRequired">
                <FormLabel>Capacity</FormLabel>
                <NumberInput >
                    <NumberInputField/>
                    <NumberInputStepper>
                        <NumberIncrementStepper/>
                        <NumberDecrementStepper/>
                    </NumberInputStepper>
                </NumberInput>
            </FormControl>

            <FormControl isRequired="isRequired">
                <FormLabel>Price</FormLabel>

                <NumberInput>
                    <NumberInputField/>
                    <NumberInputStepper>
                        <NumberIncrementStepper/>
                        <NumberDecrementStepper/>
                    </NumberInputStepper>
                </NumberInput>
                <FormHelperText>IDR</FormHelperText>
            </FormControl>
            </Stack>
            </Box>
        </div>
    )
}