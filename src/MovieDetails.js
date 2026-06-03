import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./MovieDetails.css";

export default function DetailMovie() {

    const params = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {

        axios.get(
            `https://www.omdbapi.com/?apikey=2aa7b923&i=${params.id}`
        )
        .then(response => {
            setMovie(response.data);
        });

    }, [params.id]);

    if (!movie) {
        return <h1>Loading...</h1>;
    }

    return (
    <div>

        <div className="navbar">
            Movie Details
        </div>

        <div className="details-container">

            <img
                className="details-poster"
                src={movie.Poster}
                alt={movie.Title}
            />

            <div className="details-card">

                <h1 className="details-title">
                    {movie.Title}
                </h1>

                <p>
                    <strong>Year:</strong> {movie.Year}
                </p>

                <p>
                    <strong>Genre:</strong> {movie.Genre}
                </p>

                <p>
                    <strong>Actors:</strong> {movie.Actors}
                </p>

                <p>
                    <strong>Plot:</strong> {movie.Plot}
                </p>

            </div>

        </div>

    </div>
);
}