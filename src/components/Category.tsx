import React from "react"
import {
    Box, 
    Link, 
    Stack, 
    Text,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Input,
}
from "@chakra-ui/react"
import NextLink from 'next/link'

export default function Category() {
    return (<Box ml={10}>
        <Stack 
        spacing={8}
        align="center"
        justify={["Left"]}
        direction={["column", "row", "row", "row"]}
        >
            <Text>Browsing Event</Text>

            <Accordion defaultIndex={[0]}>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                            <Input variant='outline' placeholder='Search'/>
                            </Box>
                            <AccordionIcon/>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    
                    </AccordionPanel>
                </AccordionItem>

            </Accordion>

      </Stack>

      <Stack 
      spacing={8}
      align="center"
      justify={["Left"]}
      direction={["column", "row", "row", "row"]}
     >
        <Link as={NextLink} href="./"> All </Link>
        <Link as={NextLink} href="./"> For You </Link>
        <Link as={NextLink} href="./"> Today </Link>
        <Link as={NextLink} href="./"> This Weekend </Link>
        <Link as={NextLink} href="./"> Music </Link>
        <Link as={NextLink} href="./"> Fashion </Link>
        <Link as={NextLink} href="./"> Games </Link>
        <Link as={NextLink} href="./"> Other </Link>


      </Stack>
        
      
    </Box>
  )
}