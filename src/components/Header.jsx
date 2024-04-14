import React from "react";
import bannerImg from "../assets/Top-image.jpg";

function Header (props) {
    return (
       
        <section id="home" class="background-image">
        <div class="top-img">
            {/* <img src={bannerImg} id="top-img" alt="Header-Image"> */}
            <div id="title-quote"><h1>Every Step Counts!</h1></div>
        </div>
        </section>
    
    )
    
}

export default Header;