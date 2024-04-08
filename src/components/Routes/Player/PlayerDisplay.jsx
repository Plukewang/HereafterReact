import React from "react";
import styles from "../../../styles/Page.module.css";
import { useState, useEffect } from "react";
import DisplayWindow from "./PlayerDisplayWindow/DisplayWindow";

import axios from "axios";

    

function PlayerPage(){
    const [players, setPlayers] = useState([]);
    const [activePlayer, setActivePlayer] = useState(0);
    const [activeButtons, setActiveButtons] = useState([])

    function handleChangePlayer(e){
        setActivePlayer(e.target.name);
    }
    

    useEffect(()=>{
        async function fetchPlayerData() {//fetch data from backend api
            try {
                const result = await axios.get("https://hereafterproject.onrender.com/players") ;
                setPlayers(result.data);
                
                
            } catch (err) {
                console.error(err);
            }
        }
        fetchPlayerData();
    },[]);


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
                    return <button key = {i} className={activeButtons[0]? activeButtons[i].active:styles.playerButton} onClick={handleChangePlayer} name={i} highlight = {activePlayer}>{player.player_name}</button>
                })}
            </div>

            <DisplayWindow player = {players[activePlayer]}/>       

        </div>
    )
}

export default PlayerPage;

