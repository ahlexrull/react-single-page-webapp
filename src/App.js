import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import SearchView from './components/SearchView';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  // console.log(`${searchText} is the default text`);
  // setTimeout(() => {
  //   setSearchText("New Text");
  //   console.log(`${searchText} is the new text`);
  // }, 2000);


  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/search" element={<SearchView keyword={searchText} searchResults={searchResults} />} />
      </Routes>
    </div>
  );
}

export default App;
  