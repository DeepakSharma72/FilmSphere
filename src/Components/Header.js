import React from "react";
import LogoImg from './Img/logo.png';
import './css/header.css';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
function Header({searchQuery,SeachBarTextChange}) {
    return (
        <>
            <div className="header-container">
                <div className="icon-container">
                    <img className="logo-img" src={LogoImg} alt="app-logo" />
                </div>
                <div className="search-bar">
                    <SavedSearchIcon className="search-icon"/>
                    <input placeholder="Search Movie here" type='text' onChange={(e) => SeachBarTextChange(e.target.value)} value={searchQuery}></input>
                </div>
            </div>
        </>
    )
}

export default Header;