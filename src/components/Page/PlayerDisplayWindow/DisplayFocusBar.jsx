import React from "react";
import { useState } from "react";
import styles from "../../../styles/PlayerDisplay/DisplayFocusbar.module.css"


function DisplayFocusBar(props){
    const [pc, setPc] = useState(Math.floor(props.focus/7*100));
    
    function handleAdd(){
        setPc(a => Math.min(100, a+Math.floor(1/7*100)));
    }


    function handleSubtract(){
        setPc(a => Math.max(0, a-Math.floor(1/7*100)));
    }    

    let percentage = pc
    let r = 30;
    let circ = 2*Math.PI*r;
    let pct = ((100 - percentage) * circ) / 100;

    return (
    <div style={{height: "25%", width:"100px"}} className={styles.bar}>
        <svg style={{height: "100%", width:"100px", backgroundColor: "#ebe8ea"}} className={styles.fill}>
            <circle
            cx="50%"
            cy="50%" 
            r={r} 
            fill = "#ebe8ea"
            stroke = "#1682AB"
            strokeWidth="25%"
            strokeDasharray={circ}
            strokeDashoffset={pct}
            />
        </svg>
        <button className = {styles.focusbtn} onClick={handleAdd}>+</button>
        <button className = {styles.focusbtn} onClick={handleSubtract}>-</button>
    </div>)
}

export default DisplayFocusBar;