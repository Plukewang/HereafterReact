import React from "react";
import CardHeader from "./CardHeader";
import CardDescription from "./CardDescription";
import CardArt from "./CardArt";
import {Form, useLoaderData} from "react-router-dom";
import axios from "axios";
import inventoryStyle from "../../../../styles/PlayerDisplay/DisplayInventory.module.css";
import { Tooltip } from "@mui/material";

export async function loader({params}){
    try {
        const result = await axios.get(`https://hereafterproject.onrender.com/compendium/${params.cardId}`) ;
        return result.data;
    } catch (err) {
        console.log(err);
    }
}



function Card(props){
    
    //TODO: Get props in here to make it not a placeholder for the children.
    return (
        <Tooltip title={
            <div className={inventoryStyle.itemHover} >
                <CardHeader title = {props.skillName} skillType = {props.skillType} skillCost = {props.skillCost}/>
                <CardArt />
                <CardDescription skillType={props.skillType} skillDescription = {props.skillDescription}/>
            </div>
            } >
            <div className="card" id={props.identifier}>
            <CardHeader title = {props.skillName } skillType = {props.skillType} skillCost = {props.skillCost}/>
            <CardArt />
            
        </div>
        </Tooltip>
         )
    
}

export default Card;