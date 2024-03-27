import React from "react";
import {useState, useEffect, useRef} from "react";
import page from "../../styles/Page.module.css";
import styles from "../../styles/Compendium.module.css";
import Card from "../Card/Card"; 
import axios from "axios";

const Compendium = ()=>{
    const [cards, setCards] = useState([]);

    async function fetchCards() {//fetch data from backend api
        try {
            const result = await axios.get("http://localhost:8080/compendium") ;
            setCards(result.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(()=>{
        fetchCards();
    },[cards]);

    const reload = ()=>{
        fetchCards();
    }

    return(
        <div className={page.background}>
            <div>
                <h1>The Skills Compendium</h1>
                <h2>Look up various skills, actions, and more!</h2>
            </div>
            <div className={styles.compendiumContainer}>
                <div className={styles.compendiumDisplay}>
                    {cards.map((card, i)=>{
                        return <Card key = {i}/>
                    })}
                </div>
                <div className={styles.compendiumSearch}>

                </div>
            </div>
            
        </div>
    )
}

export default Compendium;