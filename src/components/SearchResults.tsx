import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";

import Card from "./UI/Card";
import { MoviesType } from "../types/types";
import { useState } from "react";
import Header from "./UI/Header";

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
      <Header />

      <h3>Results for: {keyword}</h3>
      <div className="cards-container">
        {data.results ? (
          data.results.map((movie: MoviesType) => (
            <Card key={movie.id} movie={movie} />
          ))
        ) : (
          <h3>No results found</h3>
        )}
      </div>

      <div className="pagination-container">
        <div
          onClick={() => {
            setCurrentPage(currentPage - 1);
          }}
          className="pagination-arrows"
        >
          <i className="fas fa-chevron-circle-left "></i>
        </div>

        <div className="pagination">
          <ul>
            {Array.from(Array(data.total_pages).keys())
              .slice(
                currentPage >= 5 ? currentPage - 3 : 0,
                currentPage >= 5 ? currentPage + 2 : 5
              )
              .map((page) => (
                <li
                  key={page}
                  onClick={() => {
                    setCurrentPage(page + 1);
                  }}
                  className={currentPage === page + 1 ? "active" : ""}
                >
                  {page + 1}
                </li>
              ))}
            {currentPage >= 5 && currentPage < data.total_pages - 1 && (
              <>
                <li
                  onClick={() => {
                    setCurrentPage(currentPage + 1);
                  }}
                >
                  {currentPage + 2}
                </li>
              </>
            )}
          </ul>
        </div>

        <div
          onClick={() => {
            setCurrentPage(currentPage + 1);
          }}
          className="pagination-arrows"
        >
          <i className="fas fa-chevron-circle-right "></i>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
