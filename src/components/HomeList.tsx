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
  if (isLoading)
    return (
      <div className="loader-container">
        <div className="loader" />
      </div>
    );
  return (
    <>
      <h2>Popular Movies</h2>

      <div className="cards-container">
        {data.results.map((movie: MoviesType) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>

      <div className="pagination-container">
        <div
          onClick={() => {
            window.scrollTo(0, 0);

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
                    window.scrollTo(0, 0);
                    setCurrentPage(page + 1);
                  }}
                  className={currentPage === page + 1 ? "active" : ""}
                >
                  {page + 1}
                </li>
              ))}
            {/* {currentPage >= 5 && currentPage < data.total_pages - 1 && (
              <>
                <li
                  onClick={() => {
            window.scrollTo(0, 0);

                    setCurrentPage(currentPage + 1);
                  }}
                >
                  {currentPage + 2}
                </li>
              </>
            )} */}
            {currentPage >= data.total_pages - 1 && (
              <li
                onClick={() => {
                  window.scrollTo(0, 0);

                  setCurrentPage(currentPage + 1);
                }}
              >
                {currentPage + 2}
              </li>
            )}
          </ul>
        </div>

        <div
          onClick={() => {
            window.scrollTo(0, 0);

            setCurrentPage(currentPage + 1);
          }}
          className="pagination-arrows"
        >
          <i className="fas fa-chevron-circle-right "></i>
        </div>
      </div>
    </>
  );
}

export default HomeList;
