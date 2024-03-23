import React from "react";
import { useState, useEffect } from "react";
import styles from "../../../styles/PlayerDisplay/DisplayHealthbar.module.css"
import { gsap } from "gsap/gsap-core";

function DisplayHealthBar(){
    const max = 5;
    const initialAdj = [
        {name: "add", symbol: "+", hover: styles.adjustHealth, click: handleAdd},
        {name: "subtract", symbol: "-", hover: styles.adjustHealth, click: handleSubtract}
        ]

    const [hp, setHp] = useState(5);
    const [adj, setAdj] = useState(initialAdj);
        
    //for adding and subtracting hp
    function handleAdd(){
        setHp(a => Math.min(max, a + 1));
    }
    function handleSubtract(){
        setHp(a => Math.max(0, a - 1))
    }
    //glow effect
    function handleMouseOver(event){
        setAdj(adj.map(x=>{
                if(x.name===event.target.name){
                    return {...x, hover: styles.adjustHealthHover};
                } else return {...x, hover: styles.adjustHealth}
            })
        );
    }

    function handleMouseOut(event){
        setAdj(adj.map(x=>{
                if(x.name===event.target.name){
                    return {...x, hover: styles.adjustHealth};
                } else return {...x, hover: styles.adjustHealth}
            })
        );
    }


    return(
        <div className={styles.healthbar}>
            <div  className={styles.bar}>
                <div className = {styles.hp} style={{width: 100*hp/5+'%'}}>
                </div>
                <div className = {styles.filler} style={{width: 100*(5-hp)/5+'%'}}>
                </div></div>
            <div className={styles.adjust}>
                {adj.map(btn=>{
                    return <button name = {btn.name} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className = {btn.hover} onClick={btn.click}>{btn.symbol}</button>
                })}
            </div>
            <div className={styles.displayHealth}>
                <p>{hp}</p>
            </div>
        </div>
        
    )
}

export default DisplayHealthBar;