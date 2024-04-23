import React from "react";
import { useState, useEffect} from "react";

import styles from "../../../../styles/PlayerDisplay/DisplayDiceRoll.module.css" 
import { Tooltip } from "@mui/material";
export default DisplayDiceRoll;

function DisplayDiceRoll(props){
    const [roll, setRoll] = useState(props.roll);
    //const dice = useRef();

    useEffect(()=>{
        setRoll(props.roll)
    },[props.roll])


    return (
        <div className={styles.dice}>
            <Tooltip title={'Effectiveness'}>
                <p>{props.bonuses? props.bonuses.get('eff'): ''}</p>
            </Tooltip>
            
            
            <h1>{roll}</h1>
            <Tooltip title={'Defense'}>
                <p>{props.bonuses? props.bonuses.get('def'): ''}</p>
            </Tooltip>
        </div>
    )
}
/*<p>{props.name.toUpperCase()}</p>*/