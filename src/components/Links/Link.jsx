import React from "react";
import styles from "../../styles/Link.module.css";
import { useState } from "react";



function Link(props){
    const [hover, setHover] = useState(styles.link);
    
    function handleMouseOver(){
        setHover(styles.hoveredlink);
    }

    function handleMouseOut(){
        setHover(styles.link);
    }

    return(
        <a href = {props.link}>
            <div className={hover} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <img src = {props.source} alt = {props.hook} width={30} style = {props.imgStyle}/>
                <p>{props.hook}</p>
            </div>
        </a>
    );

}

export default Link;