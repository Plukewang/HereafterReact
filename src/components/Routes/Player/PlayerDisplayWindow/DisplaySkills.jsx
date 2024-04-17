import { List, ListItem, Tooltip } from '@mui/material';
import { useState, useEffect } from 'react'
import styles from '../../../../styles/Compendium.module.css';
import inventoryStyle from '../../../../styles/PlayerDisplay/DisplayInventory.module.css';
import Fuse from 'fuse.js';
import Card from "../../Compendium/Card/Card";

export default function(props){
    const [search,setSearch] = useState("");
    const [cards,setCards] = useState(props.skills.length>0?props.skills:[]);
    //syncing search bar
    const handleChange = (e)=>{
        if(search!=e.target.value)
        setSearch(e.target.value)
    }
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

    //search bar query sync     
    useEffect(()=>{ 
        const fuse = new Fuse(props.skills, fuseOptions);

        if(search == "") setCards(props.skills);
        else setCards(fuse.search(search).map(x=>{
            return x.item;
        }))
    },[search])


    return(

    <div className={styles.compendiumContainer} style={{width: '100%'}}>

        <div className={styles.compendiumDisplay} style={{width: '100%'}}>
            <div className={styles.compendiumSearchBar} >
                <input type="text" placeholder="Search for a card..." onChange={handleChange}/>
            </div>
            <div className={styles.compendiumCards}>
                <List style={{width: "100%", maxHeight: 500, overflow: 'auto', justifyContent: "left", flexWrap:'wrap'}}>
                    {//individual cards. Wonky way to get the clicks to work but it works. shrug.
                        props.skills.map((card, i)=>{
                        return <ListItem
                        key={i}
                        style={{
                            width: 200, 
                            height: 300,
                            padding: 0,
                            margin: 5}}>
            
                                <Card identifier = {i} 
                                    skillType = {card.skill_type} 
                                    skillCost = {card.skill_cost} 
                                    skillName = {card.skill_name}
                                    skillDescription = {card.skill_description}
                                    skillIcon = {card.skill_icon}
                                />
                                
                        </ListItem>
                    })}
                </List>
            </div>
        </div>
        </div>);
}