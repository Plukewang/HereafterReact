import React from "react";
import { useState } from "react";
import styles from "../../../styles/PlayerDisplay/DisplayEffectsTracker.module.css";
function DisplayEffectsTracker(){
    const [effects, setEffects] = useState([]);
    const [hoverEffect, setHoverEffect] = useState(0);

    function handleClick(e){
        
        setEffects(effects.filter((effect,i)=>{
            return i != e.target.name;
        }))
    }

    function handleMouseOver(e){
        console.log(e.target.id)
        setHoverEffect(e.target.id);
    }


    function handleSubmit(e){
        e.preventDefault();
        setEffects([...effects, {name: e.target["0"].value, description: e.target["1"].value}]); 
    }

    return (
        <div className={styles.effectsTracker}>
            <div className={styles.effectsContainer}>
                {
                    effects.map((effect,i)=>{
                        return <div key = {i} id = {i} onMouseOver={handleMouseOver} className={styles.effectBox}>
                            <p id = {i}>{effect.name}</p>
                            <button id = {i} name={i} onClick={handleClick}>X</button>
                        </div>
                    })
                }
                <form className= {styles.effectForm} onSubmit={handleSubmit}>
                    <input name = "effectName"/>
                    <textarea name = "effectDescription" placeholder="Effect Description here" autoComplete="off" ></textarea>
                    <button type = "submit">Add Effect</button>
                </form>
            </div>
            <div className={styles.effectsDescription}>
                <p>
                    {effects[hoverEffect]? effects[hoverEffect].description : ""}
                </p>
            </div>

            
        </div>
    )
}

export default DisplayEffectsTracker;