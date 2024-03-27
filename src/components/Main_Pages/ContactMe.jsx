import React from "react";
import styles from "../../styles/Page.module.css";
import Link from "../Clickable/Link.jsx"


function ContactMe(){
    return(
        <div className={styles.background}>
            <div className={styles.center}>
                <div className={styles.split}>
                <div className={styles.splitcol}>
                    <h2>Looking for a professionally built website?</h2>
                    <p>
                        If you like what you see here and are looking for someone to build a responsive and refined site for your business or passion project, find me on any of the 
                        contact methods below!
                    </p>
                </div>
                
                <div className={styles.splitcol}>
                    <h2>Interested in getting involved with the world of the Hereafter?</h2>
                    <p>
                        If the writing and world-building side of this project has piqued your interest, feel free to message me about either collaborating or joining
                        the project as a player or a member!
                    </p>
                </div>
                </div>
                
            </div>
            <div className={styles.center}>
                <h2>Find me here!</h2>
                <ul>
                    <li> <Link link = "mailto: plukewang@utexas.edu" hook = "Email" source = "../../icons/gmail.png"/></li>
                    <li> <Link link = "http://www.linkedin.com/in/peiyang-wang-631550261" hook = "Linkedin" source = "../../icons/linkedin.svg" /></li>
                    <li> <Link link = "https://github.com/Plukewang" hook = "GitHub" source = "../../icons/github.png" imgStyle={{border: "2px solid #ebe8ea", borderRadius: "50%",backgroundColor: "#ebe8ea"}} /></li>
                </ul>
            </div>
           
        </div>
    );
}

export default ContactMe;