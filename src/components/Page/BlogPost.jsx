import React from "react";
import { useState } from "react";
import styles from "../../styles/Page.module.css";
import BlogFormStyle from "../../styles/Forms/BlogForm.module.css"
import BlogEditForm from "./Forms/BlogEditForm";
import axios from "axios";

function BlogPost(props){
    const [display, setDisplay] = useState({display: "block"});
    const [editDisplay, setEditDisplay] = useState({display: "none"});
    
    const [del, setDel] = useState(BlogFormStyle.hidden)
    const [startDel, setStartDel] = useState(BlogFormStyle.visible);


    function handleClickEdit(){//handle visibility of original post vs the form
        setDisplay({display: "none"});
        setEditDisplay({display: "block"});

    }   

    function handleEditSubmit(){//pass to blogform, updates visibility

        setDisplay({display: "block"});
        setEditDisplay({display: "none"});
    }

    async function handleClickDelete(e){//handle post deletion for individual posts
        e.preventDefault();
        setDel(BlogFormStyle.hidden);
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
        setDel(BlogFormStyle.hidden);
        setStartDel(BlogFormStyle.visible);
    }

    function handleDeleteWarning(){
        setDel(BlogFormStyle.visible);
        setStartDel(BlogFormStyle.hidden);
    }




    return (
        <div key = {props.id} style = {display}>
            <h2 style={{textAlign: "left"}}>{props.title}</h2>
            <h3>{props.post_time}</h3>
            <p style={{width: "100%"}}>
                {props.post}
            </p>
            <BlogEditForm id = {props.id} update={props.update} clickSubmit = {handleEditSubmit} title = {props.title} post = {props.post}/>

            <button id = {props.id} onClick={handleDeleteWarning} className={startDel}>Delete</button>

            <div style={{display: "flex"}}>
                <button id = {props.id} onClick={handleClickDelete} className={del}>Are you sure?</button>
                <button id = {props.id} name = "deny" onClick={handleCancelDelete} className={del}>Cancel</button>
            </div>


        </div>
        )

}

export default BlogPost;
