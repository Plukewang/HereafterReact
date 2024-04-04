import React from "react";
import styles from "../../styles/Page.module.css";
import Link from "../Clickable/Link";


function Home(){
    return (
        <div className = {styles.background}>
    
            <h1>Welcome to The Hereafter.</h1>
            <h2>This is the repository for everything related to the Hereafter project.</h2>
            <div>
                
               
                <div className = {styles.left}>
                    <div className={styles.textbox}>
                        <h2>What is The Hereafter?</h2>
                        <img src = "../../pinklightning.png" alt = "placeholder"/>
                        <p >The Hereafter is an online virtual table-top-like role-playing game with a rich and complex world of lore and esoterica. 
                        As a player, you’ll explore and take part in creating the stories that revolve around a world that sits at the confluence of science, fantasy, and folklore. 
                        Players participate in either single-player sessions with the GM focused on developing and engaging with the characters of the world or in coordinated group 
                        activities through activities like raids and incursions. </p>

                        <p>The Hereafter is at its core a role-playing experience and a world-building project. Within this wiki you will 
                        find resources for both of these two core aspects of the project—character stories, vignettes of lore, gameplay mechanics, 
                        and much more. How each player chooses to engage with The Hereafter is based off of their own personal creativity and preferences:
                        immerse yourself in the world and learn all of its intricacies and its characters’ rich lives, or become a master duelist with an ever-growing arsenal of
                        techniques and implements; the choice is yours.
                        </p>    
                    </div>
                    
                </div>
                <div className={styles.right}>
                    
                    
                    <div className={styles.textbox}>
                    
                        <h2>A Vertex World</h2>
                        <img src = "../../portrait.png" alt = "placeholder"/>
                        <p>Existence is a frail and nebulous thing in the world of the Hereafter. Sat upon the edge of the cliff face that is everything that can or cannot be, the boundaries between all things are far weaker than most places, cultivating a world of people with a deep insight into the nature of their own reality. People traverse the stars on paths constructed from pure thought summoned into existence by thinking vessels and reverse the very flow of causality with technology that interfaces with the existence of the world in all its panchromatic aspects.
                        </p><p>Like the world itself, the politics, technology, and heart of The Hereafter’s civilizations rest on an uneasy vertex. Rebuilding from the near-total loss of life thousands of years prior, humanity has gone beyond their own planet, even populating the distant stars of their galaxy. However, the millennia-old legacy of human colonization is stained with macabre tragedy and unforgivable sins, buried by history and distance, but inexorably reprising to catch up with a present humanity far more ignorant and unprepared than they should be. 
                        </p><p>Everything changed for the world at large when the fabric of reality tore itself at the seams and miraculously recovered millennia ago—the same disaster that befell Earth and every other place teeming with potential life—disrupting and accelerating the slow evolution of species across the known universe. Of all the countless winners and losers of this great cataclysm, humanity found itself at its epicenter, and through this proximity quickly became a dominant force in the world at large. That dominance ended two thousand years ago, and new factions (even other humans) grasp at the chance to pick apart what remains of the old hegemony.
                        </p><p>Beyond the coming revolution of the cycle of history comes the grinding turn of the far larger wheel of fate. Here at the vertex of everything that can and cannot be, where even the highest of the Gods do not cast their gaze, an ageless promise to begin again was betrayed those millennia ago. Now, the forces and individuals vying for the fulfillment or annulment of that ageless promise have converged on our vertex world, bringing the powers and influences of their own worlds with them. The stage is set a showdown of eschatologies as the individuals struggling to create a better future ask themselves:</p><br/>
                        <p><em>"What awaits us in the hereafter?"</em></p>
                    </div>
                    
                </div>
                <div className={styles.center}>
                    <h2>Cataphasis and Apophasis</h2>
                    <p>The Hereafter’s mechanical systems are modular and built from the ground-up to also support translation from most other RPG systems. 
                    Beyond stat checks, items, and turns, tempo and technique are the core of all gameplay in The Hereafter.</p>

                    <div className = {styles.split}>
                        <div className = {styles.splitcol}>
                            <h3>Tempo</h3>
                            <p>Tempo determines the pace of action based on the context of the actual actions taking place in each turn, with turns resolving in an event-to-event style that adjusts to the speed of the action naturally. 
                            Players will fight to gain tempo through their own creativity and mastery of the turn mechanic, allowing the GM to always keep up with the pace and intensity of any encounter.</p>
                        </div>
                        <div className= {styles.splitcol}>
                            <h3>Technique</h3>
                            <p>Technique encompasses all the various actions a player may take such as attacks, spells, and even communications, and converts them into a calculable stack of interactions that can be more easily resolved on the fly.
                             Each technique expresses a novel way to interact with the gameplay mechanics on multiple levels, allowing players to customize their play style with great depth.</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className = {styles.wiki}>
                <h2>Want to learn more?</h2>
                <Link link = "https://humorous-gym-ac1.notion.site/ee538ebf992b416d9a753aee1aa71a54?v=2e7fa65159c1486b852cef33a3f18e66&pvs=4" hook = "Visit the Wiki" source = "../../color_icons/Level.png"/>
            </div>
            
            

        </div>
    )
}
export default Home;