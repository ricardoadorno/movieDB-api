import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
import { useQuery } from "react-query";

function Catalog({
  findMovie,
  currentPage,
}: {
  findMovie: string;
  currentPage: number;
}) {
  const API_URI = `https://api.themoviedb.org/3/movie/popular?api_key=${
    import.meta.env.VITE_MOVIEDB_API_KEY
  }&language=en-US&page=${currentPage}`;

  const SEARCH_URI = `https://api.themoviedb.org/3/search/movie?api_key=${
    import.meta.env.VITE_MOVIEDB_API_KEY
  }&query=${findMovie}"`;

  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    fetch(API_URI)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        console.log(data.results);
      });
  }, [currentPage]);

  React.useEffect(() => {
    if (findMovie && findMovie !== "") {
      fetch(SEARCH_URI)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
        });
    }
  }, [findMovie]);

  return (
    <div className="bg-slate-800 mt-6 pt-3  pb-20 px-3 xl:px-0 overflow-hidden">
      <h2 className="text-2xl text-white font-bold  text-center text-title-1 md:mb-4">
        Click on the movies to learn more!
      </h2>

      <div className="w-full lg:columns-4 sm:columns-1 xl:ml-4 ">
        {movies.map((movie: any) => {
          return (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster={movie.poster_path}
              rating={movie.vote_average}
              overview={movie.overview}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Catalog;
