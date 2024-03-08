import React from "react";
import styles from "../../styles/Page.module.css";
import Link from "../Links/Link";
import DisplayWindow from "./PlayerDisplayWindow/DisplayWindow";

import axios from "axios";

async function callAPI(){
    try{
        const test = await axios.get('http://localhost:8080/');
        console.log(test.data);
    }catch(err){console.error(err)}

}

function PlayerPage(){
    //callAPI();
    return (
        <div className = {styles.background}>

            <h1>For The Players</h1>

            <DisplayWindow/>
                
            <div className = {styles.wiki}>
                <h2>Want to learn more?</h2>
                <Link link = "https://humorous-gym-ac1.notion.site/ee538ebf992b416d9a753aee1aa71a54?v=2e7fa65159c1486b852cef33a3f18e66&pvs=4" hook = "Visit the Wiki"/>
            </div>
            
            

        </div>
    )
}

export default PlayerPage;

