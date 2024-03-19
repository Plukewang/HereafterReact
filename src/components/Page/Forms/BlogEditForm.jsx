import React from "react";
import { useState } from "react";
import styles from "../../../styles/Forms/BlogForm.module.css";
import BlogFormStyle from "../../../styles/Forms/BlogForm.module.css"
import axios from "axios";


function BlogEditForm(props){
    const [edit, setEdit] = useState(
        {
        edit: styles.visible,
        submit: styles.hidden,
        }
    );

    const handleSubmit = async (e) => {

        e.preventDefault();
        
        const finalFormEndpoint = e.target.action;
        
        const data = Array.from(e.target.elements)
        .filter((input) => input.name)
        .reduce((obj, input) => Object.assign(obj, { [input.name]: input.value }), {});

        Object.assign(data, {id: props.id});
        
        try{    

            const result = await axios.patch(finalFormEndpoint, data, {headers: {'content-type': 'application/x-www-form-urlencoded'}});
            props.update();
            props.clickSubmit();
    
        }catch(err){
            console.error(err);
        }
    }

    function handleClick(event){
        let name = event.target.name;

        if(name === "edit"){
            setEdit({
                edit: styles.hidden,
                submit: styles.visible,
            });
            event.preventDefault();
        }else{
            setEdit({
                edit: styles.visible,
                submit: styles.hidden,
            });
        }
    }
    return(
        <div>
            <form action="http://localhost:8080/blog/edit" method="Post" onSubmit={handleSubmit} className={BlogFormStyle.BlogForm}>

                <input name = "title"className ={edit.submit} placeholder="Title here..." defaultValue={props.title}/>

                <div className={styles.break}></div>

                <textarea name = "editPost" className ={edit.submit} placeholder="Your post here..." defaultValue={props.post}></textarea>

                <div className={styles.decideEdit}>
                    <button type="submit" name = "submit" onClick = {handleClick}  className ={edit.submit} value = "Submit Edit">Submit</button>
                    <button name = "cancel" onClick={ handleClick}  className={edit.submit}>Cancel Edit</button>
                </div>

                <div className={styles.decideEdit}>
                    <button type="submit" name = {"edit"} onClick={ handleClick}  className={edit.edit} >Edit Post</button>
                    <button id = {props.id} onClick={props.deleteWarning} className={edit.edit}>Delete</button>
                </div>

                <div style={{display: "flex"}}>
                    <button id = {props.id} onClick={props.delete} className={props.startDel}>Confirm Delete</button>
                    <button id = {props.id} name = "deny" onClick={props.cancelDelete} className={props.startDel}>Cancel</button>
                </div>

            </form>
            
            
        </div>
    )

}

export default BlogEditForm;