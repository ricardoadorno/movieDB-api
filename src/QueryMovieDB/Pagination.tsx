import React from "react";

function Pagination({ currentPage, setCurrentPage }: any) {
  return (
    <div className="bg-slate-800 flex justify-center gap-2 pb-5">
      <button
        className={`text-white px-4 py-2 rounded-md ${
          currentPage === 1 ? "text-gray-400 cursor-not-allowed" : ""
        }`}
        onClick={() => {
          currentPage !== 1 && setCurrentPage(currentPage - 1);
        }}
      >
        Previous
      </button>
      <button
        className={`text-white px-4 py-2 rounded-md ${
          currentPage === 1 ? "bg-orange-500" : "bg-transparent"
        }`}
        onClick={() => {
          setCurrentPage(1);
        }}
      >
        1
      </button>
      <button
        className={`text-white px-4 py-2 rounded-md ${
          currentPage === 2 ? "bg-orange-500" : "bg-transparent"
        }`}
        onClick={() => {
          setCurrentPage(2);
        }}
      >
        2
      </button>
      <button
        className={`text-white px-4 py-2 rounded-md ${
          currentPage === 3 ? "bg-orange-500" : "bg-transparent"
        }`}
        onClick={() => {
          setCurrentPage(3);
        }}
      >
        3
      </button>
      <button
        className={`text-white px-4 py-2 rounded-md ${
          currentPage === 3 ? "text-gray-400 cursor-not-allowed" : ""
        }`}
        onClick={() => {
          currentPage !== 3 && setCurrentPage(currentPage + 1);
        }}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
