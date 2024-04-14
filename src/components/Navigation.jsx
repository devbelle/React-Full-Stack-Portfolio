import React from "react";
import profileImg from "../assets/Profile-pic.JPG"

function Navigation (props) {
    return(
        <nav class="side-nav">
        <div>
            <img src={profileImg} alt="Devin" class="devin">
                <div>
                    <h1>Devin Belle</h1>
                        <div>   
                            <ul class="portfolio-links">
                                <li><p><a href="#home">Home</a></li>
                                <li><p><a href="#about-me">About</a></li>
                                <li><p><a href="#content">Projects</a></li>
                                <li><p><a href="#contact-me">Contact</a></p></li>
                                <li id="copyright">&copy; All Rights Reserved</li>
                            </ul>
                        </div>
                </div>
        </div>
        
    </nav>
    )
}