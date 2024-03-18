import React from "react";
import { useState } from "react";
import styles from "../../../styles/Forms/BlogForm.module.css";
import axios from "axios";


function BlogForm(props){
    const [add, setAdd] = useState(//for changing which buttons and fields are visible
        {
            add: styles.visible,
            submit: styles.hidden,
        }
    );
    const [status, setStatus] = useState('');

    const [message, setMessage] = useState(''); 

    const handleSubmit = async (e) => {

        e.preventDefault();
        setStatus('loading');
        
        setMessage('');
        
        
        const finalFormEndpoint = e.target.action;
        
        const data = Array.from(e.target.elements)
        .filter((input) => input.name)
        .reduce((obj, input) => Object.assign(obj, { [input.name]: input.value }), {});
        
        try{    

            const result = await axios.post(finalFormEndpoint, data, {headers: {'content-type': 'application/x-www-form-urlencoded'}});

            setMessage("Added Post.");
            setStatus('Success.');  
            
            props.update();
            
            
    
        }catch(err){
            console.error(err);
        }
        }


    function handleClick(event){
        let name = event.target.name;

        if(name === "add"){
            setAdd({
                add: styles.hidden,
                submit: styles.visible,
            });
            event.preventDefault();
        }else {
            setAdd({
                add: styles.visible,
                submit: styles.hidden,
            });
        }

        
    }   


    return(
        <div className={styles.formContainer}>
            <form className={styles.addBlogForm} action="http://localhost:8080/blog/post" method="Post" onSubmit={handleSubmit}>
                <textarea name = "title" className ={add.submit} placeholder="Title here...">

                </textarea>

                <textarea name = "post" className ={add.submit} placeholder="Your post here...">

                </textarea>
                
                <input type="submit" name = "add" onClick={ handleClick}  className={add.add} value = "Add Post"/>
                
                
                <button type="submit" name = "submit" onClick = {handleClick}  className ={add.submit} value = "Submit Post">Submit</button>
                
                

            </form>
            <button name = "cancel" onClick = {handleClick}  className ={add.submit}>Cancel</button>
        </div>
    )
}

export default BlogForm;