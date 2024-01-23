import { cache } from "react";

export const revalidate = 10;

export const getEvent = cache(async (id) => {
  const item = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return item.json();
});
