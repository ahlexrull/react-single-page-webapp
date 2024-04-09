import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import MovieView from "./components/MovieView";
import SearchView from "./components/SearchView";

// IMDB API KEY = fdf3223cfc4c7aaafcb5d11ebbcf3a98
// example link 'https://api.themoviedb.org/3/search/movie?api_key=fdf3223cfc4c7aaafcb5d11ebbcf3a98&query=star%20wars&include_adult=false&language=en-US&page=1'

/**
 * Main application function for Movie Browser
 * @returns JSX React
 */

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    // TODO: Move API Key 
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=fdf3223cfc4c7aaafcb5d11ebbcf3a98&query=${searchText}&include_adult=false&language=en-US&page=1`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.results); // TODO: potentially set this as an arraaaay? D: 
      });
  }, [searchText])

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/search" element={<SearchView keyword={searchText} searchResults={searchResults} />} />
        <Route path="/movies/:id" element={<MovieView />} />
      </Routes>
    </div>
  );
}

export default App;
