import React from "react";
import CardHeader from "./CardHeader";
import CardDescription from "./CardDescription";
import CardArt from "./CardArt";
import {Form, useLoaderData, Outlet, Link, redirect} from "react-router-dom";
import axios from "axios";

export async function loader({params}){
    try {
        const result = await axios.get(`https://hereafterproject.onrender.com/compendium/${params.cardId}`) ;
        return result.data;
    } catch (err) {
        console.log(err);
    }
}



function Card(props){
    const card = useLoaderData();
    //TODO: Get props in here to make it not a placeholder for the children.
    return (
        <div className="card" id={card.id}>
            <CardHeader title = {card.skill_name || props.skillName} skillType = {card.skill_type || props.skillType} skillCost = {card.skill_cost}/>
            <CardArt />
            <CardDescription skillType={card.skill_type} skillDescription = {card.skill_description || props.skillDescription}/>
        </div> )
    
}

export default Card;