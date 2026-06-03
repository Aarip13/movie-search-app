import { useEffect,useState } from "react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./MovieSearch.css";
function Search(){
    const [search,setsearch]=useState("");
    const [movies, setMovies] = useState([]);
function handleChange(change){
    setsearch(change.target.value);
}
function searchMovie() {
    axios.get(
  `http://www.omdbapi.com/?apikey=2aa7b923&s=${search}`
)
.then(response => {
    setMovies(response.data.Search);
    console.log(response.data.Search);
});


}
return (
    <div>

        <div className="navbar">
            Movie Explorer
        </div>

        <div className="search-container">

            <input
                className="search-input"
                type="text"
                placeholder="Enter movie name"
                value={search}
                onChange={handleChange}
            />

            <button
                className="search-button"
                onClick={searchMovie}
            >
                Search
            </button>

        </div>

        <div className="movie-grid">

            {movies.map((movie) => (

                <Link
                    key={movie.imdbID}
                    to={`/movie/${movie.imdbID}`}
                    style={{ textDecoration: "none" }}
                >

                    <div className="movie-card">

                        <img
                            className="movie-poster"
                            src={movie.Poster}
                            alt={movie.Title}
                        />

                        <div className="movie-title">
                            {movie.Title}
                        </div>

                        <div className="movie-year">
                            {movie.Year}
                        </div>

                    </div>

                </Link>

            ))}

        </div>

        <div className="footer">
            
        </div>

    </div>
);
}
export default Search;