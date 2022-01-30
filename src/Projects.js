import React from "react";
import "./Projects.css"

const Projects = () =>{
    return (
        <div className="Projects" id="project">
            <div className="title"><h1>PROJECTS</h1></div>
            <div className="project1">
                <div className="picture1"></div>
                <div className="project-desc">
                    <div className="project-name"><h1>Flight Tracker</h1></div>
                    <div className="project-description"><h2>Project based on Distributed Systems concept for Tracking and notifying Subscribers for Real-Time flight Tracking</h2></div>
                    <div className="project-techStack"><h3>React, Express, MongoDB, NodeJS, Docker</h3></div>
                </div>
            </div>
            <div className="project1">
                <div className="picture1"></div>
                <div className="project-desc">
                    <div className="project-name"><h1>Notes </h1><a href="https://pkachu17.github.io/notes/" target="_blank" rel="noreferrer">&#x1F517;</a></div>
                    <div className="project-description"><h2>Online Notes Taking App currenlty hosted on github</h2></div>
                    <div className="project-techStack"><h3>React, HTML5, CSS3, Google fonts, Git</h3></div>
                </div>
            </div>
        </div>
    );
}

export default Projects;