import React from "react";
import CardHeader from "./CardHeader";
import CardDescription from "./CardDescription";
import CardArt from "./CardArt";


function Card(props){

    return (
        <div className="card">
            <CardHeader />
            <CardArt />
            <CardDescription />
        </div> )
    
}

export default Card;