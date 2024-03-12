import React from "react";
import { useState } from "react";
import styles from '../../../styles/PlayerDisplay/DisplayWindow.module.css';
import DisplayHealthBar from "./DisplayHealthBar";
import DisplayFocusBar from "./DisplayFocusBar";
import DisplayStatCheck from "./DisplayStatCheck";

function DisplayWindow(){//currently placeholder display window
    
    return(
    
        <div className={styles.displayContainer}>
            <div className={styles.displayPortrait}>
                <img src = "../../color_icons/Agility.png" className={styles.displayPortraitIMG} alt = "placeholder" />
                <div className={styles.displayPortraitIcon}>
            </div>
                
            </div>

            <div className={styles.displayMain}>
                <div  className ={styles.playerBars}>
                <DisplayHealthBar/>
                </div>
                
                <DisplayFocusBar focus = "5"/>
                <DisplayStatCheck name = "lorem" value = "15"/>
            </div>
        </div>

    )
}

export default DisplayWindow;