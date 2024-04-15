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
                                <li><p className={props.selectedPage == "About" ? "selected nav-item" : "nav-item"} onClick={() => {props.setSelectedPage("About");}}><a href="#Home">Home</a></p></li>
                                <li><p className={props.selectedPage == "About" ? "selected nav-item" : "nav-item"} onClick={() => {props.setSelectedPage("About");}}><a href="#About-Me">About</a></p></li>
                                <li><p className={props.selectedPage == "Portfolio" ? "selected nav-item" : "nav-item"} onClick={() => {props.setSelectedPage("Portfolio");}}><a href="#Projecs">Projects</a></p></li>
                                <li><p className={props.selectedPage == "Resume" ? "selected nav-item" : "nav-item"} onClick={() => {props.setSelectedPage("Resme");}}><a href="#Resume">Resume</a></p></li>
                                <li><p className={props.selectedPage == "Contact" ? "selected nav-item" : "nav-item"} onClick={() => {props.setSelectedPage("Contact");}}><a href="#Contact">Contact</a></p></li>
                                <li id="copyright">&copy; All Rights Reserved</li>
                            </ul>
                        </div>
                </div>
        </div>
        
    </nav>
    )
}

export default Navigation;