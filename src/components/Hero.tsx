import HomeBanner from "./HomeBanner"
import EventDiscovery from "./EventDiscovery"
import { Stack, HStack, VStack, Box, Divider } from "@chakra-ui/react"
import Category from "./Category"

export default function Hero() {
    return (
        <div>
            <Stack>
                <Box>
                    <HomeBanner></HomeBanner>
                    <Divider marginLeft='-moz-initial'></Divider>
                    <Category></Category>
                    <Divider marginLeft='-moz-initial'></Divider>
                    <EventDiscovery></EventDiscovery>
                </Box>
            </Stack>
        </div>
    )

}