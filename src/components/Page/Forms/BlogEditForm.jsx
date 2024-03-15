import React from "react";
import { useState } from "react";
import styles from "../../../styles/Forms/BlogForm.module.css";
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
        }else if (name ==="submit") {
            setEdit({
                edit: styles.visible,
                submit: styles.hidden,
            });
        }


    }

    return(
        <div>
            <form action="http://localhost:8080/blog/edit" method="Post" onSubmit={handleSubmit}>
                <input name = "title"className ={edit.submit} placeholder="Title here..." defaultValue={props.title}/>

                <textarea name = "editPost" className ={edit.submit} placeholder="Your post here..." defaultValue={props.post}>
                    
                </textarea>

                <input type="submit" name = {"edit"} onClick={ handleClick}  className={edit.edit} value = "Edit Post"/>


                <button type="submit" name = "submit" onClick = {handleClick}  className ={edit.submit} value = "Submit Edit">Submit</button>

            </form>
        </div>
    )

}

export default BlogEditForm;