import HomeBanner from "./HomeBanner"
import EventDiscovery from "./EventDiscovery"
import { Stack, HStack, VStack, Box, Divider } from "@chakra-ui/react"
import Footer from "./PageFooter"


export default function Hero() {
    return (
        <div>
            <Stack>
                <Box>
                    <HomeBanner></HomeBanner>
                    <Divider marginLeft='-moz-initial'></Divider>
                    <Footer></Footer>
                    
                </Box>
            </Stack>
        </div>
    )

}