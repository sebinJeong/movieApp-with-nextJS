import styles from "../styles/movie-info.module.css";
import { BASE_API_URL, options } from "../app/(home)/page";

async function getMovieInfo(id: string) {
  const response = await fetch(`${BASE_API_URL}/${id}`, {
    ...options,
    cache: "force-cache",
  });
  const data = await response.json();
  return data;
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovieInfo(id);
  const backdropUrl = `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`;
  const posterUrl = `https://image.tmdb.org/t/p/w1280${movie.poster_path}`;
  return (
    <div className={styles.container}>
      {/* <img src={backdropUrl} alt={movie.title} /> */}
      <img
        src={posterUrl}
        alt={movie.title}
        className={styles.poster}
      />
      <div className={styles.info}>
        <h1>{movie.title}</h1>
        <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}
