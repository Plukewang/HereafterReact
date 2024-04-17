import React from "react";
import styles from '../../../styles/Compendium.module.css';
import { Form } from "react-router-dom";

export default function CompendiumAdd(){
    return(
        <div style = {{width:'90%'}}>
            <Form method="post">
                <input 
                    type = 'text'
                    name = 'name' 
                    placeholder="Name here"
                />
                <textarea 
                    type = 'text'
                    name = 'desc' 
                    placeholder="Description here"/>
                <input 
                    type = 'text'
                    name = 'cost'
                    placeholder="Cost here"
                />
                <div className={styles.radioGroup}>
                    <div className={styles.radio}>
                        <label for='move'>Move</label>
                        <input 
                        type = 'radio'
                        name = 'type'
                        value = 'move'
                        />
                    </div>
                    <div className={styles.radio}>
                        <label for='move'>Skill</label>
                        <input 
                            type = 'radio'
                            name = 'type'
                            value = 'skill'
                        />
                    </div>
                    <div className={styles.radio}>
                    <label for='move'>Turn</label>
                        <input 
                            type = 'radio'
                            name = 'type'
                            value = 'turn'
                            defaultChecked = 'true'
                        />
                    </div>
                </div>
                
               

                <button type="submit">Create Skill</button>
            </Form>
        </div>
    )
}