import { Link, useParams } from "react-router-dom";

import { useQuery } from "react-query";
import { useState } from "react";

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
  if (isLoading) return <div>Loading...</div>;

  return (
    <article
      className="grid "
      style={{
        margin: "4rem auto",
        maxWidth: "1000px",
      }}
    >
      <img
        src={`
        ${IMG_PATH + data.poster_path}
      `}
        alt="poster"
        style={{
          width: "90%",
          margin: "0 auto",
        }}
      />
      <div>
        <Link to="/">
          <i className="fas fa-arrow-left"></i>
        </Link>
        <h1>{data.title}</h1>
        <p>{data.overview}</p>
      </div>
    </article>
  );
}

export default MovieDetails;
