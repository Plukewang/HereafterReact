import React, { useEffect } from "react";
import { useState } from "react";
import styles from '../../../styles/PlayerDisplay/DisplayWindow.module.css';
import DisplayHealthBar from "./DisplayHealthBar";
import DisplayFocusBar from "./DisplayFocusBar";
import DisplayStatCheck from "./DisplayStatCheck";
import DisplayDiceRoll from "./DisplayDiceRoll";
import DisplayEffectsTracker from "./DisplayEffectsTracker";

function DisplayWindow(props){//currently placeholder display window
    //takes player object and turns its stats into an array (stats are 3 lettered objects always)
    const [checkBtns, setCheckBtns] = useState([]);
    const [colorBtns, setColorBtns] = useState([]);
    const [check, setCheck] = useState([0, ""]);
    const [health, setHealth] = useState(5);

    const iconsSrcs = [
    "../../color_icons/Depth.png",
    "../../color_icons/Instinct.png",
    "../../color_icons/Agility.png",
    "../../color_icons/Physique.png",
    "../../color_icons/Precision.png",
    "../../color_icons/Level.png",
    "../../color_icons/Intelligence.png"];

    const colorSrcs = [
    "../../element_icons/font.png",
    "../../element_icons/flame.png",
    "../../color_icons/Agility.png",
    "../../element_icons/still.png",
    "../../color_icons/Precision.png",
    "../../color_icons/Level.png",
    "../../color_icons/Intelligence.png"
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
        if(props.player){
            temp = Object.entries(props.player).filter(x=>{
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


    },[props.player]);

    function handleSubmit(e){
        e.preventDefault();
        setCheck([Number(e.target["1"].value)+Math.floor(Math.random()*6),e.target["1"].name]);
    }


    
  
    return(
        //TODO: Fix placeholder portraits.
        <div className={styles.displayContainer}>

            <div className={styles.displayPortrait}>
                <img src = "../../color_icons/Agility.png" className={styles.displayPortraitIMG} alt = "placeholder" />
                <div className={styles.displayPortraitIcon}>

                </div>    
            </div>

            <div className={styles.displayMain}>

                <div className ={styles.playerBars}>
                    <DisplayHealthBar hp = {health}/>
                </div>  

                <DisplayFocusBar focus = "1"/>

                <div className={styles.statChecks}>
                    {
                        //TODO: add new icon images for the elements. What the hell are the types doing there? Check on that.
                    }
                    {checkBtns.map((stat, i)=>{
                        return <DisplayStatCheck key = {i} name = {stat[0]} value = {stat[1]} source = {stat[2]} background = {colorList[i]} type = "diamond" click={handleSubmit}/>
                    })}
                    <div style={{flexBasis: "100%", height: "0"}}></div>
                    {colorBtns.map((stat,i)=>{
                        return <DisplayStatCheck key = {i} name = {stat[0]} value = {stat[1]} source = {colorSrcs[i]} background = {colorList[i]} type = "circle" click={handleSubmit}/>
                    })}
                </div>  
                {
                    //this dice roll needs work on animations.
                }
                <DisplayDiceRoll roll = {check[0]} name = {check[1]}/>
                <DisplayEffectsTracker/>
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