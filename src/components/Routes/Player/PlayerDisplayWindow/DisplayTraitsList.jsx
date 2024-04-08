import { useState } from "react";
import styles from '../../../../styles/PlayerDisplay/DisplayWindow.module.css';
import { List, Collapse } from "@mui/material";

export default function DisplayTraitsList(props){
    const [open, setOpen] = useState(0);

    const handleTraitClick = (e)=>{
        setOpen(e.target.value);
    }
    return (
        <div className={styles.displayPortrait}>
            
                <List sx={{width: '150px', display: "flex", flexDirection: 'column'}}>
                    <button className={open=='0' && styles.active} 
                        type = "submit" 
                        name = "Intrinsic Traits" 
                        value = "0" 
                        aria-label="intrinsic trait tab" 
                        onClick={handleTraitClick}>
                        Intrinsic Traits
                    </button>
                        <Collapse in={open=='0'} sx={{width: '100%'}}>
                            <ul>
                                <li>placeholder</li>
                            </ul>
                        </Collapse>
                    <button 
                    className={open=='1' && styles.active}
                        type = "submit"
                        name = "Extrinsic Traits" 
                        value = "1" 
                        aria-label="extrinsinc trait tab" 
                        onClick={handleTraitClick}>
                        Extrinsic Traits
                      </button>
                        <Collapse in={open=='1'}>
                            <ul>    
                                <li>placeholder</li>
                            </ul>
                        </Collapse>
                    <button
                        className={open=='2' && styles.active}
                        type = "submit"
                        name = "Special Traits"
                        value = "2"
                        aria-label="special trait tab"
                        onClick={handleTraitClick}>
                        Special Traits
                    </button>
                        <Collapse in={open=='2'}>
                            <ul>
                                <li>placeholder</li>
                            </ul>
                        </Collapse>
                </List>
            </div>
    )
}