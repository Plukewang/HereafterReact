import { useState } from "react";
import { Tooltip } from "@mui/material";
import {List, ListItem} from "@mui/material";
import styles from "../../../../styles/PlayerDisplay/DisplayWindow.module.css";
import inventoryStyle from "../../../../styles/PlayerDisplay/DisplayInventory.module.css"
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import parseBonus from "../../../calc/ParseBonuses";

export default function DisplayInventory(props){
    const items = Array(30).fill("");
    const [activeItems, setActiveItems] = useState(new Set);
    const inventory = props.inv;

    const handleActiveItem = (e) =>{
        console.log(e.target.id)
    }

    const handleActiveClick = (e) =>{
        console.log(e.target.id); 
        let hash = new Set(activeItems);
        
        if(activeItems.has(e.target.id)){
            hash.delete(e.target.id);
            setActiveItems(hash);
            props.clickAgain(e);
            
        }else{
            hash.add(e.target.id);
            setActiveItems(hash); 
            
            props.click(e);
        }
        
    }

    return(
        <div className={styles.displayMain} style={{
            backgroundColor: '#381925',
            width: '59.5%',
            margin: '10px',
            border: '2px solid #381925',
            borderRadius: '8px',
        }}>
            <List sx={{
                display: 'flex', 
                flexWrap: 'wrap', 
                justifyContent:'left',
                maxHeight: 200,
                overflow: 'auto',
                scrollbarColor: '#ffffff #381925',
                padding: 3,
                }}>

                    {
                        inventory.map((x)=>{
                            return <div className={inventoryStyle.itemIcon} key = {x.item_id} id = {x.item_name}>
                                    <Tooltip title={
                                        <div className={inventoryStyle.itemHover} >
                                            <h2>
                                                {x.item_name}
                                            </h2>
                                            <p>
                                                {x.item_description}
                                            </p>
                                            <p>
                                                {x.perk_1.split('|')[0]==='n/a'? '': x.perk_1.split('|')[0]}
                                            </p>
                                            <p>
                                                {x.perk_2.split('|')[0]==='n/a'? '': x.perk_2.split('|')[0]}
                                            </p>
                                            <p>
                                                {x.perk_3.split('|')[0]==='n/a'? '': x.perk_3.split('|')[0]}
                                            </p>
                                        </div>
                                        }
                                        slotProps={{
                                            tooltip: {
                                                sx: {
                                                backgroundColor: '#161315'
                                                }
                                            }
                                        }}>
                                        <img id = {(x.perk_1.split('|')[0]!='n/a' && x.perk_1.split('|')[1]) + 
                                        (x.perk_2.split('|')[0]!='n/a' && x.perk_2.split('|')[1]) + 
                                        ( x.perk_3 !='n/a'? x.perk_3.split('|')[1] : '')} src={x.item_icon} alt = {x.item_name}  onClick={handleActiveClick}/>
                                    </Tooltip>  
                                    </div>
                        })
                    }

                    {//fill out the rows in case there aren't that many items right now.
                        Array(20-inventory.length).fill('').map(x=>{
                            return <div className={inventoryStyle.itemIcon} key = {x.item_id}></div>
                        })
                    }
                
            </List>

        </div>

    )
}