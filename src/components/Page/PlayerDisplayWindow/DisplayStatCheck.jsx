import React from "react";
import { useState } from "react";
import styles from "../../../styles/PlayerDisplay/DisplayStatCheck.module.css"
import axios from 'axios';


function DisplayStatCheck(props){

    return(
    <form onSubmit={props.click} className={styles.statCheck}>
        <button className={styles.statCheck} type = "submit" value={props.value}>
            <p >{props.value}</p>
            <div className={styles.checkImg}>
                <img src = {props.source} alt = {props.name}/>
            </div>
            <p className={styles.hover}>{props.name.toUpperCase()}</p>
        </button>
        <input type = "hidden" name = {props.name} value = {props.value}/>
    </form>)
}

export default DisplayStatCheck;