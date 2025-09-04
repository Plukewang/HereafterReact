import React from "react";
import {
    Outlet,
    Link,
    useLoaderData,
  } from "react-router-dom";
import { blogLoader } from "../../../Routes/Blog/Blog";
import BlogFormStyle from '../../../../styles/Forms/BlogForm.module.css'
import axios from "axios";

export async function loader({params}){
    try {
        const result = await axios.get(`https://hereafterproject.onrender.com/blog/${params.blogid}`) ;
        console.log(result.data)
        return result.data;
    } catch (err) {
        console.log(err);
    }
}

function BlogPostTest(){
    const post = useLoaderData()

    return (
    <div style={{width: "50%"}}>
        <h2 style={{textAlign: "left"}}>{post.title}</h2>

        <h3>{post.post_time}</h3>

        <p style={{width: "100%"}}>
            {post.post}
        </p>
        <Link to={'edit'}><button className={BlogFormStyle.visible}>Edit</button></Link>
        <Link to={'delete'}><button className={BlogFormStyle.visible}> Delete</button></Link>
        <Outlet/>
    </div>
    )

}

export default BlogPostTest;
