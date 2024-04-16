import React from "react";
import styles from "../../../styles/Page.module.css";
import { useState, useEffect } from "react";
import DisplayWindow from "./PlayerDisplayWindow/DisplayWindow";
import { Link, Outlet, useLoaderData, NavLink } from "react-router-dom";
import axios from "axios";

export async function playerLoader(){
    try {
        const result = await axios.get("https://hereafterproject.onrender.com/players") ;
        return result.data;
    } catch (err) {
        console.error(err);
    }
}


function PlayerPage(){
    const [activePlayer, setActivePlayer] = useState(0);

    const players = useLoaderData();

    function handleChangePlayer(e){
        console.log(e.target.name)
        setActivePlayer(e.target.name);
        console.log(activePlayer)
    }



    return (
        <div className = {styles.background}>

            <h1>Player Pages</h1>       
            <div className={styles.changePlayerButtons}>
                {players.map((player,i)=>{
                    return <NavLink to={`player/${i+1}`} style={({ isActive, isPending, isTransitioning }) => {
                        return {
                        borderRadius: 8,
                        backgroundColor: isActive ? "#996de3" : "#161315",
                        };
                    }}key = {i}>
                    <button  
                        className={styles.playerButton} 
                        onClick={handleChangePlayer} 
                        name={i} 
                    >
                        {player.player_name}
                    </button></NavLink>
                })}
            </div>

                <Outlet/>
            
        </div>
    )
}

export default PlayerPage;

//{<DisplayWindow player = {players[activePlayer]}/>   }    