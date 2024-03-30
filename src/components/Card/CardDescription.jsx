import React from "react";

function CardDescription(props){
    let skillType = props.skillType.substring(0,1).toUpperCase() + props.skillType.substring(1);
    return (
        //placeholder description
        <div className="cardDescription"
        style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
        }}>
            <h2>{props.skillName}</h2>
            <h3>{skillType}</h3>
        </div>
    )
}   

export default CardDescription;