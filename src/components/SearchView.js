import Hero from "./Hero";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`; // TODO: Move to constants file.
    const defaultPosterUrl=`https://media.comicbook.com/files/img/default-movie.png`
    const detailUrl = `/movies/${movie.id}`;
    
    return (
        <div className="col-lg-2 col-md-3 col-2" >
            <div className="card">
                <img src={movie.poster_path ? posterUrl : defaultPosterUrl} className="card-img-top" alt={movie.original_title} />
                <div className="card-body">
                    <h5 className="card-title">{movie.original_title} {movie.release_date? `(${movie.release_date.slice(0,4)})` : ''}</h5>
                    <p className="card-text">{movie.overview.slice(0, 100)}...</p>
                    <Link to={detailUrl} className="btn btn-primary">Show Details</Link>
                </div>
            </div>
        </div>
    );
  }

/**
 * Search results component views all information from IMDB related to the text provided by the user.
 * @param { String } keyword Represents the search text input from user
 * @param { Array } searchResults Represents the search results from the IMDB API
 * @returns JSX React Component
 */
const SearchView = ({ keyword, searchResults }) => {
  const title =  keyword && searchResults.length > 0 ? `Results for "${keyword}"` : "No results found! Use the search to look for your favorite movies and TV shows!";

  const resultsHtml = searchResults.map((resultItem, resultIndex) => {
    return <MovieCard movie={resultItem} key={resultIndex} />;
    // TODO: Clean up + Add notice for when the results are empty.
  });

  return (
    <>
        <Hero text={title} />
        {resultsHtml && 
            <div className="container mt-5">
                <div className = "row">
                    {resultsHtml}
                </div>
            </div>
        }
        { keyword && searchResults.length > 0 ? <Hero text="End of Search" /> : null}
    </>
  );
};

export default SearchView;
