import React from "react";
import styles from "../../../styles/Page.module.css";
import { useState, useEffect } from "react";
import DisplayWindow from "./PlayerDisplayWindow/DisplayWindow";
import { Link, Outlet, useLoaderData } from "react-router-dom";
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
    const [activeButtons, setActiveButtons] = useState([])
    

    const players = useLoaderData();

    function handleChangePlayer(e){
        setActivePlayer(e.target.name);
    }


    useEffect(()=>{
        if(players[0]){
            setActiveButtons(Array(players.length).fill({active: styles.playerButton}).map((x,i)=>{
                
                if(i==activePlayer){
                    return {active: styles.activePlayerButton};
                }
                else return {active: styles.playerButton};
            }));
        }
    },[activePlayer, players])

    return (
        <div className = {styles.background}>

            <h1>Player Pages</h1>       
            <div className={styles.changePlayerButtons}>
                {players.map((player,i)=>{
                    return <Link to={`player/${i+1}`} key = {i}>
                    <button  
                        className={activeButtons[0]? activeButtons[i].active:styles.playerButton} 
                        onClick={handleChangePlayer} 
                        name={i} 
                        highlight = {activePlayer}
                    >
                        {player.player_name}
                    </button></Link>
                })}
            </div>

                <Outlet/>
            
        </div>
    )
}

export default PlayerPage;

//{<DisplayWindow player = {players[activePlayer]}/>   }    