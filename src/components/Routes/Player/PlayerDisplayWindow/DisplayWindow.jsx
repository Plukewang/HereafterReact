import React, { useEffect } from "react";
import { useState } from "react";
import styles from '../../../../styles/PlayerDisplay/DisplayWindow.module.css';
import DisplayHealthBar from "./DisplayHealthBar";
import DisplayFocusBar from "./DisplayFocusBar";
import DisplayStatCheck from "./DisplayStatCheck";
import DisplayDiceRoll from "./DisplayDiceRoll";
import DisplayEffectsTracker from "./DisplayEffectsTracker";
import DisplayTraitsList from "./DisplayTraitsList";
import DisplayInventory from "./DisplayInventory";
import DisplaySkills from "./DisplaySkills";
import DisplayAdvantage from "./DisplayAdvantage";
import Loading from "../../Loading";
import parseBonus from "../../../calc/ParseBonuses";

import {Link, Outlet} from 'react-router-dom';
import { useLoaderData } from "react-router-dom";
import axios from "axios";


export async function loader({params}){
    try {
        const result = await axios.get(`https://hereafterproject.onrender.com/player/${params.playerid}`) ;
        return result.data;
    } catch (err) {
        console.error(err);
    }
}

function DisplayWindow(props){//currently placeholder display window
    //takes player object and turns its stats into an array (stats are 3 lettered objects always)
    const [checkBtns, setCheckBtns] = useState([]);
    const [colorBtns, setColorBtns] = useState([]);
    const [check, setCheck] = useState([0, ""]);
    const [health, setHealth] = useState(5);
    const [bonuses, setBonuses] = useState(new Map());
    //0 are stats, 1 are the items [0][0] for the player's stats. [1] for the player's items.
    const player = useLoaderData()[0][0];
 
    const iconsSrcs = [
    "../../color_icons/Depth.png",
    "../../color_icons/Instinct.png",
    "../../color_icons/Agility.png",
    "../../color_icons/Physique.png",
    "../../color_icons/Precision.png",
    "../../color_icons/Level.png",
    "../../color_icons/Intelligence.png"];

    const colorSrcs = [
    "../../element_icons/red.png",
    "../../element_icons/orange.png",
    "../../element_icons/yellow.png",
    "../../element_icons/green.png",
    "../../element_icons/blue.png",
    "../../element_icons/indigo.png",
    "../../element_icons/purple.png"
    ];

    const colorList = [
        "#f10048",
        "#c24300",
        "#ffc500",
        "#006b00",
        "#1682ab",
        "#2905b4",
        "#8617ba",
    ]


    //for properly loading async sql retrieval
    useEffect(()=>{
        let temp = [];
        let h = health;
        if(player){
            temp = Object.entries(player).filter(x=>{
                return x[0].length===3;
            });
            temp.map((x,i)=>{
                x.push(iconsSrcs[i]? iconsSrcs[i]: "")
                return x;
            })
            let h = temp.filter(x=>{
                return x[0] === 'phy';
            });
            setHealth(h[0][1])
            


        }
        let stats = temp.slice(0,7); //1st half physical stats
        let colors = temp.slice(7);//2nd half color affinities
 
        setCheckBtns(stats);
        setColorBtns(colors);

        
        
    },[player]);


    function handleSubmit(e){
        e.preventDefault();
        let bon = bonuses.get(e.target['1'].name)? bonuses.get(e.target['1'].name) : 0;
        bon+= bonuses.has('eff') ? bonuses.get('eff') : 0;
        setCheck([Number(e.target["1"].value)+Math.floor(Math.random()*6)+bon, e.target["1"].name]);
    }

    const handleActiveTrait = (e) =>{
        //id is a list of effects [(XXX)(Y)(Z)] [(XXX)(Y)(Z)] [(XXX)(Y)(Z)] ... etc.
        //returns a parsed list of objects with the stat attribute name and bonus 
        let bon = parseBonus(e.target.id);
        //hashmap to store the new state
        let hash = new Map(bonuses);
        //we turn the object entries into a tuple with [0] being the name and [1] being the bonus for ease of reading
        const bonusStats = bon.map(x=>{
            return Object.entries(x)[0];
        })

        for(const bonus of bonusStats){
            //if the bonus already exists, we add to it, if it doesn,t ew add it to the map
            if(hash.has(bonus[0])){
                hash.set(bonus[0],hash.get(bonus[0])+bonus[1]);
            }else{
                hash.set(bonus[0],bonus[1]);
            }
        }

        setBonuses(hash);
    }
    const removeActiveTrait = (e) =>{
        //same as above but removal
        let bon = parseBonus(e.target.id);
        let hash = new Map(bonuses);
        const bonusStats = bon.map(x=>{
            return Object.entries(x)[0];
        })

        for(const bonus of bonusStats){
            //this is the only step that differs.
            if(hash.has(bonus[0])){
                hash.set(bonus[0],hash.get(bonus[0])-bonus[1]);
            }
        }
        
        setBonuses(hash);
    }
  
    return(
        //TODO: Fix placeholder portraits.
        <div className={styles.displayContainer}>
            <div className={styles.displayPortrait}>
                <h2>{player && player.player_name}</h2>
                <img src = {player && player.player_img} className={styles.displayPortraitIMG}
                 alt = "player card" 
                 style={{border: `2px solid #bd3366`, borderRadius: 8}}/>
                <div className={styles.displayPortraitIcon}>
                <DisplayAdvantage/>
                </div>
                
            </div>

            <div className={styles.displayMain}>

                <div className ={styles.playerBars}>
                    <DisplayHealthBar hp = {health}/>
                </div>  

                <DisplayFocusBar focus = "1"/>

                <div className={styles.statChecks}>
                    {checkBtns.length=== 0 ? <Loading/> :checkBtns.map((stat, i)=>{
                        return <DisplayStatCheck 
                        key = {i} 
                        name = {stat[0]} 
                        value = {stat[1]} 
                        source = {stat[2]} 
                        background = {colorList[i]} 
                        type = "diamond" 
                        click={handleSubmit}
                        bonus = { bonuses.has(stat[0]) ? bonuses.get(stat[0]) : '0'}
                        />
                    })}
                    <div style={{flexBasis: "100%", height: "0"}}></div>
                    {colorBtns.map((stat,i)=>{
                        return <DisplayStatCheck key = {i} 
                            name = {stat[0]} 
                            value = {stat[1]} 
                            source = {colorSrcs[i]} 
                            background = {colorList[i]} 
                            type = "circle" 
                            click={handleSubmit}
                            bonus = { bonuses.has(stat[0]) ? bonuses.get(stat[0]) : '0'}    
                            />
                        
                    })}
                </div>  
                {
                    //this dice roll needs work on animations.
                }
                {
                    checkBtns.length>0 && 
                    <DisplayDiceRoll roll = {check[0]} name = {check[1]} bonuses = {bonuses}/>}

                <DisplayEffectsTracker />
            </div>
            
            <DisplayTraitsList traits = {useLoaderData()[2]} click = {handleActiveTrait} clickAgain = {removeActiveTrait}/>

            <DisplayInventory inv = {useLoaderData()[1]} click = {handleActiveTrait} clickAgain = {removeActiveTrait}/>

            <div className={styles.displayPortrait}></div>

            <div className={styles.displayMain}
                style={{
                backgroundColor: '#381925',
                width: '59.5%',
                margin: '10px',
                border: '2px solid #381925',
                borderRadius: '8px'}}
            >
                <DisplaySkills skills = {useLoaderData()[3]}/>
            </div>

        </div>
        

    )
}

export default DisplayWindow;

/* 
    <div className={styles.statChecks}>
                    {checkBtns.map(stat=>{
                        return <DisplayStatCheck name = {stat[0]} value = {stat[1]} />
                    })}
                </div>  
    */