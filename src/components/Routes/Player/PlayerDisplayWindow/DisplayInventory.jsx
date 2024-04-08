import { useState } from "react";
import { Tooltip } from "@mui/material";
import {List, ListItem} from "@mui/material";
import styles from "../../../../styles/PlayerDisplay/DisplayWindow.module.css";

export default function DisplayInventory(props){
    const items = Array(30).fill("");

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
                {items.map(x=>{
                    return <div style={{width: '80px', height: '80px', backgroundColor:'#161315', margin: 2, borderRadius: 8}}>
                                <p>{x}</p>
                           </div>
                })}
            </List>

        </div>

    )
}