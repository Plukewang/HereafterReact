import React, { useEffect } from "react";
import { useState,useRef } from "react";
import {gsap} from "gsap";
import styles from "../../../styles/PlayerDisplay/DisplayFocusbar.module.css"


function DisplayFocusBar(props){
    const [pc, setPc] = useState(Math.floor(props.focus/7*100));
    const focusRef = useRef();


    
    function handleAdd(){

        setPc(a => Math.min(100, a+Math.ceil(1/7*100)));
    }


    function handleSubtract(){
        setPc(a => Math.max(0, a-Math.ceil(1/7*100)));
    }    

    let percentage = pc
    let r = 30;
    let circ = 2*Math.PI*r;
    let pct = ((100 - percentage) * circ) / 100;

    //gsap animation for focus bar filling
    useEffect(()=>{
        
        gsap.from(focusRef.current, {
            duration: 0.2,
            ease: 'circ',
        });

    },[])

    useEffect(()=>{
        if(pc===100){
           
            gsap.to(focusRef.current, {
                duration: 0.3,
                ease: 'circ',
                strokeDashoffset: ((100 - pc) * circ) / 100,
                stroke: 'url(#myGradient)',
            });

        }else{
            
            gsap.to(focusRef.current, {
                duration: 0.3,
                ease: 'circ',
                strokeDashoffset: ((100 - pc) * circ) / 100,
                stroke :"#1682AB",
            });
        }
        

    },)

    return (
    <div style={{height: "25%", width:"100px"}} className={styles.bar}>
        
        
        <svg  style={{height: "100%", width:"100px", backgroundColor: "#ebe8ea"}}>
            <defs>
                <radialGradient  id="myGradient">
                <stop offset="10%" stop-color="#ffffff"/>
                <stop offset="90%" stop-color="#1682ab"/>
  
                
                </radialGradient>
            </defs>

            <circle 
            
            ref = {focusRef}
            cx="50%"
            cy="50%" 
            r={r} 
            fill = "#ebe8ea"
            stroke = "#1682AB"
            strokeWidth="25%"
            strokeDasharray={circ}
            strokeDashoffset={pct}
            />
            <text x="45%" y="55%" style={{textAlign: "center"}}>{Math.round(pc/100*7)}</text>
        </svg>
        
        
        <button className = {styles.focusbtn} onClick={handleSubtract}><img src = "../../icons/prev.png" width="20px"/></button>
        <button className = {styles.focusbtn} onClick={handleAdd}><img src = "../../icons/next.png" width="20px"/></button>
    </div>)
}

export default DisplayFocusBar;