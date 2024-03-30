import React from "react";
import styles from "../../styles/Page.module.css";

import { useEffect, useState } from "react";
import BlogForm from "../Page/Forms/BlogForm";
import BlogPost from "../Page/BlogPost";
import axios from "axios";
import Nav from "../Nav";


function Blog(){
    const [posts,setPosts] = useState([]);//for updating posts

    useEffect(()=>{
        
        async function fetchData() {//fetch data from backend api
            try {
                const result = await axios.get("http://localhost:8080/blog") ;
                setPosts(result.data);
                console.log(posts)
            } catch (err) {
                console.log(err);
            }
        }

        fetchData();
    },[])
    
    const reload = (posts)=>{
        setPosts(prev=>posts)
    }
    
    return (
        <div  className = {styles.background} >

                
                <h1>Blog</h1>
                <h2>Updates Weekly!</h2>
                <BlogForm update = {reload}/>
                
            

            <div>        
                {posts.map((post,i)=>{
                    return (
                        <div> 
                            <BlogPost key = {i} id ={post.id} title = {post.title} post_time = {post.post_time} post = {post.post} update = {reload}/>
                        </div>
                    );
                })}
   
            </div>

        </div>
    )
}

export default Blog;

/* <div className = {styles.right} >
                    <h2 style={{textAlign: "left"}}>What is The Hereafter?</h2>
                    <h3>Date</h3>
                    <p style={{width: "100%"}}>The Hereafter is an online virtual table-top-like role-playing game with a rich and complex world of lore and esoterica. 
                    As a player, you’ll explore and take part in creating the stories that revolve around a world that sits at the confluence of science, fantasy, and folklore. 
                    Players participate in either single-player sessions with the GM focused on developing and engaging with the characters of the world or in coordinated group 
                    activities through activities like raids and incursions. </p><br/>

                    <p style={{width: "100%"}}>The Hereafter is at its core a role-playing experience and a world-building project. Within this wiki you will 
                    find resources for both of these two core aspects of the project—character stories, vignettes of lore, gameplay mechanics, 
                    and much more. How each player chooses to engage with The Hereafter is based off of their own personal creativity and preferences:
                    immerse yourself in the world and learn all of its intricacies and its characters’ rich lives, or become a master duelist with an ever-growing arsenal of
                    techniques and implements; the choice is yours.
                    </p>
                </div>*/

            
/*<h2 style={{textAlign: "left"}}>{post.title}</h2>
                            <h3>{post.post_time}</h3>
                            <p style={{width: "100%"}}>
                                {post.post}
                            </p>
                            <button id = {post.id} onClick={handleClickDelete}>Delete</button>
                            <button id = {post.id} onClick = {handleClickEdit}>Edit</button> */