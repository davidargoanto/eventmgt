import Image from "next/image";
import { getEvent } from "../../utils/eventdetail";
import { Heading } from "@chakra-ui/react";
import EventDetail from "../../../components/EventDetail";


// static metadata
// export const metadata = {
//   title: "Yudhistira Media - Blog List ",
//   description: "Yudhistira Media channel",
// };

// dynamic metadata
export async function generateMetadata({ params }, parent) {
  const id = params.id;

  const eventDetail = await getEvent(id);

  return {
    title: eventDetail?.title ,
    description: eventDetail?.title,
  };
}

export default async function Page({ params }) {
  const image = "";

  const { id } = params;
  const eventDetail = await getEvent(id);

  console.log(eventDetail);

  return (
    <div>
        <h1> Title {eventDetail.title} </h1>
        <EventDetail
        title={eventDetail.title}
        body={eventDetail.body}
        id={eventDetail.id}

        >
        </EventDetail>
    </div>
  );
}
