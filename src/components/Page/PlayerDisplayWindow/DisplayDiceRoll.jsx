import React from "react";
import { useState, useRef, useEffect} from "react";
import { gsap } from "gsap";
import styles from "../../../styles/PlayerDisplay/DisplayDiceRoll.module.css" 

export default DisplayDiceRoll;

function DisplayDiceRoll(props){
    const [roll, setRoll] = useState(props.roll);
    const dice = useRef();

    useEffect(()=>{
        setRoll(props.roll)
        
    },[props.roll])


    return (
        <div className={styles.dice}>
            <p>{props.name.toUpperCase()}</p>
            <h1>{roll}</h1>
        </div>
    )
}