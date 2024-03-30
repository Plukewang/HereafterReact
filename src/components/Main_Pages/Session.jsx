import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../../styles/Page.module.css";
import sess from "../../styles/Session.module.css"


const SessionManager = ()=>{
    const [session, setSession] = useState([]);

   

    const handleSubmit = async (e)=>{
        //prevent reloading of page
        e.preventDefault();

        //endpoint to the session page
        const finalFormEndpoint = e.target.action;
        //convert into urlencoded body
        
        const data = Array.from(e.target.elements)
        .filter((input) => input.name)
        .reduce((obj, input) => Object.assign(obj, { [input.name]: input.value }), {});

        try{    
            console.log(data);
            const result = await axios.post(finalFormEndpoint, data, {headers: {'content-type': 'application/x-www-form-urlencoded'}, withCredentials:true});      
            setSession(result.data);
            console.log(result.data)
        }catch(err){
            console.error(err);
        }
    }

    const fetchSession = async()=>{
        try{    
   
            const result = await axios.get("http://localhost:8080/sess",{headers: {'content-type': 'application/x-www-form-urlencoded'}, withCredentials:true});      
            setSession(result.data);
            console.log(result.data)
        }catch(err){
            console.error(err);
        }
    }

    useEffect(()=>{
        fetchSession();
    },[]);
    
    return (
        <div className={styles.background}>
            <h1>Does The Black Moon Howl?</h1>
            <form onSubmit={handleSubmit} action = "http://localhost:8080/session" method="post">
                <input name = "password" type="text"/>
                <input name = "username" type="hidden" value="the one"/>
                <button type="submit">Submit</button>
            </form>
            <div className={sess.container}>
                <h1>{session.message}</h1>
            </div>
            

        </div>
    )
}
export default SessionManager;
