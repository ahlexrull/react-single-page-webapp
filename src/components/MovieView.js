import Hero from "./Hero";
import { useParams, redirect} from "react-router-dom";
import { useState, useEffect} from "react";

/**
 * Static page which talks about the purpose of the movie browser app.
 * @returns JSX React Element
 */

const MovieView = () => {
  const { id } = useParams();
  const [ movieDetails, setMovieDetails ] = useState({});
  const [ isLoading, setIsLoading ] = useState(true);

  const movieUrl = `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=fdf3223cfc4c7aaafcb5d11ebbcf3a98`

  useEffect(() => {
    console.log('Make an API request', id);
    fetch(movieUrl)
      .then((response) => response.json())
      .then(data => {
        setMovieDetails(data);
        setIsLoading(false);
      });
    }, [id])

  function renderMovieDetails() {
    if (isLoading) {
      return <Hero text="Loading..." />
    } else {
      // Todo: Handling for null poster path or null movie type
      const posterUrl = `https://image.tmdb.org/t/p`;
      const defaultPosterUrl=`https://media.comicbook.com/files/img/default-movie.png`
      return (
        <>
          <Hero text={movieDetails?.original_title} backdrop={`${posterUrl}/original${movieDetails.backdrop_path}`}/>
          < div className="container my-5">
            <div className="row">
              <div className="col-md-3">
                <img src={movieDetails.poster_path ? `${posterUrl}/w500${movieDetails.poster_path}` : defaultPosterUrl} className="img-fluid shadow rounded"/>
              </div>
              <div className="col-md-9">
                <h2>{movieDetails.original_title} {movieDetails.release_date? `(${movieDetails.release_date.slice(0,4)})` : ''}</h2>
                <p className="lead">{movieDetails.overview}</p>
              </div>
            </div>
          </div>
        </>
      )
    }
  }

  return renderMovieDetails();
};

export default MovieView;
