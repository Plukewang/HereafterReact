import React from "react";
import { useState } from "react";
import styles from "../../styles/Page.module.css";
import BlogEditForm from "./Forms/BlogEditForm";
import axios from "axios";

function BlogPost(props){
    const [display, setDisplay] = useState({visibility: "visible"});
    const [editDisplay, setEditDisplay] = useState({visibility: "hidden"});

    const [del, setDel] = useState({visibility: "hidden"})


    function handleClickEdit(){//handle visibility of original post vs the form


        setDisplay({visibility: "hidden"});
        setEditDisplay({visibility: "visible"});

    }   

    function handleEditSubmit(){//pass to blogform, updates visibility

        setDisplay({visibility: "visible"});
        setEditDisplay({visibility: "hidden"});
    }

    async function handleClickDelete(e){//handle post deletion for individual posts
        e.preventDefault();
        setDel({visibility: "hidden"});
        const deleteId = e.target.id;
        const finalFormEndpoint = "http://localhost:8080/blog/delete";
        try{
            const result = await axios.post(finalFormEndpoint, {id: deleteId}, {headers: {'content-type': 'application/x-www-form-urlencoded'}});
            console.log(result.data);
            props.update();
        }catch(err){
            console.error(err);
        }
    }

    function handleCancelDelete(){
        setDel({visibility: "hidden"});
    }

    function handleDeleteWarning(){
        setDel({visibility: "visible"});
    }




    return (
        <div key = {props.id} className={styles.right} style = {display}>
            <h2 style={{textAlign: "left"}}>{props.title}</h2>
            <h3>{props.post_time}</h3>
            <p style={{width: "100%"}}>
                {props.post}
            </p>

            <div style = {editDisplay}>
                <BlogEditForm id = {props.id} update={props.update} clickSubmit = {handleEditSubmit} title = {props.title} post = {props.post}/>
                
                <button id = {props.id} onClick = {handleClickEdit}>Edit</button>
            </div>

            <button id = {props.id} onClick={handleDeleteWarning}>Delete</button>
            <div style = {del}>
                <p>Are you sure you want to delete this post?</p>
                <button id = {props.id} onClick={handleClickDelete}>Delete</button>
                <button name = "deny" onClick={handleCancelDelete}>No</button>
            </div>


        </div>
        )

}

export default BlogPost;
