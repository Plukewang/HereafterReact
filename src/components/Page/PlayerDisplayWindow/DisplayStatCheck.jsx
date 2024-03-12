import React from "react";
import { useState } from "react";

function DisplayStatCheck(props){
    const [check, setCheck] = useState();

    function handleClick(){
        setCheck(Number(props.value)+Math.floor(Math.random()*6));
    }

    return(
    <div style = {{width: "10%", height: "15%"}}>
        <h2 style = {{fontSize: "1em"}}> {props.name}</h2>
        <button onClick={handleClick}>{props.value}</button>
        <p>{check}</p>
    </div>)
}

export default DisplayStatCheck;