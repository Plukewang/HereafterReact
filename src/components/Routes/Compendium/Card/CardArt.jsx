import React from "react";

function CardArt(props){
    return (
        <div className = "cardArt">
            <img src = {props.icon? props.icon:  "../../the Hereafter2.png"} alt = "placeholder"/>
        </div>
    )
}

export default CardArt;