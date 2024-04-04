import React from "react";


function CardHeader(props){
    //determine icon to display
    let costType = "../../move.png"
    let cost = Array(props.skillCost).fill(0);
    switch(props.skillType){
        case "turn":
            costType = "../../turn.png";
            break;
        case "skill":
            costType = "../../skill.png";
            break;    
        case "move":
            costType = "../../move.png";
            break;
    }

    return <div className = "cardHeader">
        <h1>{props.title}</h1>
        {cost.map((x,i)=>{
            return <img key = {i} src = {costType} alt = "" height= "25px"/>
        })}
    </div>
}

export default CardHeader;