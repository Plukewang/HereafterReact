import React from "react";
import { useState } from "react";
import BlogFormStyle from "../../styles/Forms/BlogForm.module.css"
import BlogEditForm from "./Forms/BlogEditForm";
import axios from "axios";

function BlogPost(props){
    const [display, setDisplay] = useState({display: "block"});
    const [editDisplay, setEditDisplay] = useState({display: "none"});
    
    const [del, setDel] = useState(BlogFormStyle.visible)
    const [startDel, setStartDel] = useState(BlogFormStyle.hidden);


    function handleEditSubmit(){//pass to blogform, updates visibility

        setDisplay({display: "block"});
        setEditDisplay({display: "none"});
    }

    async function handleClickDelete(e){//handle post deletion for individual posts
        e.preventDefault();
        setDel(BlogFormStyle.visible);
        setStartDel(BlogFormStyle.hidden);
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
        setDel(BlogFormStyle.visible);
        setStartDel(BlogFormStyle.hidden);
    }

    function handleDeleteWarning(){
        setDel(BlogFormStyle.hidden);
        setStartDel(BlogFormStyle.visible);
    }

    return (
        <div key = {props.id} style = {display} >
            <h2 style={{textAlign: "left"}}>{props.title}</h2>

            <h3>{props.post_time}</h3>

            <p style={{width: "100%"}}>
                {props.post}
            </p>
            <BlogEditForm id = {props.id} update={props.update} clickSubmit = {handleEditSubmit}
            title = {props.title} post = {props.post} deleteWarning = {handleDeleteWarning} cancelDelete = {handleCancelDelete} delete = {handleClickDelete}
            del = {del} startDel = {startDel}
             />

            


        </div>
        )

}

export default BlogPost;
