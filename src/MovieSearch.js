/*import { useState } from "react";
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
  `https://www.omdbapi.com/?apikey=2aa7b923&s=${search}`
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
export default Search;*/
/*import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./MovieSearch.css";

function Search() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setSearch(e.target.value);
  }

  async function searchMovie() {
    if (!search.trim()) return;
    setLoading(true);
    setError("");
    setMovies([]);
    try {
      const res = await axios.get(
        `https://www.omdbapi.com/?apikey=2aa7b923&s=${search}`
      );
      if (res.data.Response === "True") {
        setMovies(res.data.Search);
      } else {
        setError("No movies found. Try a different search.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
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

      {loading && (
        <p style={{ textAlign: "center", color: "#888" }}>Searching...</p>
      )}

      {error && (
        <p style={{ textAlign: "center", color: "red" }}>{error}</p>
      )}

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
                src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x445?text=No+Poster"}
                alt={movie.Title}
              />
              <div className="movie-title">{movie.Title}</div>
              <div className="movie-year">{movie.Year}</div>
            </div>
          </Link>
        ))}
      </div>

      <div className="footer"></div>
    </div>
  );
}

export default Search;*/
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./MovieSearch.css";

function Search() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") searchMovie();
  }

  async function searchMovie() {
    if (!search.trim()) return;
    setLoading(true);
    setError("");
    setMovies([]);
    try {
      const res = await axios.get(
        `https://www.omdbapi.com/?apikey=2aa7b923&s=${search}`
      );
      if (res.data.Response === "True") {
        setMovies(res.data.Search);
      } else {
        setError("No movies found. Try a different search.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>

      {/* Navbar */}
      <div className="navbar">
        🎬 Movie Explorer
      </div>

      {/* Search */}
      <div className="search-container">
        <h2>Find any movie</h2>
        <p>Search from thousands of movies</p>
        <div className="search-row">
          <input
            className="search-input"
            type="text"
            placeholder="e.g. Avengers, Inception..."
            value={search}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <button
            className="search-button"
            onClick={searchMovie}
          >
            Search
          </button>
        </div>
      </div>

      {/* Status */}
      {loading && <p className="status-msg">Searching...</p>}
      {error && <p className="error-msg">{error}</p>}

      {/* Movie Grid */}
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
                src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x445?text=No+Poster"}
                alt={movie.Title}
              />
              <div className="movie-title">{movie.Title}</div>
              <div className="movie-year">{movie.Year}</div>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <div className="footer"></div>

    </div>
  );
}

export default Search;