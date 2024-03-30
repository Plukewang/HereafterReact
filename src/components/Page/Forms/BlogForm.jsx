import React from "react";
import { useState} from "react";
import styles from "../../../styles/Forms/BlogForm.module.css";
import axios from "axios";


function BlogForm(props){
    const [add, setAdd] = useState(//for changing which buttons and fields are visible
        {
            add: styles.visible,
            submit: styles.hidden,
        }
    );


    const handleSubmit = async (e) => {

       
        const finalFormEndpoint = e.target.action;
        
        const data = Array.from(e.target.elements)
        .filter((input) => input.name)
        .reduce((obj, input) => Object.assign(obj, { [input.name]: input.value }), {});
        
        try{    
            const result = await axios.post(finalFormEndpoint, data, {headers: {'content-type': 'application/x-www-form-urlencoded'}});
  
   
            
            
    
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
        }else{setAdd({
            add: styles.visible,
            submit: styles.hidden,
        });
    }
        
    }   


    return(
        <div className={styles.formContainer}>
            <form className={styles.addBlogForm} action="https://hereafterproject.onrender.com/blog/post" method="Post" onSubmit={handleSubmit}>
                <input name = "title" className ={add.submit} placeholder="Title here..."/>

                <div className={styles.break}></div>
                        
                <textarea name = "post" className ={add.submit} placeholder="Your post here..."></textarea>

                <div className={styles.decideEdit}>
                    <button type="button" name = "add" onClick={ handleClick}  className={add.add} value = "Add Post">Add Post</button>
                    <button type="submit" name = "submit" onClick = {handleClick}  className ={add.submit} value = "Submit Post">Submit</button>
                    <button type="button" name = "cancel" onClick = {handleClick}  className ={add.submit}>Cancel</button>
                </div>
                
                
                

            </form>
            
        </div>
    )
}

export default BlogForm;