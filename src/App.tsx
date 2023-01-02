import React from "react";
import QueryMovieDB from "./QueryMovieDB";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MoviePage from "./MoviePage";

// TODO fix search
// TODO do the movie page style

// TODO add user fetch queary
// TODO add redux for user

function App() {
  return (
    <Router>
      <nav className="bg-slate-800 p-8  ">
        <Link to="/">
          <div className=" flex gap-4 col-span-3 justify-center">
            <i className="fas fa-film text-white text-xl rotate-45"></i>
            <h1 className="text-white text-2xl font-bold">MovieDB</h1>
          </div>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<QueryMovieDB />} />
        <Route path="/movie/:movieid" element={<MoviePage />} />
      </Routes>
    </Router>
  );
}

export default App;
