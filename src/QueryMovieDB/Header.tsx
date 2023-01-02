import React from "react";
import { useState } from "react";

function Header({
  setFindMovie,
}: {
  setFindMovie: React.Dispatch<React.SetStateAction<string>>;
}) {
  // read input value on onChange
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Check if input is empty
    if (searchTerm && searchTerm !== "") {
      setFindMovie(searchTerm);
      setSearchTerm("");
    }
  };

  return (
    <div className="bg-slate-500  pt-8 flex justify-around">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="bg-slate-300 px-2 py-1 rounded-2xl
          placeholder:text-gray-700  placeholder:italic  focus:bg-slate-400 focus:outline-none"
            type="text"
            id="search"
            placeholder="Search for a movie!"
            value={searchTerm}
            onChange={handleChange}
          />
          <button
            className="bg-orange-500 px-4 mx-2 py-1 rounded-2xl
          hover:bg-orange-400  focus:outline-none"
            type="submit"
          >
            Find
          </button>
        </div>
      </form>
    </div>
  );
}

export default Header;
