import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import React from "react";

export default () => {
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

  const { movieid } = useParams();
  const [movie, setMovie] = React.useState({
    title: "",
    overview: "",
    poster_path: "",
    budget: 0,
    revenue: 0,
    release_date: "",
    original_language: "",
    status: "",
    production_companies: [],
    genres: [],
    vote_average: 0,
  });

  // format money
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  // query movie
  const API_URI = `https://api.themoviedb.org/3/movie/${movieid}?api_key=${
    import.meta.env.VITE_MOVIEDB_API_KEY
  }`;

  // render data
  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(API_URI);
      const data = await response.json();
      setMovie(data);
      console.log(data);
    };
    fetchMovie();
  }, []);

  return (
    <div className="bg-slate-500 flex p-6 flex-wrap gap-2 justify-center w-full">
      <div className="bg-slate-800 flex p-6 flex-wrap gap-2 justify-center w-1/2">
        <Link
          to="/"
          className="flex justify-start w-full 
        "
        >
          <i
            className="fas fa-arrow-left text-slate-400 text-xl font-bold cursor-pointer 
          "
          ></i>
        </Link>
        <div className="grid grid-cols-6 gap-4 max-w-2xl">
          {/* Card Head */}
          <div className="col-span-2">
            <img src={`${IMG_PATH + movie.poster_path}`} alt={movie.title} />
          </div>
          <div className="col-span-4">
            <h2 className="text-white text-2xl font-bold  ">{movie.title}</h2>
            <p className="text-white text-md ">{movie.overview}</p>
          </div>
          {/* Card Content */}
          <div className="col-span-3 text-white">
            <p>
              <i className="fas fa-star text-yellow-400 pr-2"></i>
              <strong>Vote Avarage: </strong>
              {Math.round(movie.vote_average * 10) / 10}
            </p>
            <p>
              {" "}
              <i className="fas fa-check text-green-400 pr-2"></i>
              <strong>Status:</strong> {movie.status}{" "}
            </p>
            <p>
              {" "}
              <i className="fas fa-dollar-sign text-red-400 pr-2"></i>
              <strong>Budget:</strong> {formatter.format(movie.budget)}
            </p>

            <p>
              {" "}
              <i className="fas fa-dollar-sign text-green-400 pr-2"></i>
              <strong>Revenue:</strong> {formatter.format(movie.revenue)}
            </p>
          </div>
          <div className="col-span-3 text-white">
            <p>
              {" "}
              <i className="fas fa-calendar-alt text-blue-400 pr-2"></i>
              <strong>Release Date:</strong> {movie.release_date}
            </p>

            <p>
              {" "}
              <i className="fas fa-film text-yellow-400 pr-2"></i>
              <strong>Genre:</strong>{" "}
              {movie.genres?.map((genre: any) => genre.name).join(", ")}
            </p>
            <p>
              {" "}
              <i className="fas fa-lightbulb text-yellow-400 pr-2"></i>
              <strong> Studio: </strong>
              {movie.production_companies
                ?.map((companie: any) => companie.name)
                .join(", ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
