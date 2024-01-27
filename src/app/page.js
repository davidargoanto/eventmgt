"use client"
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Logo from '@/components/Logo'
import Menu from '@/components/Menu'

import { productUser} from '../../api/auth'
import {useQuery, useIsFetching} from "@tanstack/react-query"


export default function Home() {
    if (typeof window !== 'undefined') {
        // Perform localStorage action
        sessionStorage.setItem("userID", 0)
      }
    const myData = [];
    const {
      data = myData,
      isError,
      isSuccess,
      isLoading,
    } = useQuery({
        queryKey : ["posts"],
        queryFn : productUser()
    })
    
    if (isLoading) {

        return <h3> Loading ... </h3>;
    }
    if (isSuccess) {
        console.log(JSON.stringify(data))
        return (
            <ChakraProvider>
                <div>   
                    <Hero></Hero>
                </div>
            </ChakraProvider>
        )
    }
    if (isError) {
        console.log(data)
        return (
        <ChakraProvider>
            <div>   
            <h3>Error ... {data}</h3>
                <Hero></Hero>
            </div>
        </ChakraProvider>
            
);
        
    }



}
