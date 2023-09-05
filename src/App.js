import Movie from "./components/Movie";
import React, { useState, useEffect } from "react";
import "./App.css";
import searchIcon from "./search.svg";
const API_URL = 'http://www.omdbapi.com?apikey=20f37e84';



const APP = () => {
    const [movies, setMovies] = useState([]);
    const [searchTarm,setSearchTarm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        console.log(data.Search);
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('spiderman');
    }, []);

    return (
        <div className="app">
            <h1>Movie Home</h1>

            <div className="search">
                <input
                    placeholder="Search Your Movie"
                    value={searchTarm}
                    onChange={(e) => setSearchTarm(e.target.value)}
                />

                <img
                    src={searchIcon}
                    alt="SearchIcon"
                    onClick={() => searchMovies(searchTarm)}
                />
            </div>
            {
                movies?.length > 0 ? (
                    <div className="container">
                        {
                            movies.map((movie) => (
                                <Movie
                                    key={movie.imdbID}
                                    movie={movie}

                                />
                            ))
                        }
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No Movie Found</h2>
                    </div>
                )
            }
        </div>
    );
}

export default APP;