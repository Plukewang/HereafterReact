import React from "react";
import CardHeader from "./CardHeader";
import CardDescription from "./CardDescription";
import CardArt from "./CardArt";


function Card(props){
    //TODO: Get props in here to make it not a placeholder for the children.
    return (
        <div className="card" onClick={e=>props.click(e)} id={props.identifier}>
            <CardHeader skillType = {props.skillType} skillCost = {props.skillCost}/>
            <CardArt />
            <CardDescription skillType={props.skillType} skillName = {props.skillName}/>
        </div> )
    
}

export default Card;