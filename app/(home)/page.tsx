import Link from "next/link";

//server component
export const metadata = {
  title: "Home",
};
export const API_URL =
  "https://api.themoviedb.org/3/movie/popular?language=ko-kr&page=1";
// "https://nomad-movies.nomadcoders.workers.dev/movies";
export const BASE_API_URL = "https://api.themoviedb.org/3/movie";
export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
  },
};

async function getMovies() {
  //백엔드의 응답을 기다릴때까지 react를 멈추는 것
  const response = await fetch(API_URL, options);
  const data = await response.json();
  return data.results;
}

export default async function HomePage() {
  const movies = await getMovies();

  return (
    <div>
      {movies.map((movie) => {
        const imgURL =
          "https://image.tmdb.org/t/p/w500" + movie["poster_path"];

        return (
          <div key={movie.id}>
            <Link href={`/movies/${movie.id}`}>
              <img
                src={imgURL}
                alt={movie.title}
                style={{ width: "100px" }}
              />
              <h3>{movie.title}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
