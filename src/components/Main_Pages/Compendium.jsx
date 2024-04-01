import React from "react";
import {useState, useEffect} from "react";
import page from "../../styles/Page.module.css";
import styles from "../../styles/Compendium.module.css";
import Card from "../Card/Card"; 
import axios from "axios";
import Fuse from "fuse.js";
import {Form, useLoaderData, Outlet, Link, redirect} from "react-router-dom";
import List from "@mui/material/List";
import  ListItem  from "@mui/material/ListItem";

export async function compendiumLoader(){
    try {
        const result = await axios.get("https://hereafterproject.onrender.com/compendium") ;
        return result.data;
    } catch (err) {
        console.error(err);
    }
}


const Compendium = ()=>{
    const compendium = useLoaderData();
    const [cards, setCards] = useState([]);
    const [activeCard, setActiveCard] = useState(0);
    const [search, setSearch] = useState("");

    
    

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
    
    //show the card's description via route.
    const handleClick = (e) =>{
        setActiveCard(e.target.parentNode.id);
    }
    //syncing search bar
    const handleChange = (e)=>{
        if(search!=e.target.value)
        setSearch(e.target.value)
    }

    //search bar query sync     
    useEffect(()=>{ 
        const fuse = new Fuse(compendium, fuseOptions);

        if(search == "") setCards(compendium);
        else setCards(fuse.search(search).map(x=>{
            return x.item;
        }))
    },[search])
    

   
    return(
        <div className={page.background}>
            <div>
                <h1>The Skills Compendium</h1>
                <h2>Look up various skills, actions, and more!</h2>
            </div>
            <div className={styles.compendiumContainer}>
                
                <div className={styles.compendiumDisplay}>

                    <div className={styles.compendiumSearchBar}>
                        <input type="text" placeholder="Search for a card..." onChange={handleChange}/>
                     
                    </div>

                    <div className={styles.compendiumCards}>
                        <List style={{width: "100%", maxHeight: 1000, overflow: 'auto', justifyContent: "left"}}>
                            {//individual cards. Wonky way to get the clicks to work but it works. shrug.
                                cards.map((card, i)=>{
                                return <ListItem
                                 style={{
                                    width: 200, 
                                    height: 300,
                                    padding: 0}}>
                                    <Link to={`${card.id}`} className={styles.compendiumCard} key = {i} name ={i}>
                                        <Card identifier = {i} 
                                            click = {handleClick} 
                                            skillType = {card.skill_type} 
                                            skillCost = {card.skill_cost} 
                                            skillName = {card.skill_name}
                                            skillDescription = {card.skill_description}
                                        />
                                    </Link>
                                </ListItem>
                        })}
                        </List>
                    </div>
                        
                </div>
                <div className={styles.compendiumSearch}>
                    <Outlet />
                    
                </div>
            </div>
            
        </div>
    )
}

export default Compendium;

/* {//individual cards. Wonky way to get the clicks to work but it works. shrug.
                            cards.map((card, i)=>{
                                return <Link to={`${card.id}`} className={styles.compendiumCard} key = {i} name ={i}>
                                <Card identifier = {i} 
                                click = {handleClick} 
                                skillType = {card.skill_type} 
                                skillCost = {card.skill_cost} 
                                skillName = {card.skill_name}
                                skillDescription = {card.skill_description}
                                /></Link>
                        })} */

/* old code 
//api backend call
    async function fetchCards() {//fetch data from backend api
        try {
            const result = await axios.get("https://hereafterproject.onrender.com/compendium") ;
            setCards(result.data);
        } catch (err) {
            console.log(err);
        }
    }
    //for syncing to database
    useEffect(()=>{
        fetchCards();
    },[]); */