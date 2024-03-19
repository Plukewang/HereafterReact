import React from "react";
import styles from "../../styles/Page.module.css";
import Story from "../Page/Story";


function Stories(){
    

    return (
        <div className={styles.background}>
            <h1>Stories</h1>

            <div className={styles.center}>
                    <h2>Explore the lore of the Hereafter</h2>
                    <p>Whether it's the daily lives of the people in the vertex world or the ancient mythos of civilizations long past, discover it here.</p>
                    
            </div>
                <h1>Newest Releases</h1>
                <Story />

            <div>
                <h2>Find a collection</h2>
            </div>
        </div>
    )
}

export default Stories;