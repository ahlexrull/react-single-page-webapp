import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";

/**
 * Static page which talks about the purpose of the movie browser app.
 * @returns JSX React Element
 */

const MovieView = () => {
  const { id } = useParams();
  const movieUrl = `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=fdf3223cfc4c7aaafcb5d11ebbcf3a98`

  const [ movieDetails, setMovieDetails ] = useState({});
  
  useEffect(() => {
    console.log('Make an API request', id);
    fetch(movieUrl)
      .then((response) => response.json())
      .then(data => {
        setMovieDetails(data)
    });
  }, [id])

  return (
    <>
      <Hero text={movieDetails?.original_title} />
    </>
  );
};

export default MovieView;
