import { Link, useParams } from "react-router-dom";
import ISO6391 from "iso-639-1";
import {
  FaCalendarAlt,
  FaCheck,
  FaClock,
  FaDollarSign,
  FaLanguage,
  FaStar,
  FaUserFriends,
} from "react-icons/fa";
import { BsMegaphoneFill } from "react-icons/bs";

import { useQuery } from "react-query";

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

function MovieDetails() {
  const { movieid } = useParams();

  const formatDollarAmount = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  const formatDate = (date: string) => {
    const newDate = new Date(date);
    const month = newDate.getMonth() + 1;
    const day = newDate.getDate();
    const year = newDate.getFullYear();

    if (month < 10 && day < 10) {
      return `0${month}/0${day}/${year}`;
    }

    if (month < 10) {
      return `0${month}/${day}/${year}`;
    }

    if (day < 10) {
      return `${month}/0${day}/${year}`;
    }

    return `${month}/${day}/${year}`;
  };

  const fetchMovie = async () => {
    const API_URI = `https://api.themoviedb.org/3/movie/${movieid}?api_key=${
      import.meta.env.VITE_MOVIEDB_API_KEY
    }&append_to_response=similar,credits`;
    const res = await fetch(API_URI);
    return res.json();
  };

  const { isLoading, error, data } = useQuery(
    "fetchMovie",
    () => fetchMovie(),
    { cacheTime: 0 }
  );

  if (error) return <div>Error fetching data</div>;
  if (isLoading)
    return (
      <div className="loader_container">
        <div className="loader" />
      </div>
    );

  return (
    <div className="movie__details">
      <div className="movie__details-container">
        <div className="content-container">
          <Link to="/">
            <i className="fas fa-arrow-left"></i>
          </Link>
          <h1>{data.title}</h1>
          <p>{data.overview}</p>

          <div className="movie__details-info">
            <span>
              <FaCheck /> Status: {data.status}
            </span>

            <span>
              <FaCalendarAlt /> Release Date: {formatDate(data.release_date)}
            </span>
            <span>
              <FaClock /> Runtime: {data.runtime} min
            </span>
            <span>
              <FaStar style={{ color: "gold" }} /> Score:{" "}
              {data.vote_average.toFixed(1)}
            </span>
            <span>
              <FaLanguage /> Language: {ISO6391.getName(data.original_language)}
            </span>
            <span>
              <FaDollarSign style={{ color: "lightgreen" }} /> Revenue:{" "}
              {formatDollarAmount(data.revenue)}
            </span>

            <span>
              {" "}
              <FaDollarSign style={{ color: "lightsalmon" }} /> Budget:{" "}
              {formatDollarAmount(data.budget)}
            </span>
            <span>
              <FaUserFriends /> Cast:{" "}
              {data.credits.cast.slice(0, 4).map((cast: any) => {
                if (cast === data.credits.cast.slice(0, 4)[3]) {
                  return <span key={cast.id}>{cast.name}</span>;
                } else {
                  return <span key={cast.id}>{cast.name}, </span>;
                }
              })}
            </span>
            <span>
              <BsMegaphoneFill /> Director:{" "}
              {data.credits.crew.map((crew: any) => {
                if (crew.job === "Director") {
                  return <span key={crew.id}>{crew.name} </span>;
                }
              })}
            </span>
          </div>

          <div className="movie__details-genres">
            {data.genres.map((genre: any) => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </div>
        </div>
        <img
          src={`
        ${IMG_PATH + data.poster_path}
      `}
          alt="poster"
        />
      </div>
      {data.similar.results.length > 0 && (
        <div className="similar__movies">
          <h2>Similar Movies</h2>
          <div className="similar__movies-container">
            {data.similar.results.splice(0, 5).map((movie: any) => (
              <div className="similar__movie" key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                  <img src={` ${IMG_PATH + movie.poster_path}`} alt="poster" />
                  <h3>{movie.title}</h3>
                  <p>
                    {movie.overview.length > 100
                      ? movie.overview.slice(0, 100) + "..."
                      : movie.overview}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
