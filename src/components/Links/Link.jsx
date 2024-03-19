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
        <div className={hover} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <img src = {props.source} alt = {props.hook} height={30} style = {props.imgStyle}/>
            <a href = {props.link}>{props.hook}</a>
        </div>
    );

}

export default Link;