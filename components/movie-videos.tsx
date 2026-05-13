import { error } from "node:console";
import { BASE_API_URL, options } from "../app/(home)/page";

async function getVideos(id: string) {
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(`${BASE_API_URL}/${id}/videos`,options);
  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
