import React from "react";
import './css/footer.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
function Footer() {
    const linkdin = 'https://www.linkedin.com/in/deepak-sharma-66968120a/';
    const github = 'https://github.com/DeepakSharma72';
    return (
        <>
            <div className="footer-container">
                <div>
                    FilmySphere is Developed By Deepak Sharma
                </div>
                <div className="footer-links">
                    <a href= {linkdin} target = '_space'><LinkedInIcon className="link-icon"/></a>
                    <a href= {github} target = '_space'><GitHubIcon className="link-icon"/></a>
                </div>
            </div>
        </>
    )
}

export default Footer;