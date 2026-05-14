"use client"

import Link from "next/link";
import styles from "../styles/movie.module.css";
import { useRouter } from "next/navigation";

interface IMovieProps {
  title: string;
  id: string;
  poster_path: string;
}

export default function Movie({
  title,
  id,
  poster_path,
}: IMovieProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`);
  };
  return (
    <div className={styles.movie}>
      <img
        src={poster_path}
        alt={title}
        style={{ width: "170px" }}
        onClick={onClick}
      />
      <Link href={`/movies/${id}`}>
        <h3>{title}</h3>
      </Link>
    </div>
  );
}
