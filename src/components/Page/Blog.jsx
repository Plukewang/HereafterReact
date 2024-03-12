import React from "react";
import styles from "../../styles/Page.module.css";

function Blog(){
    return (
        <div className = {styles.background}>

            <h1>Blog</h1>
            <h2>Updates Weekly!</h2>
            <div>
                
               
                <div className = {styles.right} >
                    <h2 style={{textAlign: "left"}}>What is The Hereafter?</h2>
                    <h3>Date</h3>
                    <p style={{width: "100%"}}>The Hereafter is an online virtual table-top-like role-playing game with a rich and complex world of lore and esoterica. 
                    As a player, you’ll explore and take part in creating the stories that revolve around a world that sits at the confluence of science, fantasy, and folklore. 
                    Players participate in either single-player sessions with the GM focused on developing and engaging with the characters of the world or in coordinated group 
                    activities through activities like raids and incursions. </p><br/>

                    <p style={{width: "100%"}}>The Hereafter is at its core a role-playing experience and a world-building project. Within this wiki you will 
                    find resources for both of these two core aspects of the project—character stories, vignettes of lore, gameplay mechanics, 
                    and much more. How each player chooses to engage with The Hereafter is based off of their own personal creativity and preferences:
                    immerse yourself in the world and learn all of its intricacies and its characters’ rich lives, or become a master duelist with an ever-growing arsenal of
                    techniques and implements; the choice is yours.
                    </p>
                </div>
                
            </div>
            
            

        </div>
    )
}

export default Blog;