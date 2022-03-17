import React from "react";
import MovieCard from "../components/MovieCard";

const Movies = () => {
    return (
        <div className="moviesContainer">
            <div className="movies">
                <h1>Movies</h1>
                <p>
                    I love movies. I love watching them, criticizing them and
                    talking about them. Here are the most important ones for me.{" "}
                    (List is up to date) <br />  - Tap on it for details
                </p>
                <div className="movieCards">
                    <MovieCard number="1" rank="9.7" name="The Godfather" />
                    <MovieCard number="2" rank="9.3" name="The Prestige" />
                    <MovieCard number="3" rank="9.1" name="Hobbit" />
                    <MovieCard number="4" rank="9" name="The Godfather Part II"/>
                    <MovieCard number="5" rank="9" name="Harry Potter and the prisoner of the azkaban" />
                    <MovieCard number="6" rank="9" name="Pulp Fiction" />
                    <MovieCard number="7" rank="8.9" name="American Beauty" />
                    <MovieCard number="8" rank="8.9" name="The Shining" />
                    <MovieCard number="9" rank="8.8" name="Schindler's List" />
                    <MovieCard number="10" rank="8.7" name="Iron Man" />
                </div>
            </div>
        </div>
    );
};

export default Movies;
