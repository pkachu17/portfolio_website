import React from "react";
import "./Contact.css";

const Contact = ()=>{
    return(
        <div className="Contact" id="contact">
            <div className="title_contact"><h1>CONTACT</h1></div>
            <div className="body_contact">
                <h3>prashantkjha681@gmail.com</h3>
                <h3><a href="https://www.linkedin.com/in/prashantkj/" target="_blank" rel="noreferrer">LinkedIn</a></h3>
                <h3><a href="https://github.com/pkachu17" target="_blank" rel="noreferrer">Github</a></h3>
            </div>
        </div>
    );
}
export default Contact;