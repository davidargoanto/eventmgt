import {
    Stack,
    Input,
    Box,
    Divider
}
from "@chakra-ui/react"
import Logo from "./Logo"
import Menu from "./Menu"

export default function Navbar() {
    return (
        
            <Box   boxSize='auto'>
            <Stack
                align='stretch'
                m={2}
                spacing={8}
                justify={["center", "space-between", "flex-end", "end"]}
                direction={["column", "row", "row", "row"]}
                pt={[4, 4, 0, 0]}>
                <Logo></Logo>
                
                    <Input variant='outline' placeholder='Search'/>
                    
                
                <Menu></Menu>
                <Divider></Divider>
            </Stack>
            </Box>
        
    )

}