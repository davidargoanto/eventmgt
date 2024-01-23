import {
    Stack,
    Input,
    Box,
    Divider,
    HStack,
    Flex,
    Link
}
from "@chakra-ui/react"
import Logo from "./Logo"
import Menu from "./Menu"

export default function Navbar() {
    return (
        
            <Box>
            <HStack
                align='center'
                m={2}
                spacing={8}
                justify={["center","space-between", "flex-end", "flex-end" ]}
                direction={["column", "row", "row", "row"]}
                pt={[4, 4, 0, 0]}>  
                <Flex
                
                >

                <Link href="./" > Logo </Link>
                <Input variant='outline' placeholder='Search'/>
                <Menu></Menu>

                </Flex>
            </HStack>
            </Box>
        
    )

}