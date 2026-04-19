import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie }) {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/movie/${movie.id}`)}>
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
        alt={movie.Title}
        onError={(e) => {
          e.target.src = "/no-image.png";
        }}
      />
      <h4>{movie.Title}</h4>
      <p>{movie.Year}</p>
    </div>
  );
}
