import React from "react";
import project1Img from "../assets/vision-pt2.png";
import project2Img from "../assets/weather-app.png";
import project3Img from "../assets/timed-quiz.png";
import project4Img from "../assets/password-gen.png";
import project5Img from "../assets/work-day-scheduler.png";


function Projects(props) {
    return (
        <div class="projects" id="content">
                <h2>Projects</h2>
                <p>Below are the projects I have worked on over the University of Richmond Full-Stack bootcamp. Please click on my github link to see the code of each project in my repositories.</p>
            </div>

        <aside class="content">
                <a href="https://la0615.github.io/Project1/" class="project">
                    <img src={project1Img}>
                </a>
                <a href="https://devbelle.github.io/Weather-App/" class="project">
                    <img src={project2Img}>
                </a>
                <a href="https://devbelle.github.io/Javascript-Quiz-App/a-start" class="project">
                    <img src={project3Img}>
                </a>
                <a href="https://devbelle.github.io/Password-Generator-with-Prompts/" class="project">
                    <img src={project4Img}>
                </a>
                <a href="https://devbelle.github.io/Work-Day-Scheduler/" class="project">
                    <img src={project5Img}>
                </a>
                {/* <a href="https://devbelle-note-take-e7a3ea5c0391.herokuapp.com/notes" class="project">
                    <img src="assets/images/Note-taker.png" alt="note-taker">
                </a> */}
            </aside>
    )
}

export default Projects