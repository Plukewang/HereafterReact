import React from "react";
import { useState, useEffect } from "react";
import styles from "../../../../styles/PlayerDisplay/DisplayHealthbar.module.css"


function DisplayHealthBar(props){
    const initialAdj = [
        {name: "add", symbol: "+", hover: styles.adjustHealth, click: handleAdd},
        {name: "subtract", symbol: "-", hover: styles.adjustHealth, click: handleSubtract}
        ];

    
    const [hp, setHp] = useState(props.hp);
 

    const [adj, setAdj] = useState(initialAdj);

    useEffect(()=>{
        
        let next = props.hp;

        setHp(next);
    },[props.hp])

    //for adding and subtracting hp
    function handleAdd(){
        setHp(a=>{
            return a+1;}
        );
        
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
    let bonusHighlight = "white"
    let fill = ""+Math.min(100, 100*hp/props.hp)+"%";
    let empty = ""+100*(props.hp-hp)/props.hp+"%";
    if(hp>props.hp) bonusHighlight = "#53bee9";

    return(
        <div className={styles.healthbar} > 
            <div  className={styles.bar}>
            <div className = {styles.hp} style={{width: fill}}>
                    </div>
                <div className = {styles.filler} style={{width: empty}}>
                    </div>
                </div>
                <div className={styles.adjust}>
                    {adj.map((btn,i)=>{
                        return <button key = {i} name = {btn.name} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className = {btn.hover} onClick={btn.click}>{btn.symbol}</button>
                    })}
                </div>
                <div className={styles.displayHealth}>
                    <p>{Math.min(hp, props.hp)} <span style = {{color: bonusHighlight}}>{Math.max(0,hp-props.hp)}</span></p>
                </div>
        </div>
        
    )
}

export default DisplayHealthBar;