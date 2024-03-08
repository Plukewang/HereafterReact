import React from "react";
import { useState } from "react";
import styles from '../../../styles/PlayerDisplay/DisplayWindow.module.css';
import DisplayHealthBar from "./DisplayHealthBar";

function DisplayWindow(){//currently placeholder display window
    
    return(
    
        <div className={styles.displayContainer}>
            <div className={styles.displayPortrait}>
                <img src = "../../color_icons/Agility.png" className={styles.displayPortraitIMG} alt = "placeholder" />
                <div className={styles.displayPortraitIcon}>
            </div>
                
            </div>

            <div className={styles.displayMain}>
                <DisplayHealthBar/>
            </div>
        </div>

    )
}

export default DisplayWindow;