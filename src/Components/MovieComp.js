import React from "react";
import './css/movieContainer.css';

function MovieComponent({val,idx,onMovieSelectedFunc}){
    return(
        <>
            <div className="movie-component" onClick = {onMovieSelectedFunc}>
                <img className="cover-img" src={val.Poster} alt="cover-image"/>
                <span className="movie-name">{val.Title}</span>
                <div className="info-col">
                    <span>Year: {val.Year}</span>
                    <span>Type: {val.Type}</span>
                </div>
            </div>
        </>
    )
}

export default MovieComponent;