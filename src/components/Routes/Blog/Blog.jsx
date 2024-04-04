import React from "react";
import styles from "../../../styles/Page.module.css";
import blogFormStyle from "../../../styles/Forms/BlogForm.module.css";
import blogStyle from "../../../styles/Blog.module.css";
import { useNavigation } from "react-router-dom";
import Loading from "../Loading";
import axios from "axios";


import {
    Outlet,
    Link,
    useLoaderData,
    Form,
    redirect,
  } from "react-router-dom";

export async function blogLoader(){
    try {
        const result = await axios.get("https://hereafterproject.onrender.com/blog", {withCredentials:true}) ;
        return result.data;
    } catch (err) {
        console.error(err);
    }
}

export async function action({request, params}){
        const formData = await request.formData();
        const add = Object.fromEntries(formData);
        const finalFormEndpoint = "https://hereafterproject.onrender.com/blog/post";

        try{

            const result = await axios.post(finalFormEndpoint, add, {headers: {'content-type': 'application/x-www-form-urlencoded'}, withCredentials: true});

            return redirect('')
        }catch(err){
            console.error(err);
        }
        
}

function Blog(){
    const nav = useNavigation();
    const posts = useLoaderData();
    
    return(
        <div className={styles.background}>
            <h1>{nav.state=="Loading" && <Loading/>}</h1>
            <h1>Blog</h1>
            
            <Outlet/>
            <div className={blogStyle.blogContainer}>
                
                <ul className={blogStyle.blogLinks}>
                    <li key={0}><Link to={localStorage.getItem('user-token')? `add` : ``}>{localStorage.getItem('user-token')?'Add Post':''}</Link></li>
                    {//map links to each blog post
                    
                        localStorage.getItem('user-token') &&
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
                        return <li key={x.id}>
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