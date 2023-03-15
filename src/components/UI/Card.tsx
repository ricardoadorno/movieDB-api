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
  return (
    <article className="card">
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

        <div className="card_rating">
          <div style={{ color: `${handleRatingColor(movie.vote_average)}` }}>
            {movie.vote_average}
          </div>
          <i className="fas fa-star card_rating-icon"></i>
        </div>
      </div>
      <p>{movie.overview}</p>
    </article>
  );
}

export default Card;
