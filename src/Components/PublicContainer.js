import React from "react";
import imgLink from "./Img/netflix.png";
import './css/publiccontainer.css';
import AddLinkIcon from '@mui/icons-material/AddLink';
import LiveTvIcon from '@mui/icons-material/LiveTv';
function PublicContainer() {
    return (
        <>
            <div className="public-container">
                <div className="img-container">
                    <img className="nf-img" src={imgLink} alt="n-pic" />
                </div>
                <div className="body-container">
                    <h1>Welcome to FilmySphere <LiveTvIcon className = "movie-icon" /></h1>
                    <br />
                    FilmySphere provides information about all the movies present on the internet.
                    <br />
                    <br />
                    Get the Details of Your Favorite Movies just by typing there name in Search Bar.
                    <br />
                    <br />
                    <span className="top-list-bar">So, What are you Waiting for? <br></br> Start Searching Movies, Series <AddLinkIcon className="add-icon-link"/></span>
                </div>
            </div>
        </>
    )
}

export default PublicContainer; 