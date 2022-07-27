import React from "react";
import './css/movieContainer.css';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import PublicIcon from '@mui/icons-material/Public';
import LanguageIcon from '@mui/icons-material/Language';
import PeopleIcon from '@mui/icons-material/People';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import RateReviewIcon from '@mui/icons-material/RateReview';
import BackspaceIcon from '@mui/icons-material/Backspace';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Tooltip from '@mui/material/Tooltip';

const MovieInfoComponent = ({ Movie,onMovieDeselectedFunc}) => {
    console.log(Movie);
    return (
        <div className="full-movie-container">
            <div className="cut-button" onClick = {onMovieDeselectedFunc}>
            <Tooltip title="Go Back">
                <BackspaceIcon className="cut-btn"/>
            </Tooltip>    
            </div>
            <img className="full-cover-img" src={Movie.Poster} alt="full-img" />
            <div className="info-coloumn">
                <div>
                    <SlideshowIcon /> Movie:  {Movie.Title}
                </div>
                <div>
                    <StarBorderPurple500Icon /> Rating: {Movie.imdbRating}
                </div>
                <div>
                    <PublicIcon /> Country: {Movie.Country}
                </div>
                <div>
                    <PeopleIcon /> Actors: {Movie.Actors}
                </div>
                <div>
                    <LanguageIcon /> Language: {Movie.Language}
                </div>
                <div>
                    <NewReleasesIcon /> Released: {Movie.Released}
                </div>
                <div>
                    <RecentActorsIcon /> Director: {Movie.Director}
                </div>
                <div>
                    <DonutLargeIcon /> Genre: {Movie.Genre}
                </div>
                <div>
                    <RateReviewIcon /> Writer: {Movie.Writer}
                </div>
            </div>
            <div className="movie-plot">
                <div>
                    Plot of the Story <AutoStoriesIcon />
                </div>
                {Movie.Plot}
            </div>
        </div>
    )
}

export default MovieInfoComponent;