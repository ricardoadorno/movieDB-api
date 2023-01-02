import { QueryClient, QueryClientProvider } from "react-query";
import Catalog from "./Catalog";
import Header from "./Header";
import React from "react";
import Pagination from "./Pagination";

const queryClient = new QueryClient();

export default () => {
  const [findMovie, setFindMovie] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <QueryClientProvider client={queryClient}>
      <Header setFindMovie={setFindMovie} />

      <Catalog findMovie={findMovie} currentPage={currentPage} />
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </QueryClientProvider>
  );
};
