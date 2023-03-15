import { useQuery } from "react-query";
import Card from "./UI/Card";

import { MoviesType } from "../types/types";
import { useState } from "react";

function HomeList() {
  const [currentPage, setCurrentPage] = useState(1);

  const fetchTitles = async () => {
    const API_URI = `https://api.themoviedb.org/3/movie/popular?api_key=${
      import.meta.env.VITE_MOVIEDB_API_KEY
    }&language=en-US&page=${currentPage}`;
    const res = await fetch(API_URI);
    return res.json();
  };

  const { isLoading, error, data } = useQuery(
    ["fetchMoviesType", currentPage],
    () => fetchTitles()
  );

  if (error) return <div>Error fetching data</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <h2>Popular Movies</h2>

      <div className="cards-container">
        {data.results.map((movie: MoviesType) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
      <nav className="pagination">
        <ul>
          <li
            onClick={() => {
              console.log(currentPage);
              setCurrentPage(currentPage - 1);
            }}
          >
            Prev
          </li>

          <li
            onClick={() => {
              console.log(currentPage);

              setCurrentPage(currentPage + 1);
            }}
          >
            Next
          </li>
        </ul>
      </nav>
    </>
  );
}

export default HomeList;
