import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchMovies } from "../services/api";
import MovieCard from "../components/MovieCard";

export default function Search() {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies(query)
      .then((res) => {
        setMovies(res.data.Search || []);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [query]);

  return (
    <div>
      <h2>Results for: {query}</h2>

      <div className="grid">
        {movies.length > 0 ? (
          movies.map((m) => <MovieCard key={m.imdbID} movie={m} />)
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
}
