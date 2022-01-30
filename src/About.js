import React from "react";
import "./About.css"

const About = () =>{
    return(
        <div className="About" id="about">
            <div className="title_about"><h1>ABOUT</h1></div>
            <div className="body_about">
                <h2>EDUCATION</h2><br />
                <h2>Masters in Computer Science</h2><br />
                <h3>State University of New York - Buffalo (SUNY)</h3><br /><br />
                <h2>Engineering in Information Scince and Engineering</h2><br />
                <h3>Acharya Institute of Technology (under VTU) - Bangalore, India</h3><br /><br />
            </div>
        </div>
    );
}

export default About;