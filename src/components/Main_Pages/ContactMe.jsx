import React from "react";
import styles from "../../styles/Page.module.css";
import Link from "../Links/Link";


function ContactMe(){
    return(
        <div className={styles.background}>
            <div className={styles.left}>
                <h2>Interested in this project? Send me a message!</h2>
                <ul>
                    <li> <Link link = "mailto: plukewang@utexas.edu" hook = "Email"/></li>
                    <li> <Link link = "http://www.linkedin.com/in/peiyang-wang-631550261" hook = "Linkedin"/></li>
                </ul>
            </div>
        </div>
    );
}

export default ContactMe;