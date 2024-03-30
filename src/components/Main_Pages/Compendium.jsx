import React from "react";
import {useState, useEffect, useRef} from "react";
import page from "../../styles/Page.module.css";
import styles from "../../styles/Compendium.module.css";
import Card from "../Card/Card"; 
import axios from "axios";
import Fuse from "fuse.js";

const Compendium = ()=>{
    const [cards, setCards] = useState([]);
    const [activeCard, setActiveCard] = useState(0);

    const fuseOptions = {
        // isCaseSensitive: false,
        // includeScore: false,
        // shouldSort: true,
        // includeMatches: false,
        // findAllMatches: false,
        // minMatchCharLength: 1,
        // location: 0,
        // threshold: 0.6,
        // distance: 100,
        // useExtendedSearch: false,
        // ignoreLocation: false,
        // ignoreFieldNorm: false,
        // fieldNormWeight: 1,
        keys: [
            'skill_name',
        ]
    };
    //api backend call
    async function fetchCards() {//fetch data from backend api
        try {
            const result = await axios.get("https://hereafterproject.onrender.com/compendium") ;
            setCards(result.data);
        } catch (err) {
            console.log(err);
        }
    }
    //show the card's description.
    const handleClick = (e) =>{
        setActiveCard(e.target.parentNode.id);
    }
    //for synching to database
    useEffect(()=>{
        fetchCards();
    },[]);
    
    const fuse = new Fuse(cards, fuseOptions);

    const queryCards = (q)=>{
        if(!q){
            return [];
        }
       return fuse.search(q)[0];
    }
    
    return(
        <div className={page.background}>
            <div>
                <h1>The Skills Compendium</h1>
                <h2>Look up various skills, actions, and more!</h2>
            </div>
            <div className={styles.compendiumContainer}>
                <div className={styles.compendiumDisplay}>
                        {//individual cards. Wonky way to get the clicks to work but it works. shrug.
                            cards.map((card, i)=>{
                            return <div key = {i} name ={i}><Card identifier = {i} click = {handleClick} skillType = {card.skill_type} skillCost = {card.skill_cost} skillName = {card.skill_name}/></div>
                        })}
                </div>
                <div className={styles.compendiumSearch}>
                    <h2>
                        {activeCard? cards[activeCard].skill_name:""}
                    </h2>
                    <p>
                        {activeCard? cards[activeCard].skill_description:""}
                    </p>
                    <h3>
                        {cards[0] ? queryCards('Blink').item.skill_description: ""}
                    </h3>
                </div>
            </div>
            
        </div>
    )
}

export default Compendium;