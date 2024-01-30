import React from "react"
import { Flex, Center, Image, Box} from "@chakra-ui/react"

export default function HomeBanner() {
    return (
        <Flex m={2} color='white'>

            <Box flex='1' boxSize='auto'  >
                <Image
                    
                    src='https://cdn.evbstatic.com/s3-build/fe/build/images/a975512af1947892ab2203b54ef5ca63-2_tablet_1067x470.webp'
                    alt='Banner'/>
            </Box>
        </Flex>
    )
}