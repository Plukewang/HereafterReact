import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../../styles/Page.module.css";
import sess from "../../styles/Session.module.css"


const SessionManager = ()=>{
    const [session, setSession] = useState([]);
    let now = new Date();
   

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
            
            const result = await axios.post(finalFormEndpoint, data, {headers: {'content-type': 'application/x-www-form-urlencoded'}, withCredentials: true});
 
            setSession(result.data);
            //console.log(result.data)

            let token = result.data;

            if(token.message === "Success."){
                localStorage.clear();
                localStorage.setItem('user-token', JSON.stringify({token: token.message, expiry: now.getTime() + 1000*60*60}));
                setTimeout(()=>{
                    localStorage.clear();
                }, 1000*60*60);

            }else localStorage.clear();
        }catch(err){
            console.error(err);
        }
    }

    
    
    
    return (
        <div className={styles.background}>
            <h1>Does The Black Moon Howl?</h1>
            <h2>For the GM</h2>
            <form className={sess.answerForm} onSubmit={handleSubmit} action = "https://hereafterproject.onrender.com/session" method="post">
                <input className={sess.answerInput} name = "password" type="text" autoFocus={true} autoComplete="off"/>
                <input name = "username" type="hidden" value="the one"/>
                <button className={sess.answerButton} type="submit">Answer</button>
            </form>
            {
                localStorage.getItem('user-token') && JSON.parse(localStorage.getItem('user-token')).expiry > now.getTime() ? <div className={sess.container}>
                    <h1>Welcome.</h1>
                    <h2>New functionalities are now available.</h2>
                    <h2>Time Remaining: {JSON.parse(localStorage.getItem('user-token')).expiry - now.getTime()}</h2>
                </div> : <h1>Unauthorized.</h1>
            }
            
            

        </div>
    )
}
export default SessionManager;
