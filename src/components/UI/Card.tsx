import { Link } from "react-router-dom";
import { MoviesType } from "../../types/types";

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const handleRatingColor = (rating: any) => {
  if (rating >= 8) {
    return "lightgreen";
  } else if (rating >= 6) {
    return "gold";
  } else {
    return "lightcoral";
  }
};

function Card({ movie }: { movie: MoviesType }) {
  if (!movie.poster_path) return null;
  return (
    <div className="card">
      <Link className="link" to={`/movie/${movie.id}`}>
        <img
          src={`
        ${IMG_PATH + movie.poster_path}
      `}
          alt="Card"
        />
      </Link>

      <div className="card_header">
        <Link className="link" to={`/movie/${movie.id}`}>
          {movie.title}
        </Link>

        <div className="card_rating-container">
          <div
            className="card_rating-number"
            style={{ color: `${handleRatingColor(movie.vote_average)}` }}
          >
            {movie.vote_average.toFixed(1)}
          </div>
          <i className="fas fa-star card_rating-icon"></i>
        </div>
      </div>
      <p>{movie.overview}</p>
    </div>
  );
}

export default Card;
