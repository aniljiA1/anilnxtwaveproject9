import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../services/api";

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(id).then((res) => setMovie(res.data));
  }, [id]);

  if (!movie) return <h2>Loading...</h2>;

  return (
    <div className="detail">
      <img src={movie.Poster} alt={movie.Title} />

      <div>
        <h2>{movie.Title}</h2>
        <p>{movie.Plot}</p>
        <p>Year: {movie.Year}</p>
        <p>Rating: {movie.imdbRating}</p>
      </div>
    </div>
  );
}
