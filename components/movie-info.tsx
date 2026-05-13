import { BASE_API_URL, options } from "../app/(home)/page";

async function getMovieInfo(id: string) {
  const response = await fetch(`${BASE_API_URL}/${id}`, options);
  const data = await response.json();
  return data;
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovieInfo(id);
  const backdropUrl = `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`;
  return <div>
    <img src={backdropUrl} alt={movie.title}/>
    <h3>{movie.title}</h3>
    <p>{movie.overview}</p>
    </div>;
}
