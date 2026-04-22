import Link from "next/link";

//server component
export const metadata = {
  title: "Home",
};
export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  //백엔드의 응답을 기다릴때까지 react를 멈추는 것
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}
