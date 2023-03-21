import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import SearchResults from "./components/SearchResults";

// Create a client
const queryClient = new QueryClient();

export default function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:movieid" element={<MovieDetails />} />
          <Route path="/search/:keyword" element={<SearchResults />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}
