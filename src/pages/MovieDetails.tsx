import { Link, useParams } from "react-router-dom";

import { useQuery } from "react-query";

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

function MovieDetails() {
  const { movieid } = useParams();

  const fetchMovie = async () => {
    const API_URI = `https://api.themoviedb.org/3/movie/${movieid}?api_key=${
      import.meta.env.VITE_MOVIEDB_API_KEY
    }&language=en-US`;
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
    <div className="movie_details">
      <div className="movie_details-container">
        <div className="content-container">
          <Link to="/">
            <i className="fas fa-arrow-left"></i>
          </Link>
          <h1>{data.title}</h1>
          <p>{data.overview}</p>
        </div>
        <img
          src={`
        ${IMG_PATH + data.poster_path}
      `}
          alt="poster"
        />
      </div>
    </div>
  );
}

export default MovieDetails;
