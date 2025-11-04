import React from "react";
import BlogFormStyle from '../../../../styles/Forms/BlogForm.module.css';
import {Form, useLoaderData, redirect} from "react-router-dom";
import axios from "axios";

export async function postBlog(add){
    try{
        const finalFormEndpoint = "https://hereafterproject.onrender.com/blog/post";
        const result = await axios.post(finalFormEndpoint, add, 
            {
                headers: {'content-type': 'application/x-www-form-urlencoded'}
            }
        );
        console.log(result.data);
        return result.data;
    }catch(err){
        console.error(err);
    }
}

export async function action({request}){
    //sends POST request to add a blog post to the database via React Router Form element
    const formData = await request.formData();
    const add = Object.fromEntries(formData);
    if(add.cancel){
        return redirect(`/blog`);
    }

    const res = await postBlog(add);
    return redirect(`/blog`);

    
}

export default function AddPost(){
    return (
        <Form method="post" >
            <input className={BlogFormStyle.visible} name = "title"  placeholder="Title here..."/>
                                    
            <textarea className={BlogFormStyle.visible} name = "post" placeholder="Your post here..."></textarea>

            <div>              
                <button className={BlogFormStyle.visible} type="submit" name = "submit" value = "Submit Post">Submit</button>
                <button className={BlogFormStyle.visible} type="submit" name = "cancel" value = "cancel">Cancel</button>
            </div>
        </Form>
    )
}
