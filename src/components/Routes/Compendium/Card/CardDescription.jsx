import React from "react";

function CardDescription(props){
    let skillType = "Winning"
    return (
        //placeholder description
        <div className="cardDescription"
        style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
        }}>
            <p>{props.skillDescription}</p>
        </div>
    )
}   

export default CardDescription;