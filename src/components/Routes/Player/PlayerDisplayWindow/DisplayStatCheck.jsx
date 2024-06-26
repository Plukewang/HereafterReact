import React from "react";
import { useState } from "react";
import styles from "../../../../styles/PlayerDisplay/DisplayStatCheck.module.css"
import { Tooltip, Badge } from "@mui/material";



function DisplayStatCheck(props){
    const [hover, setHover] = useState("#161315");

    function handleMouseOver(){
        setHover(props.background);
    }
    function handleMouseOut(){
        setHover("#161315");
    }

    return(
        <Tooltip title='Check this stat plus its current bonuses' placement="right">
            <form onSubmit={props.click} className={styles.statCheck}>
        
            <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={styles.statCheck} type = "submit" value={props.value} style = {{backgroundColor: hover}}>
                <Badge badgeContent={props.bonus==0? '': props.bonus}><p >{props.value}</p></Badge>
                <div className={styles.checkImg} style = {{backgroundColor: "#161315",}}>
                    <img src = {props.source} alt = {props.name}/>
                </div>
                <p className={styles.hover}>{props.name.toUpperCase()}</p>
            </button>
            <input type = "hidden" name = {props.name} value = {props.value}/>
        </form>
    </Tooltip>)
}

export default DisplayStatCheck;