import React from "react";
import "./Homepage.css"
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";

const Homepage = ()=>{


    return (

    <div className="homepage">
        <div className="background">
            <div className="navbar" id="navbar">
                <div className="navbar-left">
                    <h1>PRASHANT &#x1F43E;</h1>
                </div>
                <div className="navbar-right">
                    <ul>
//                         <li><h2><a href="navbar" > Home </a></h2></li>
//                         <li><h2><a href="project">Projects</a></h2></li>
//                         <li><h2><a href="about">About</a></h2></li>
//                         <li><h2><a href="contact">Contact</a></h2></li>
                    </ul>
                </div>
            </div>
            <div className="body">
                <div className="intro">
                    <div className="name">
                        <h1>Hello! &#x1F590; I am Prashant Jha</h1>
                    </div>
                    <div className="description">
                        <h2>Currenlty a Masters' Student in SUNY Buffalo UB,</h2><br/>
                        <h2>I have 2+ years of work experience in Software Development, Server management & monitoring </h2>
                    </div>
                </div>
                <div className="picture">

                </div>
            </div>
        </div>
        <Projects />
        <About />
        <Contact />
        {/* <div className="footer">
            <h3>PRASHANT</h3> 
        </div> */}
    </div>

    );
};
export default Homepage;
