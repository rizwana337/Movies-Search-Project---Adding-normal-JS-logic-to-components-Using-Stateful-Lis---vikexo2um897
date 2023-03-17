import React, { useState } from "react";
import "../styles/App.css";
import { movies } from "../utils/movieList";

const App = () => {
    const [inputValue, setInputValue] = useState("");
    const [results, setResult] = useState(null);

    function handleClick(e) {
        e.preventDefault();
    const searchTerm = inputValue.toLowerCase();
    const filteredMovies = movies.filter(
      (movie) => movie.toLowerCase().includes(searchTerm)
    );
    setResult(filteredMovies);
  }

    

    function handleChange(event) { 

        const latestInputeValue = event.target.value;
        setInputValue(latestInputeValue);

        if(latestInputeValue ==""){
            setResult(null);
            return;
        };

        const serachRegex = new RegExp(latestInputeValue,"i");


        const searchFilteredMovies = movies.filter((movie)  => {
            const doesMatchSearch = serachRegex.test(movie.title);
            return doesMatchSearch;

        });
        setResult(searchFilteredMovies);


    }

    return (
        <div id="main">
            <form id="form">
            <input
                    type="text"
                    onChange={handleChange}
                    value={inputValue}
                    id="movie-input"
                />
                <button id="button" onClick={handleClick}>
                    Search
                </button>
            </form>
            <div id="result">
                {results &&
                    results.map((movie) => (
                        <div className="movie" key = {movie.id}>{movie.title}</div>
                    ))}
            </div>
        </div>
    );
};

export default App;