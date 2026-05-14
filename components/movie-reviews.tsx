import { BASE_API_URL, options } from "../app/(home)/page";

async function getMovieReviews(id: string) {
  const response = await fetch(
    `${BASE_API_URL}/${id}/reviews`,
    options,
  );
  const data = await response.json();
  return data.results;
}

export default async function MovieReviews({ id }: { id: string }) {
  const reviews = await getMovieReviews(id);
  return (
    <div>
      {reviews.map((review) => {
        return (
          <div key={review.id}>
            <ul style={{fontSize:"10px"}}>
              <li>{review.author_details["rating"]}</li>
              <li>{review.content}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
