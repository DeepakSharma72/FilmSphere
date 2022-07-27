import axios from "axios";
import React, { useState } from "react";
import './css/movieContainer.css';
import MovieComponent from './MovieComp';
import MovieInfoComponent from './MovieFullContainer';
import NoResultFound from './NoResultFound';
function MovieContainer({movieList,searchQuery}) {
    // console.log(movieList);

    const [selectedMovie, onMovieSelect] = useState();

    const onMovieSelectedFunc = async (idx) => {
        const response = await axios.get(`https://www.omdbapi.com/?apikey=ac83e34&i=${idx}`);
        onMovieSelect(response.data);
    }

    const onMovieDeselectedFunc = () => {
        onMovieSelect(null);
    }
    return (
        <>
            {
                selectedMovie && <MovieInfoComponent Movie = {selectedMovie} onMovieDeselectedFunc = {onMovieDeselectedFunc} />
            }
            <div className="movie-list-container">
                {
                    (searchQuery !== "" && movieList === undefined ? <NoResultFound/> :(movieList !== undefined ? movieList.map((val, idx) => <MovieComponent key={idx} id={idx} val={val} onMovieSelectedFunc ={() => onMovieSelectedFunc(val.imdbID)}/>) : ''))
                }
            </div>
        </>
    )
}

export default MovieContainer;