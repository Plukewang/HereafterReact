import React from "react";
import { useState, useEffect } from "react";
import styles from "../../../../styles/PlayerDisplay/DisplayEffectsTracker.module.css";
import axios from "axios";

function DisplayEffectsTracker(){
    const [effects, setEffects] = useState([]);
    const [hoverEffect, setHoverEffect] = useState(0);
    const [commonEffects, setCommonEffects] = useState([]);
    //fetch the actual common effects.
    useEffect(()=>{
        const fetchEffects = async ()=>{
            const result = await axios.get("https://hereafterproject.onrender.com/players/effects");
            setCommonEffects(result.data) ;
        }
        fetchEffects();

    },[]);
    //This is for deleting an effect.
    function handleClick(e){
        
        setEffects(effects.filter((effect,i)=>{
            return i != e.target.name;
        }))
    }
    //for mouseover on an effect. Displays the effect's description on the right.
    function handleMouseOver(e){
        console.log(e.target.id)
        setHoverEffect(e.target.id);
    }

    //add an effect
    function handleSubmit(e){
        e.preventDefault();
        setEffects([...effects, {name: e.target["0"].value, description: e.target["1"].value}]); 
    }

    return (
        <div className={styles.effectsTracker}>
            <div className={styles.effectsContainer}>
                {
                    effects.map((effect,i)=>{
                        //Effects with hover showcase and aa way to remove the effect. works fine for now.
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
                    <div style={{display:"flex", width: '100%'}} >
                    {
                            commonEffects.length && commonEffects.map((x,i)=>{
                                return <form className={styles.effectForm}  onSubmit={handleSubmit}>
                                    <input type='hidden' name = "effectName" value = {x.name}/>
                                    <input type='hidden' name = "effectDescription" value={x.description} />
                                    <button type = "submit" style={{width: 100}}>{x.name}</button>
                                </form>
                            })
                        }
                </div>
                
            </div>
            <div className={styles.effectsDescription} >
                <p>
                    {effects[hoverEffect]? effects[hoverEffect].description : ""}
                </p>
            </div>

            
        </div>
    )
}

export default DisplayEffectsTracker;