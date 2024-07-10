import React from "react";
import { useEffect } from "react";
import SearchIcon from './search.svg';
import './App.css';
//f45c53e6 api key

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=f45c53e6';

const movie1 = {
    "Title": "Fighting, Flying and Driving: The Stunts of Spiderman 3",
    "Year": "2007",
    "imdbID": "tt1132238",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNTI3NDE1ZmEtMTRiMS00YTY4LTk0OGItNjY4YmI0MDM4OGM4XkEyXkFqcGdeQXVyODE2NDgwMzM@._V1_SX300.jpg"
}

const App = () => {

    const searchMovies = async (title) => {
        const resposne = await fetch(`${API_URL}&s=${title}`);
        const data  = await resposne.json();
        console.log(data.Search);
    }
    useEffect(() => {
        searchMovies('Spiderman');
    }, []);
    return(
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input 
                    placeholder = "Search for movies"
                    value = "Superman"
                    onChange={() => {}}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => {}}
                />
            </div>
            <div className="container">
                <div className="movie">
                    <div>
                        <p>{movie1.Year}</p>
                    </div>
                    <div>
                        <img src={movie1.Poster !== 'N/A' ? movie1.Poster: 'https://via.placeholder.com/400'} alt={movie1.Title}/>
                    </div>
                    <div>
                        <span>{movie1.Type}</span>
                        <h3>{movie1.Title}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;