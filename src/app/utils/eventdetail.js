import { cache } from "react";

export const revalidate = 10;

export const getEvent = cache(async (id) => {
  const item = await fetch(`http://localhost:5670/api/event/getone${id}`
  );
  return item.json();
});
