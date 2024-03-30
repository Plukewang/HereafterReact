import React from "react";
import styles from "../../styles/Page.module.css";
import blogFormStyle from "../../styles/Forms/BlogForm.module.css";
import blogStyle from "../../styles/Blog.module.css";
import { useEffect, useState } from "react";
import BlogForm from "../Page/Forms/BlogForm";
import BlogPost from "../Page/BlogPost";
import axios from "axios";
import Nav from "../Nav";

import {
    Outlet,
    Link,
    useLoaderData,
    Form,
    redirect,
  } from "react-router-dom";

export async function blogLoader(){
    try {
        const result = await axios.get("https://hereafterproject.onrender.com/blog") ;
        return result.data;
    } catch (err) {
        console.error(err);
    }
}

export async function action({request, params}){
        const formData = await request.formData();
        const add = Object.fromEntries(formData);
        const finalFormEndpoint = "http://localhost:8080/blog/post";

        try{
            console.log(true)
            const result = await axios.post(finalFormEndpoint, add, {headers: {'content-type': 'application/x-www-form-urlencoded'}});
            console.log(true)
            return redirect('')
        }catch(err){
            console.error(err);
        }
        
}

function Blog(){
    const posts = useLoaderData();
    
    return(
        <div className={styles.background}>

            <h1>Blog</h1>
            <Outlet/>
            <div className={blogStyle.blogContainer}>
                
                <ul className={blogStyle.blogLinks}>
                    <li><Link to={`add`}>Add Post</Link></li>
                    {//map links to each blog post
                        posts.map((post,i)=>{
                            return <li key = {post.id}>
                                <Link to={`${post.id}`}>
                                    <h3>{post.title}</h3>
                            
                                </Link>
                                
                            </li>
                        })
                    }
                </ul>
                <ul className={blogStyle.blogPosts}>
                {
                    posts.map(x=>{
                        return <li>
                            <h2>{x.title}</h2>
                            <h3>{x.post_time}</h3>
                            <p>{x.post}</p>
                            
                        </li>
                    })
                }
                
                </ul>
                
                
            </div>
            
            
            
        </div>
    )
}

export default Blog;

/*
<Form method="post" >
                    <input name = "title" className={blogFormStyle.visible} placeholder="Title here..."/>
                            
                    <textarea name = "post" className={blogFormStyle.visible} placeholder="Your post here..."></textarea>

                    <div className={blogFormStyle.decideEdit}>              
                        <button type="submit" name = "submit" className={blogFormStyle.visible} value = "Submit Post">Submit</button>
                    </div>
                </Form> */

/* const [posts,setPosts] = useState([]);//for updating posts

    useEffect(()=>{
        
        async function fetchData() {//fetch data from backend api
            try {
                const result = await axios.get("https://hereafterproject.onrender.com/blog") ;
                setPosts(result.data);
            } catch (err) {
                console.log(err);
            }
        }

        fetchData();
    },[])
    
    const reload = (posts)=>{
        setPosts(prev=>posts)
    }

    const addPost = (post)=>{
        setPosts(prev=>[post, ...prev]);
    }
    
    return (
        <div  className = {styles.background} >     
            <h1>Blog</h1>
            <h2>Updates Weekly!</h2>
            <BlogForm update = {(x)=>addPost(x)}/>

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
    )*/