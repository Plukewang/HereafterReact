import { useState } from "react";
import { Tooltip } from "@mui/material";
import {List, ListItem} from "@mui/material";
import styles from "../../../../styles/PlayerDisplay/DisplayWindow.module.css";
import inventoryStyle from "../../../../styles/PlayerDisplay/DisplayInventory.module.css"
import { useLoaderData } from "react-router-dom";
import axios from "axios";


export default function DisplayInventory(props){
    const items = Array(30).fill("");

    const inventory = props.inv;

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
                }}>

                    {
                        inventory.map((x)=>{
                            return <div className={inventoryStyle.itemIcon} key = {x.item_id}>
                                    <Tooltip title={
                                        <div className={inventoryStyle.itemHover}>
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
                                        }>
                                        <img src={x.item_icon} />
                                    </Tooltip>  
                                    </div>
                        })
                    }
                
            </List>

        </div>

    )
}