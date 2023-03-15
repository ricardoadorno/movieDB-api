import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";

import Card from "./UI/Card";
import { MoviesType } from "../types/types";
import SeachBox from "./UI/SeachBox";
import { useState } from "react";

function SearchResults() {
  const { keyword } = useParams();

  const [currentPage, setCurrentPage] = useState(1);

  const fetchFindMovie = async () => {
    const SEARCH_URI = `https://api.themoviedb.org/3/search/movie?api_key=${
      import.meta.env.VITE_MOVIEDB_API_KEY
    }&query=${keyword}&page=${currentPage}
    "`;
    const res = await fetch(SEARCH_URI);
    return res.json();
  };

  const { isLoading, error, data } = useQuery(
    ["fetchFindMovie", keyword, currentPage],
    () => fetchFindMovie(),
    { cacheTime: 0 }
  );

  if (error) return <div>Error fetching data</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="container">
      <nav>
        <Link to="/">
          <h1>MovieDB</h1>
        </Link>

        <h1>Search Results</h1>
      </nav>
      <div>
        <SeachBox />
      </div>
      <div>
        <h3>Results for: {keyword}</h3>
      </div>
      <div>
        {data.results ? (
          data.results.map((movie: MoviesType) => (
            <Card key={movie.id} movie={movie} />
          ))
        ) : (
          <h3>No results found</h3>
        )}
      </div>
      {data.total_pages > 1 && (
        <nav className="pagination">
          <ul>
            <li
              className="pagination_item"
              onClick={() => {
                setCurrentPage(currentPage - 1);
              }}
            >
              Prev
            </li>

            <li
              className="pagination_item"
              onClick={() => {
                setCurrentPage(currentPage + 1);
              }}
            >
              Next
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default SearchResults;
