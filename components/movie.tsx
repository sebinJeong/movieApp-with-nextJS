import Link from "next/link";

interface IMovieProps {
    title: string,
    id: string,
    poster_path: string,
}

export default function Movie({title, id, poster_path}: IMovieProps) {
  return (
    <div>
      <Link href={`/movies/${id}`}>
        <img
          src={poster_path}
          alt={title}
          style={{ width: "100px" }}
        />
        <h3>{title}</h3>
      </Link>
    </div>
  );
}
