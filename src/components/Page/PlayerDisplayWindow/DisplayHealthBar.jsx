import React from "react";
import { useState } from "react";
import styles from "../../../styles/PlayerDisplay/DisplayHealthbar.module.css"


function DisplayHealthBar(){
    const max = 1000;
    const initialAdj = [
        {name: "add", symbol: "+", hover: styles.adjustHealth, click: handleAdd},
        {name: "subtract", symbol: "-", hover: styles.adjustHealth, click: handleSubtract}
        ]

    const [hp, setHp] = useState(500);
    const [adj, setAdj] = useState(initialAdj);
        
    //for adding and subtracting hp
    function handleAdd(){
        setHp(a => Math.min(max, a + 100));
    }
    function handleSubtract(){
        setHp(a => Math.max(0, a - 100))
    }
    //glow effect
    function handleMouseOver(event){
        console.log(true);
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
        <div className={styles.bar}>
            <div className = {styles.hp} style={{width: hp}}>
                </div>
            <div className = {styles.filler} style={{width: 1000-hp}}>
                </div>

            <div className={styles.adjust}>
                {adj.map(btn=>{
                    return <button name = {btn.name} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className = {btn.hover} onClick={btn.click}>{btn.symbol}</button>
                })}
                
            </div>
        </div>
    )
}

export default DisplayHealthBar;