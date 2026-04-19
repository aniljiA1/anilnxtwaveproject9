import { useEffect, useState } from "react";
import { fetchMovies } from "../services/api";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchMovies("avengers", page).then((res) =>
      setMovies(res.data.Search || []),
    );
  }, [page]);

  return (
    <div>
      <div className="grid">
        {movies.map((m) => (
          <MovieCard key={m.imdbID} movie={m} />
        ))}
      </div>

      <Pagination page={page} setPage={setPage} />
    </div>
  );
}
