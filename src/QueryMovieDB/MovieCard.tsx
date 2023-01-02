import React from "react";
import { Link } from "react-router-dom";

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

function MovieCard({ title, poster, rating, overview, id }: any) {
  //   Rating Color
  const handleRatingColor = (rating: any) => {
    if (rating >= 8) {
      return "lightgreen";
    } else if (rating >= 6) {
      return "gold";
    } else {
      return "lightcoral";
    }
  };

  return (
    <div className="inline-block w-72 mt-6 group bg-blue-800 drop-shadow rounded-xl">
      <div className="p-3">
        <Link to={`movie/${id}`}>
          <img
            className="rounded-lg"
            src={`${IMG_PATH + poster}`}
            alt={title + "poster"}
          />
        </Link>
        <div className="text-white flex align-middle justify-between p-1 tracking-wide ">
          <Link to={`movie/${id}`}>
            <h3 className="mt-0">{title}</h3>
          </Link>

          <span
            className="text-sm font-bold rounded-full p-1"
            style={{ color: `${handleRatingColor(rating)}` }}
          >
            {rating}
          </span>
        </div>

        <div className="bg-white p-2 m-1 text-sm rounded-lg ">
          <h3 className="text-orange-600 font-bold py-2">Overview</h3>
          {overview}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
