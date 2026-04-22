import { Suspense } from "react";
import { API_URL } from "../../../(home)/page";
import MovieVideos from "../../../../components/movie-videos";
import MovieInfo from "../../../../components/movie-info";

export default async function MovieDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <h3>Movie Detail Page</h3>
      <Suspense fallback={<h1>Loading movie info</h1>} >
        <MovieInfo id={id}/>
      </Suspense>
       <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id}/>
      </Suspense>
    </div>
  );
}
