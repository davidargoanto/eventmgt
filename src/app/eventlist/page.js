'use client'

import Link from "next/link";
import { CardBody, Heading } from "@chakra-ui/react";
import useSWR from "swr";
import EventDiscovery from './../../components/EventDiscovery'
import { Box,Grid } from "@chakra-ui/react";
import  {useState } from "react";

export default function Page() {
    const [cnt, setCnt] = useState(1)
 
  const pages = []
  for (let i = 0; i < cnt; i++) {
    pages.push(<Page index={i} key={i} />)
  }
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "http://localhost:3000/api/eventlist",
    //`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=post`,
    fetcher
  );

  if (error) {
    return <div> Failed to Load</div>;
  }

  if (isLoading) {
    return <div> Loading from SWR ... </div>;
  }
  
  return (
    <div>
        <Heading m={10}> Event For You </Heading>
        < Box m = {2} > 
        
        <Grid templateColumns='repeat(4, 1fr)' gap={6}>
        {data?.eventlist?.map((eventlist, index) => {
            return(
                <div>
                
               <Link href='./eventlist/'>
                <EventDiscovery
                    title={eventlist.title}
                    body={eventlist.body}
                    id={eventlist.id}
                    
                ></EventDiscovery>
                </Link>
                </div>
            );
        })}
        
        </Grid>
        </Box>
        <button onClick={() => setCnt(cnt + 1)}>Load More</button>
   </div>
  );
    }