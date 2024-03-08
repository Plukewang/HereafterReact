import React from "react";
import { useState } from "react";
import styles from "../../../styles/PlayerDisplay/DisplayHealthbar.module.css"


function DisplayHealthBar(){
    const [hp, setHp] = useState(500);

    function handleAdd(){
        setHp(prev=>{
            hp = prev+1;
        })
    }
    function handleSubtract(){
        setHp(prev=>{
            hp = prev-1;
        })
    }


    return(
        <div className={styles.bar}>
            <div className = {styles.hp} style={{width: hp}}>
            </div>
            <div className = {styles.filler} style={{width: 1000-hp}}>
            </div>
        </div>
    )
}

export default DisplayHealthBar;