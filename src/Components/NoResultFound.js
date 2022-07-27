import React from "react";
import url from './Img/notfound.png';
import './css/notfound.css';

function NoResultFound() {  
    return (
        <>
            <div className="notfound-container">
                <div>Sorry No Movie Exist with this Name</div>
                <img className = 'noresult-img' alt="not-found" src={url} />
            </div>
        </>
    )
}

export default NoResultFound;