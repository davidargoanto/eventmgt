import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Logo from '@/components/Logo'
import Menu from '@/components/Menu'

export default function Home() {
    return (
        <ChakraProvider>
            <div>   
                <Hero></Hero>
            </div>
        </ChakraProvider>
    )
}
