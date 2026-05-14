import { error } from "node:console";
import { BASE_API_URL, options } from "../app/(home)/page";
import styles from "../styles/movie-video.module.css"

async function getVideos(id: string) {
  const response = await fetch(`${BASE_API_URL}/${id}/videos`, {
    ...options,
    cache: "force-cache",
  });
  const data = await response.json();
  return data.results;
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div className={styles.container} >
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          title={video.name}
        />
      ))}
    </div>
  );
}
