import {Divider,Heading, FormControl, FormLabel, Input, FormHelperText, RadioGroup, HStack, Radio, LinkBox, Button} from "@chakra-ui/react";

export default function page() {
    return (
        <div>
            <Heading>Rate Our Event</Heading>
            <Divider></Divider>

            <FormControl as='fieldset' m={2}>
                <FormLabel as='legend'>
                    Rate
                </FormLabel>
                <RadioGroup defaultValue='Itachi'>
                    <HStack spacing='24px'>
                        <Radio value= "1">1</Radio>
                        <Radio value="2">2</Radio>
                        <Radio value="3">3</Radio>
                        <Radio value="4">4</Radio>
                        <Radio value="5">5</Radio>
                    </HStack>
                </RadioGroup>
                <FormHelperText>5= very good, 1 = very bad</FormHelperText>
            </FormControl>

            <FormControl m={2}>
                <FormLabel>Comment</FormLabel>
                <Input/>
                <FormHelperText>Thank you for your feedback.</FormHelperText>
            </FormControl>

            <Button>Submit</Button>

        </div>
    )
}