import React from "react";
import profileImg from "../assets/Devin-profile-pic.png";

function Navigation (props) {
    return(
        <nav class="side-nav">
        <div>
            <img src={profileImg} alt="Devin" class="devin" />
                <div>
                    <h1>Devin Belle</h1>
                        <div>   
                            <ul class="portfolio-links">
                                <li><p><a href="#home">Home</a></p></li>
                                <li><p><a href="#about-me">About</a></p></li>
                                <li><p><a href="#content">Projects</a></p></li>
                                <li><p><a href="#contact-me">Contact</a></p></li>
                                <li id="copyright">&copy; All Rights Reserved</li>
                            </ul>
                        </div>
                </div>
        </div>
        
    </nav>
    )
}

export default Navigation;